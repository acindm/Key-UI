import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './slide.scss';

export interface SlideProps {
  duration?: number;
  dots?: boolean;
  className?: string;
  style?: React.CSSProperties;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number, from: number) => void;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({
  duration = 3,
  dots = true,
  className,
  style,
  beforeChange,
  afterChange,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const [hasTransitionClassName, setHasTransitionClassName] = useState(true);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  const length = React.Children.count(children);
  const isTransitioning = useRef(false);
  const prevIndex = useRef(1);

  // 跳转到指定项
  const goTo = useCallback(
    (n: number) => {
      if (n > length || n < 1 || n === current || isTransitioning.current)
        return;
      prevIndex.current = current;
      setCurrent(n); // 更新当前项
      if (beforeChange) {
        beforeChange(prevIndex.current, n); // 执行前置回调
      }
    },
    [current, length, beforeChange],
  );

  // 切换到下一项
  const next = useCallback(() => {
    if (current < length) {
      goTo(current + 1);
    } else {
      goTo(1); // 循环回到第一张
    }
  }, [current, length, goTo]);

  // 自动播放
  const autoPlay = useCallback(() => {
    if (duration > 0) {
      const timeout = setTimeout(() => {
        next(); // 调用切换下一张
      }, duration * 1000);
      setTimeoutId(timeout); // 保存 timeoutId
    }
  }, [duration, next]);

  // 处理过渡结束事件
  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    if (afterChange) {
      afterChange(current, prevIndex.current); // 执行后置回调
    }
    // 处理滚动到第一项或最后一项的特殊逻辑
    if (current === length && prevIndex.current === 1) {
      setHasTransitionClassName(false);
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(0%)`;
        }
      }, 0);
    } else if (current === 1 && prevIndex.current === length) {
      setHasTransitionClassName(false);
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-100%)`;
        }
      }, 0);
    }
    // 启动或恢复自动播放
    autoPlay();
  }, [current, afterChange, length]);

  // 初始化时克隆节点
  useEffect(() => {
    const nodeList = Array.from(containerRef.current?.childNodes || []);
    nodeList.forEach((node) => {
      if (node.nodeType === 1) {
        const eleNode = node as HTMLElement;
        eleNode.style.flexShrink = '0';
      }
    });
    // 克隆第一项和最后一项
    if (containerRef.current) {
      const firstNode = nodeList[0]?.cloneNode(true);
      const lastNode = nodeList[nodeList.length - 1]?.cloneNode(true);
      containerRef.current.append(lastNode);
      containerRef.current.prepend(firstNode);
    }
  }, []);

  // 组件挂载后启动自动播放
  useEffect(() => {
    if (duration > 0) {
      autoPlay(); // 启动自动播放
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // 清除定时器
      }
    };
  }, [duration, autoPlay, timeoutId]);

  // 鼠标悬浮时暂停自动播放
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // 暂停自动播放
    }
  };

  // 鼠标离开时恢复自动播放
  const handleMouseLeave = () => {
    if (duration > 0) {
      autoPlay(); // 恢复自动播放
    }
  };

  const containerClassNames = classNames('Slide-container', {
    'has-transition-class-name': hasTransitionClassName,
  });

  return (
    <div
      className={classNames('Slide', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={containerClassNames}
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
      {dots && (
        <div className="Slide-dots-wrapper">
          {React.Children.map(children, (child, index) => (
            <span
              key={index}
              className={classNames('Slide-dot', {
                active: current === index + 1,
              })}
              onClick={() => goTo(index + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slide;
