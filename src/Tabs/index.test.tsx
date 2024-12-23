import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Tabs from './tabs';

const tabsItems = [
  { key: '1', label: 'Tab 1', children: <div>Content 1</div> },
  { key: '2', label: 'Tab 2', children: <div>Content 2</div>, disabled: true },
  { key: '3', label: 'Tab 3', children: <div>Content 3</div> },
];

describe('Tabs 组件', () => {
  it('使用默认属性正确渲染', () => {
    const { getByText, container } = render(
      <Tabs defaultActiveKey="1" items={tabsItems} />,
    );

    // 验证 Tabs 导航是否正确渲染
    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
    expect(getByText('Tab 3')).toBeInTheDocument();

    // 验证默认激活的 Tab
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(container.querySelector('.active')).toHaveTextContent('Tab 1');
  });

  it('点击 Tab 时切换内容', () => {
    const { getByText, container } = render(
      <Tabs defaultActiveKey="1" items={tabsItems} />,
    );

    // 点击 Tab 3
    fireEvent.click(getByText('Tab 3'));

    // 验证激活的 Tab 和内容
    expect(container.querySelector('.active')).toHaveTextContent('Tab 3');
    expect(getByText('Content 3')).toBeInTheDocument();
    expect(getByText('Content 1')).not.toBeVisible();
  });

  it('点击禁用的 Tab 不切换', () => {
    const { getByText, container } = render(
      <Tabs defaultActiveKey="1" items={tabsItems} />,
    );

    // 点击禁用的 Tab 2
    fireEvent.click(getByText('Tab 2'));

    // 验证激活的 Tab 未发生变化
    expect(container.querySelector('.active')).toHaveTextContent('Tab 1');
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Content 2')).not.toBeVisible();
  });

  it('点击 Tab 时调用 onTabClick 回调', () => {
    const onTabClickMock = jest.fn();
    const { getByText } = render(
      <Tabs
        defaultActiveKey="1"
        items={tabsItems}
        onTabClick={onTabClickMock}
      />,
    );

    // 点击 Tab 3
    fireEvent.click(getByText('Tab 3'));

    // 验证 onTabClick 回调是否被调用
    expect(onTabClickMock).toHaveBeenCalledTimes(1);
    expect(onTabClickMock).toHaveBeenCalledWith('3', expect.any(Object));
  });

  it('支持自定义 className 和样式', () => {
    const { container } = render(
      <Tabs
        defaultActiveKey="1"
        items={tabsItems}
        className="custom-tabs"
        style={{ color: 'red' }}
      />,
    );

    // 验证自定义 className
    expect(container.firstChild).toHaveClass('custom-tabs');

    // 验证自定义样式
    expect(container.firstChild).toHaveStyle('color: red');
  });

  it('隐藏未激活的 Tab 内容', () => {
    const { getByText, queryByText } = render(
      <Tabs defaultActiveKey="1" items={tabsItems} />,
    );

    // 验证只有激活的 Tab 内容可见
    expect(getByText('Content 1')).toBeVisible();
    expect(queryByText('Content 2')).not.toBeVisible();
    expect(queryByText('Content 3')).not.toBeVisible();
  });

  it('支持不同的 Tab 类型（line/card）', () => {
    const { container, rerender } = render(
      <Tabs defaultActiveKey="1" items={tabsItems} type="line" />,
    );

    // 验证 line 类型的 class
    expect(container.querySelector('.nav-line')).toBeInTheDocument();

    // 切换为 card 类型
    rerender(<Tabs defaultActiveKey="1" items={tabsItems} type="card" />);

    // 验证 card 类型的 class
    expect(container.querySelector('.nav-card')).toBeInTheDocument();
  });
});
