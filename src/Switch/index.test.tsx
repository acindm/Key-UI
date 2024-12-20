import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Switch from './switch';

describe('Switch Component', () => {
  // 测试组件是否渲染成功
  it('renders the Switch component correctly', () => {
    const { getByRole } = render(<Switch />);
    const switchElement = getByRole('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass('cobalt-switch');
  });

  // 测试默认状态（defaultChecked=false）
  it('renders with the default unchecked state', () => {
    const { getByRole } = render(<Switch />);
    const switchElement = getByRole('switch');
    expect(switchElement).toHaveStyle('--switch-bg: rgba(201,205,212,1)');
  });

  // 测试开关状态切换
  it('toggles the switch state on click', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Switch onChange={handleChange} />);
    const switchElement = getByRole('switch');

    // 初始状态应为 false
    expect(switchElement).toHaveStyle('--switch-bg: rgba(201,205,212,1)');
    fireEvent.click(switchElement);

    // 状态切换后应为 true
    expect(switchElement).toHaveStyle('--switch-bg: #325DFF');
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(switchElement);
    expect(switchElement).toHaveStyle('--switch-bg: rgba(201,205,212,1)');
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  // 测试禁用状态
  it('does not toggle when disabled', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Switch disabled onChange={handleChange} />);
    const switchElement = getByRole('switch');

    fireEvent.click(switchElement);

    // 状态不变
    expect(switchElement).toHaveStyle('--switch-bg: rgba(201,205,212,1)');
    expect(handleChange).not.toHaveBeenCalled();
  });

  // 测试加载状态
  it('renders loading state correctly', () => {
    const { getByRole } = render(<Switch loading />);
    const switchElement = getByRole('switch');

    // 验证透明度是否变低
    expect(switchElement).toHaveStyle('--opacity: 0.6');

    // 验证禁用状态是否生效
    expect(switchElement).toHaveStyle('--disabled: not-allowed');
  });

  // 测试自定义子元素
  it('renders checked and unchecked children', () => {
    const { getByText } = render(
      <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />,
    );

    // 初始状态为 checked
    expect(getByText('ON')).toBeInTheDocument();

    fireEvent.click(getByText('ON'));

    // 切换状态后为 unchecked
    expect(getByText('OFF')).toBeInTheDocument();
  });

  // 测试小尺寸开关
  it('renders small size correctly', () => {
    const { getByRole } = render(<Switch small />);
    const switchElement = getByRole('switch');

    expect(switchElement).toHaveStyle('--switch-height: 16');
    expect(switchElement).toHaveStyle('--dot-size: 12px');
  });

  // // 测试动态宽度计算
  // it('calculates dynamic width based on children', () => {
  //   // 子元素内容
  //   const checkedChildren = <span>Enabled</span>;
  //   const unCheckedChildren = <span>Disabled</span>;

  //   // Mock clientWidth 提前覆盖
  //   jest.spyOn(HTMLDivElement.prototype, 'clientWidth', 'get').mockReturnValue(28);

  //   let switchElement;

  //   // 使用 act 强制更新 React 状态
  //   act(() => {
  //     const { getByRole } = render(
  //       <Switch checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} />,
  //     );
  //     switchElement = getByRole('switch');
  //   });

  //   // 验证动态宽度
  //   expect(switchElement).toHaveStyle('--switch-width: 58px');
  // });
});
