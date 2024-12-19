import classNames from 'classnames';
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './button.scss';

// 为 Button 组件定义属性、提供类型检查和代码提示
// 约束props类型，确保传参正确
type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'middle' | 'large';
  type?:
    | 'primary'
    | 'default'
    | 'danger'
    | 'link'
    | 'warning'
    | 'info'
    | 'dashed';
  children?: ReactNode;
  href?: string;
  circle?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

const Button: React.FC<ButtonProps> = ({
  style,
  className,
  disabled = false,
  size = 'middle',
  type = 'default',
  children,
  href,
  circle,
  onClick,
  ...restProps
}) => {
  // 生成动态类名
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === 'link' && disabled,
    circle: type !== 'link' && circle,
  });
  // 根据type和href属性，判断是否为链接按钮
  if (type === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
export { ButtonProps };
