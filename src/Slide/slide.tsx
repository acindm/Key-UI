import classNames from 'classnames';
import React, {
  Children,
  CSSProperties,
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
  style?: CSSProperties;
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
    if (afterChange) {
      afterChange(current, prevIndex.current);
    }

    // 当 current 到头或到尾的时候，关闭动画，瞬间拉回到真实位置
    if (current === totalLength - 1) {
      setHasTransition(false);
      setCurrent(1);

      requestAnimationFrame(() => {
        setHasTransition(true);
        autoPlay();
      });
      return;
    }

    if (current === 0) {
      setHasTransition(false);
      setCurrent(originalLength);

      requestAnimationFrame(() => {
        setHasTransition(true);
        autoPlay();
      });
      return;
    }

    autoPlay();
  }, [current, totalLength, originalLength, afterChange, autoPlay]);

  /**
   * 每次 current 发生变化时，根据 current 值更新容器的 transform，实现轮播效果
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = `translateX(-${current * 100}%)`;
    container.style.transition = hasTransition ? 'transform 0.5s ease' : 'none';
  }, [current, hasTransition]);

  /**
   * 初始化：给容器首尾克隆节点 + 启动自动播放
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = Array.from(container.children) as HTMLElement[];
    // 若已克隆过，避免重复克隆
    if (slides.length > 0 && slides.length !== originalLength) {
      return;
    }

    const firstNode = slides[0].cloneNode(true);
    const lastNode = slides[slides.length - 1].cloneNode(true);

    container.insertBefore(lastNode, slides[0]);
    container.appendChild(firstNode);

    container.style.transform = 'translateX(-100%)';

    // 启动自动播放
    autoPlay();

    // 清理定时器
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
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

  /**
   * 指示点（可选）
   */
  const renderDots = dots && (
    <div className="Slide-dots-wrapper">
      {React.Children.map(children, (_, index) => {
        // dots 的 index 从 1 开始
        const dotIndex = index + 1;
        return (
          <span
            key={dotIndex}
            className={classNames('Slide-dot', {
              active: current === dotIndex,
            })}
            onClick={() => goTo(dotIndex)}
          />
        );
      })}
    </div>
  );

  return (
    <div
      className={classNames('Slide', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="Slide-container"
        style={{ display: 'flex' }}
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
      {renderDots}
    </div>
  );
};

export default Slide;
