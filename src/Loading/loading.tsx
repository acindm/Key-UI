import classNames from 'classnames';
import React, { forwardRef, useCallback } from 'react';
import Icon from '../Icon/icon';
import './loading.scss';

export type SkeletonProps = {
  className?: string;
  loading?: boolean;
  title?: boolean;
  avatar?: boolean;
  row?: number;
  width?: Array<string | number>;
  size?: number;
};

const SkeletonCpns = (
  {
    className,
    loading = true,
    title,
    avatar,
    row = 3,
    width = [],
    size = 40,
  }: SkeletonProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const firstClass = 'skeleton';
  const skeletonClassNames = classNames(className, firstClass);

  // 根据宽度动态设置样式
  const lineHeight = useCallback(
    (i: number) => {
      if (width && width.length) {
        if (typeof width[i] === 'string') {
          return {
            width: width[i],
          };
        }
        if (typeof width[i] === 'number') {
          return {
            width: `${width[i]}px`,
          };
        }
      }
      return {};
    },
    [width],
  );

  return loading ? (
    <div
      className={skeletonClassNames}
      role="presentation" // 添加 role 属性
      style={{ '--skeleton-container-avatar-size': `${size}px` } as any}
      ref={ref}
    >
      {avatar && <div className={`${firstClass}-avatar`} />}
      <div className={`${firstClass}-container`}>
        {title && <div className={`${firstClass}-container-title`} />}
        {new Array(row).fill('').map((_, i) => (
          <div
            className={`${firstClass}-container-line`}
            style={lineHeight(i)}
            key={i}
          />
        ))}
      </div>
    </div>
  ) : null;
};

// 转发ref
const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(SkeletonCpns);
export type LoadingProps = {
  show?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
};

const Loading = ({ show = true, className, style, color }: LoadingProps) => {
  const customStyle: React.CSSProperties = {
    ...style,
    color: color || style?.color || '#1890ff',
  };

  return (
    <>
      {show ? (
        <Icon
          type="loading"
          role="img" // 添加 role 属性
          className={classNames('animate-spin', className)}
          style={customStyle}
        />
      ) : null}
    </>
  );
};

export { Loading, Skeleton };
