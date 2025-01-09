import classNames from 'classnames';
import React, {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  duration = 2,
  dots = true,
  className,
  style,
  beforeChange,
  afterChange,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 首尾各自克隆一个节点
  const originalLength = Children.count(children);
  const totalLength = originalLength + 2; // 克隆首尾后总节点数

  const [current, setCurrent] = useState(1);
  const [hasTransition, setHasTransition] = useState(true);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  const isTransitioning = useRef(false);
  const prevIndex = useRef(1);

  // 跳转到指定项
  const goTo = useCallback(
    (n: number) => {
      if (isTransitioning.current) return;
      if (n === current) return;

      // 调用 beforeChange
      if (beforeChange) {
        beforeChange(current, n);
      }

      isTransitioning.current = true;
      prevIndex.current = current;
      setCurrent(n);
    },
    [beforeChange, current],
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  /**
   * 自动轮播
   */
  const autoPlay = useCallback(() => {
    // duration <= 0 时不自动播放
    if (duration <= 0) return;

    // 如果已有定时器，先清掉
    if (timerId) {
      clearTimeout(timerId);
    }

    // 设置新的定时器
    const id = window.setTimeout(() => {
      next();
    }, duration * 1000);
    setTimerId(id);
  }, [duration, next, timerId]);

  /**
   * 过渡结束，处理首尾跳转
   */
  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    // afterChange 回调
    if (afterChange) {
      afterChange(current, prevIndex.current);
    }

    // 当 current 到头或到尾的时候，关闭动画，瞬间拉回到真实位置
    if (current === totalLength - 1) {
      // 说明此时在克隆的最后一项，需要切换回真正的第一项
      setHasTransition(false);
      setCurrent(1);
    } else if (current === 0) {
      // 说明此时在克隆的第一项，需要切换回真正的最后一项
      setHasTransition(false);
      setCurrent(originalLength);
    } else {
      // 正常情况自动播放
      autoPlay();
    }
  }, [current, totalLength, originalLength, afterChange, autoPlay]);

  /**
   * 每次 current 发生变化时，根据 current 值更新容器的 transform，实现轮播效果
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // 使用 transform: translateX(-current * 100%)
    // 因为一开始我们在容器头部克隆了最后一项，所以让“真正第一张”对应 current=1。
    requestAnimationFrame(() => {
      container.style.transform = `translateX(-${current * 100}%)`;
      // 如果需要动画则加上 transition，否则移除
      container.style.transition = hasTransition
        ? 'transform 0.5s ease'
        : 'none';
    });

    // 如果是通过 handleTransitionEnd 重置了 hasTransition = false，需要在下一帧再开启
    if (!hasTransition) {
      // 等当前帧执行后再重开动画，不会让用户看到动画抖动
      requestAnimationFrame(() => {
        setHasTransition(true);
      });
    }
  }, [current, hasTransition]);

  /**
   * 初始化：给容器首尾克隆节点 + 启动自动播放
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 拿到所有子节点
    const slides = Array.from(container.children) as HTMLElement[];
    // 若已克隆过，避免重复克隆
    if (slides.length > 0 && slides.length !== originalLength) {
      return;
    }

    // 克隆第一张和最后一张
    const firstNode = slides[0].cloneNode(true);
    const lastNode = slides[slides.length - 1].cloneNode(true);

    // 在最前面插入最后一张的克隆、在最后面插入第一张的克隆
    container.insertBefore(lastNode, slides[0]);
    container.appendChild(firstNode);

    // 刚开始我们想展示“真正的第一张”，所以把容器拉到 -100% 位置（对应 current=1）
    container.style.transform = 'translateX(-100%)';

    // 启动自动播放
    autoPlay();

    // 清理定时器
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [originalLength, autoPlay, timerId]);

  /**
   * 鼠标进入暂停自动播放
   */
  const handleMouseEnter = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(undefined);
    }
  };

  /**
   * 鼠标离开继续自动播放
   */
  const handleMouseLeave = () => {
    autoPlay();
  };

  const containerClassNames = classNames('Slide-container');

  return (
    <div
      className={classNames('Slide', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={containerClassNames}
        style={{ display: 'flex' }}
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
      {dots && (
        <div className="Slide-dots-wrapper">
          {React.Children.map(children, (_, index) => {
            const dotIndex = index + 1;
            return (
              <span
                key={index}
                className={classNames('Slide-dot', {
                  active: current === dotIndex,
                })}
                onClick={() => goTo(dotIndex)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slide;
