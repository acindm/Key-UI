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

type SwitchProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  disabled?: boolean;
  small?: boolean;
  defaultChecked?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  loading?: boolean;
  onChange?: (checked: boolean) => void;
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
    const childRef = useRef<HTMLDivElement | null>(null); // 使用 ref 替代 document.querySelector
    const [switchWidth, setSwitchWidth] = useState<number>(small ? 28 : 40); // 默认宽度
    const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

    // 获取主题色
    const getSiteTheme = () => {
      return window.localStorage.getItem('dumi:prefers-color') || 'light';
    };

    const getRenderColor = (isDark: boolean): string => {
      return isDark ? '#50c9d2' : '#325DFF';
    };

    const theme = getSiteTheme();

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
        '--switch-bg': switchStatus
          ? getRenderColor(theme === 'auto' || theme === 'dark')
          : 'rgba(201,205,212,1)',
        '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
        '--opacity': disabled || loading ? '0.6' : '1',
      };
    }, [switchStatus, disabled, switchWidth, small, theme]);

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
        <div className="cobalt-switch-dot">{loading}</div>
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
