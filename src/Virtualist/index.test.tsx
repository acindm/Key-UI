import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FixedSizeList from './fixedSize';

describe('FixedSizeList Component', () => {
  // 测试用的子组件
  const ItemRenderer = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div data-testid={`item-${index}`} style={style}>
      Item {index}
    </div>
  );

  it('should render the FixedSizeList with correct number of visible items', () => {
    // 渲染组件
    render(
      <FixedSizeList width={300} height={150} itemCount={10} itemSize={50}>
        {ItemRenderer}
      </FixedSizeList>,
    );

    // 验证是否渲染了正确数量的子元素
    expect(screen.getByTestId('item-0')).toBeInTheDocument();
    expect(screen.getByTestId('item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-2')).toBeInTheDocument();
    expect(screen.queryByTestId('item-3')).not.toBeInTheDocument();
  });

  it('should render the correct style for each item', () => {
    // 渲染组件
    render(
      <FixedSizeList width={300} height={150} itemCount={10} itemSize={50}>
        {ItemRenderer}
      </FixedSizeList>,
    );

    // 验证每个渲染的子元素样式
    const item0 = screen.getByTestId('item-0');
    const item1 = screen.getByTestId('item-1');

    expect(item0).toHaveStyle('height: 50px');
    expect(item0).toHaveStyle('width: 100%');
    expect(item1).toHaveStyle('height: 50px');
    expect(item1).toHaveStyle('width: 100%');
  });

  it('should update visible items when scrolling', () => {
    // 渲染组件
    const { container } = render(
      <FixedSizeList width={300} height={150} itemCount={20} itemSize={50}>
        {ItemRenderer}
      </FixedSizeList>,
    );

    const scrollContainer = container.firstChild as HTMLElement;

    // 初始状态
    expect(screen.getByTestId('item-0')).toBeInTheDocument();
    expect(screen.getByTestId('item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-2')).toBeInTheDocument();
    expect(screen.queryByTestId('item-3')).not.toBeInTheDocument();

    // 模拟滚动
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 50 } });

    // 验证滚动后渲染的子元素
    expect(screen.getByTestId('item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-2')).toBeInTheDocument();
    expect(screen.getByTestId('item-3')).toBeInTheDocument();
    expect(screen.queryByTestId('item-0')).not.toBeInTheDocument();
  });

  it('should correctly handle empty children or invalid props', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // 渲染无效组件
    render(
      <FixedSizeList width={0} height={0} itemCount={0} itemSize={0}>
        {ItemRenderer}
      </FixedSizeList>,
    );

    // 验证错误信息
    expect(consoleErrorSpy).toHaveBeenCalledWith('请按要求设置属性');
    consoleErrorSpy.mockRestore();
  });

  it('should calculate the total height correctly', () => {
    render(
      <FixedSizeList width={300} height={150} itemCount={20} itemSize={50}>
        {ItemRenderer}
      </FixedSizeList>,
    );

    const totalHeightDiv = screen.getByText((content, element) => {
      return element?.style.height === '1000px';
    });

    expect(totalHeightDiv).toBeTruthy();
  });

  it('should render items with dynamic height', () => {
    const DynamicItemRenderer = ({
      index,
      style,
    }: {
      index: number;
      style: React.CSSProperties;
    }) => (
      <div
        data-testid={`dynamic-item-${index}`}
        style={{ ...style, height: index % 2 === 0 ? '60px' : '40px' }}
      >
        Dynamic Item {index}
      </div>
    );

    render(
      <FixedSizeList width={300} height={150} itemCount={10} itemSize={50}>
        {DynamicItemRenderer}
      </FixedSizeList>,
    );

    // 验证动态高度的渲染
    const dynamicItem0 = screen.getByTestId('dynamic-item-0');
    const dynamicItem1 = screen.getByTestId('dynamic-item-1');

    expect(dynamicItem0).toHaveStyle('height: 60px');
    expect(dynamicItem1).toHaveStyle('height: 40px');
  });
});
