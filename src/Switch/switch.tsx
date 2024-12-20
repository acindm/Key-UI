import classNames from 'classnames';
import React, {
  CSSProperties,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './switch.scss';

type SwitchProps = {
  className?: string;
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
    const [switchWidth, setSwitchWidth] = useState<number>(0);
    const [switchChildWidth, setSwitchChildWidth] = useState<number>(0);
    const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

    const getSiteTheme = () => {
      const theme = window.localStorage.getItem('dumi:prefers-color');
      return theme;
    };

    const getRenderColor = (isDark: boolean): string => {
      return isDark ? '#50c9d2' : '#325DFF';
    };

    const theme = getSiteTheme();
    // const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

    const classes = classNames(className, 'cobalt-switch');

    const toggleSwitch = () => {
      if (disabled || loading) return;
      setSwitchStatus(!switchStatus);
      onChange?.(!switchStatus);
    };

    const switchStyle = useMemo(() => {
      return {
        '--switch-width': `${switchWidth}px`,
        '--switch-height': `${small ? 16 : 24}`,
        '--dot-transformX': switchStatus
          ? `${switchWidth - 16 - (small ? -2 : 4)}px`
          : '4px',
        '--dot-transformY': small ? '2.5px' : '4px',
        '--dot-size': `${small ? '12px' : '16px'}`,
        '--child-transform': switchStatus
          ? typeof checkedChildren === 'string'
            ? `4px`
            : '8px'
          : `${
              switchWidth -
              switchChildWidth -
              (typeof checkedChildren === 'string' ? 6 : -2)
            }px`,
        '--switch-bg': switchStatus
          ? getRenderColor(theme === 'auto' || theme === 'dark')
          : 'rgba(201,205,212,1)',
        '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
        '--opacity': disabled || loading ? '0.6' : '1',
      };
    }, [switchStatus, disabled, switchWidth, small]);

    useEffect(() => {
      if (
        checkedChildren &&
        unCheckedChildren &&
        document.querySelector('.cobalt-switch-child')
      ) {
        setSwitchChildWidth(
          (document.querySelector('.cobalt-switch-child') as HTMLDivElement)
            .clientWidth,
        );
        setSwitchWidth(
          (document.querySelector('.cobalt-switch-child') as HTMLDivElement)
            .clientWidth + 30,
        );
      } else {
        setSwitchWidth(small ? 28 : 40);
      }
    }, [
      document.querySelector('.cobalt-switch-child')?.clientWidth,
      checkedChildren,
      unCheckedChildren,
    ]);

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
          <div className="cobalt-switch-child">
            {switchStatus ? checkedChildren : unCheckedChildren}
          </div>
        )}
      </div>
    );
  },
);

export default Switch;
export type { SwitchProps };
