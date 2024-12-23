import classNames from 'classnames';
import React from 'react';
import './loading-circle';
import { IconTypes } from './type';

export type IconProps = {
  type: IconTypes;
  onClick?: () => void;
  show?: boolean;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  role?: string; // 添加 role 属性
};

// 图标组件，确保传入的 style 可以正确覆盖 SVG 的颜色
const IconFont = ({
  type,
  style = {}, // 默认空对象
  className = '', // 默认空字符串
  onClick,
}: IconProps) => {
  // 合并传入的样式，确保颜色优先级正确
  const iconStyle: React.CSSProperties = {
    ...style, // 用户自定义样式
    fill: style?.fill || style?.color || '#000000', // 默认颜色为黑色
  };

  return (
    <svg
      className={classNames('icon', className)}
      style={iconStyle}
      role="img" // 明确指定角色
      aria-hidden="false" // 确保图标可被辅助技术读取
      onClick={onClick}
    >
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};

// 主 Icon 组件，支持可选链接或纯图标渲染
const Icon = ({
  show = true, // 默认显示
  href,
  className = '', // 默认空字符串
  ...attr
}: IconProps) => {
  if (!href) {
    return (
      <>
        {show && (
          <IconFont
            className={classNames('cursor-pointer', className)}
            {...attr}
          />
        )}
      </>
    );
  }
  return (
    <a href={href} className="cursor-pointer">
      {show && <IconFont className={className} {...attr} />}
    </a>
  );
};

export default Icon;
