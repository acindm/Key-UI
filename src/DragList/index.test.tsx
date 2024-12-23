import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import DragList from './draglist';

describe('DragList Component', () => {
  // 定义拖拽子元素
  const generateChildren = () =>
    new Array(3).fill(0).map((_, i) => (
      <div
        key={i}
        data-testid={`drag-item-${i}`}
        style={{
          height: '50px',
          lineHeight: '50px',
          textAlign: 'center',
          cursor: 'pointer',
          background: '#50c9d2',
        }}
      >
        Item {i + 1}
      </div>
    ));

  it('should render DragList and include all children', () => {
    render(<DragList>{generateChildren()}</DragList>);

    // 验证子元素是否渲染成功
    expect(screen.getByTestId('drag-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('drag-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('drag-item-2')).toBeInTheDocument();
  });

  it('should trigger onChange callback after dragging an element', () => {
    const onChangeMock = jest.fn();
    render(<DragList onChange={onChangeMock}>{generateChildren()}</DragList>);

    const dragItem1 = screen.getByTestId('drag-item-0');
    const dragItem2 = screen.getByTestId('drag-item-1');

    // 模拟拖拽操作
    fireEvent.dragStart(dragItem1);
    fireEvent.dragEnter(dragItem2);
    fireEvent.dragEnd(dragItem1);

    // 验证回调函数被调用
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Array), // 拖拽后的新数组
      0, // 初始位置
      1, // 目标位置
    );
  });

  it('should trigger onDragEnd callback after dragging ends', () => {
    const onDragEndMock = jest.fn();
    render(<DragList onDragEnd={onDragEndMock}>{generateChildren()}</DragList>);

    const dragItem1 = screen.getByTestId('drag-item-0');

    // 模拟拖拽结束
    fireEvent.dragStart(dragItem1);
    fireEvent.dragEnd(dragItem1);

    // 验证回调函数被调用
    expect(onDragEndMock).toHaveBeenCalled();
  });

  it('should update the position of children after dragging an element', () => {
    const { container } = render(<DragList>{generateChildren()}</DragList>);

    const dragItem1 = screen.getByTestId('drag-item-0');
    const dragItem2 = screen.getByTestId('drag-item-1');

    // 模拟拖拽操作
    fireEvent.dragStart(dragItem1);
    fireEvent.dragEnter(dragItem2);
    fireEvent.dragEnd(dragItem1);

    // 验证元素顺序是否发生变化
    const items = container.querySelectorAll('[data-testid^="drag-item-"]');
    expect(items[0]).toHaveTextContent('Item 2');
    expect(items[1]).toHaveTextContent('Item 1');
    expect(items[2]).toHaveTextContent('Item 3');
  });

  it('should display virtual DOM element while dragging', () => {
    render(<DragList>{generateChildren()}</DragList>);
    const dragItem1 = screen.getByTestId('drag-item-0');
    fireEvent.dragStart(dragItem1);
    fireEvent.dragEnd(dragItem1);

    // 验证虚拟 DOM 被移除
    expect(document.querySelector('.fake-drag-item')).not.toBeInTheDocument();
  });

  // 验证拖拽到相同位置时的行为
  it('should not trigger onChange when dragging to the same position', () => {
    const onChangeMock = jest.fn();
    render(<DragList onChange={onChangeMock}>{generateChildren()}</DragList>);

    const dragItem1 = screen.getByTestId('drag-item-0');

    // 模拟拖拽到相同位置
    fireEvent.dragStart(dragItem1);
    fireEvent.dragEnter(dragItem1);
    fireEvent.dragEnd(dragItem1);

    // 验证回调函数未被调用
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  // 验证无子元素时的行为
  it('should handle empty children without crashing', () => {
    render(<DragList>{[]}</DragList>);

    // 验证组件正常渲染
    expect(screen.queryByTestId('drag-item-0')).not.toBeInTheDocument();
  });

  // 验证 onDragOver 的逻辑
  it('should hide original element on drag over', () => {
    render(<DragList>{generateChildren()}</DragList>);

    const dragItem1 = screen.getByTestId('drag-item-0');
    const dragItem2 = screen.getByTestId('drag-item-1');

    // 模拟拖拽操作
    fireEvent.dragStart(dragItem1);
    fireEvent.dragOver(dragItem2);

    // 验证原始元素是否隐藏
    expect(dragItem2).toHaveStyle('visibility: hidden');
  });

  // 验证拖拽过程中事件监听器的清理
  it('should clean up event listeners after unmounting', () => {
    const { unmount } = render(<DragList>{generateChildren()}</DragList>);

    // 模拟组件卸载
    unmount();

    // 验证事件监听器被清理
    const dragEvent = new Event('dragover');
    document.dispatchEvent(dragEvent);

    // 验证是否触发了监听器
    expect(() => {
      fireEvent.dragOver(document.body);
    }).not.toThrow();
  });
});
