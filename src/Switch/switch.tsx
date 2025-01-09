import classNames from 'classnames';
import React, {
  CSSProperties,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './switch.scss';

// 定义组件的属性类型
type SwitchProps = {
  className?: string; // 自定义类名
  children?: ReactNode; // 子元素
  style?: CSSProperties; // 行内样式
  disabled?: boolean; // 是否禁用
  small?: boolean; // 是否为小尺寸
  defaultChecked?: boolean; // 默认状态是否选中
  checkedChildren?: ReactNode; // 选中状态下显示的内容
  unCheckedChildren?: ReactNode; // 未选中状态下显示的内容
  loading?: boolean; // 是否为加载状态
  onChange?: (checked: boolean) => void; // 状态变化时的回调函数
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      disabled,
      className,
      style,
      defaultChecked = false,
      small,
      checkedChildren,
      unCheckedChildren,
      loading,
      onChange,
    },
    ref,
  ) => {
    const childRef = useRef<HTMLDivElement | null>(null);
    const [switchWidth, setSwitchWidth] = useState<number>(small ? 28 : 40); // 默认宽度
    const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

    // 获取主题色
    const classes = classNames(className, 'cobalt-switch');

    // 切换开关状态
    const toggleSwitch = () => {
      if (disabled || loading) return;
      setSwitchStatus(!switchStatus);
      onChange?.(!switchStatus);
    };

    // 计算动态样式
    const switchStyle = useMemo(() => {
      return {
        '--switch-width': `${switchWidth}px`,
        '--switch-height': `${small ? 16 : 24}`,
        '--dot-transformX': switchStatus
          ? `${switchWidth - 16 - (small ? -2 : 4)}px`
          : '4px',
        '--dot-transformY': small ? '2.5px' : '4px',
        '--dot-size': `${small ? '12px' : '16px'}`,
        '--child-transform': switchStatus ? '4px' : `${switchWidth - 30}px`,
        '--switch-bg': switchStatus ? '#50c9d2' : 'rgba(201,205,212,1)', // 修改选中状态颜色
        '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
        '--opacity': disabled || loading ? '0.6' : '1',
      };
    }, [switchStatus, disabled, switchWidth, small]);

    // 动态计算子元素宽度
    useEffect(() => {
      if (childRef.current) {
        const childWidth = childRef.current.clientWidth; // 使用 ref 获取子元素宽度
        setSwitchWidth(childWidth + 30); // 动态调整开关宽度
      } else {
        setSwitchWidth(small ? 28 : 40); // 设置默认宽度
      }
    }, [checkedChildren, unCheckedChildren, small]);

    return (
      <div
        role="switch"
        className={classes}
        style={{ ...style, ...switchStyle }}
        onClick={toggleSwitch}
        ref={ref}
      >
        <div className="cobalt-switch-dot">
          {loading ? <span>Loading...</span> : null}
        </div>
        {checkedChildren && unCheckedChildren && (
          <div ref={childRef} className="cobalt-switch-child">
            {switchStatus ? checkedChildren : unCheckedChildren}
          </div>
        )}
      </div>
    );
  },
);

export default Switch;
export type { SwitchProps };
