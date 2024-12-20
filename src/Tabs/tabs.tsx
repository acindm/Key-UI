import classNames from 'classnames';
import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import './tabs.scss';

export type TabsType = 'line' | 'card';

export type TabItemType = {
  key: string | number;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
};

export type TabsProps = {
  className?: string;
  style?: CSSProperties;
  defaultActiveKey: string | number;
  type?: TabsType;
  items: TabItemType[];
  onTabClick?: (key: string | number, e: MouseEvent) => void;
};

const Tabs: FC<TabsProps> = ({
  className,
  style,
  defaultActiveKey,
  type = 'line',
  onTabClick,
  items,
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const tabsClassName = classNames('cobalt-tabs', className);
  const classes = classNames('cobalt-tabs-nav', `nav-${type}`);

  const clickHandler = (
    key: string | number,
    e: MouseEvent,
    disabled: boolean | undefined,
  ) => {
    if (!disabled) {
      setActiveKey(key);
      onTabClick?.(key, e);
    }
  };

  return (
    <div className={tabsClassName} style={style}>
      <ul className={classes}>
        {items.map((item) => (
          <li
            className={classNames('cobalt-tabs-nav-item', {
              active: activeKey === item.key,
              disabled: item.disabled,
            })}
            key={item.key}
            onClick={(e) => {
              clickHandler(item.key, e, item.disabled);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="cobalt-tabs-content">
        {items.map((item) => {
          return (
            <div
              key={item.key}
              className={classNames('cobalt-tabs-content-item', {
                hidden: item.key !== activeKey,
              })}
            >
              {item.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
