import classNames from 'classnames'
import React from 'react'
import './loading-circle'
import { IconTypes } from './type'

export type IconProps = {
  type: IconTypes
  onClick?: () => void
  show?: boolean
  href?: string
  className?: string
  style?: React.CSSProperties
}
//想要修改图标颜色必须的设置（踩坑后成功，重点关注下）
const IconFont = ({ type, style, className, onClick }: IconProps) => {
  // 确保传入的 style 可以正确覆盖 SVG 的颜色
  const iconStyle: React.CSSProperties = {
    ...style, // 保持其他样式
    fill: style?.fill || style?.color || '#000000', // 设置默认颜色为黑色
  };

  return (
    <svg className={classNames('icon', className)} style={iconStyle} aria-hidden="true" onClick={onClick}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};


const Icon = ({ show, href, className, ...attr }: IconProps) => {
  if (!href) return <>{show && <IconFont className={classNames('cursor-pointer', className)} {...attr} />}</>
  return (
    <a href={href} className="cursor-pointer">
      {show && <IconFont className={className} {...attr} />}
    </a>
  )
}
Icon.defaultProps = {
  show: true,
}
export default Icon