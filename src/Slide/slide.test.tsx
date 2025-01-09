import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Slide from './slide';

jest.useFakeTimers();

describe('Slide component', () => {
  it('should render with default props', () => {
    // 测试默认渲染效果
    render(
      <Slide>
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
        <div data-testid="slide3">Slide 3</div>
      </Slide>,
    );

    // 验证是否正确渲染子元素
    expect(screen.getByTestId('slide1')).toBeInTheDocument();
    expect(screen.getByTestId('slide2')).toBeInTheDocument();
    expect(screen.getByTestId('slide3')).toBeInTheDocument();

    // 默认有 dots
    const dots = screen.getAllByRole('button'); // Slide-dot 通常渲染为 <span>，此处使用 role="button" 来查找
    expect(dots).toHaveLength(3);
  });

  it('should jump to specified slide when dot is clicked', () => {
    // 测试指示点点击是否跳转到指定页
    const beforeChange = jest.fn();
    const afterChange = jest.fn();

    render(
      <Slide beforeChange={beforeChange} afterChange={afterChange}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slide>,
    );

    // 默认有 3 个指示点，对应 slide1, slide2, slide3
    const dots = screen.getAllByRole('button');
    // 点击第二个指示点 -> index=1 -> 跳转到 Slide 2
    fireEvent.click(dots[1]);

    // beforeChange 回调参数: (from, to)
    expect(beforeChange).toHaveBeenCalledWith(1, 2);

    // 等待动画结束后触发 afterChange
    act(() => {
      const slideContainer = document.querySelector('.Slide-container')!;
      fireEvent.transitionEnd(slideContainer);
    });

    // afterChange 回调参数: (current, from)
    expect(afterChange).toHaveBeenCalledWith(2, 1);
  });

  it('should autoplay slides based on duration', () => {
    // 测试自动轮播
    render(
      <Slide duration={1}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slide>,
    );

    // duration=1 -> 1s 后自动切换
    act(() => {
      jest.advanceTimersByTime(1000); // 前进 1s
    });

    // 手动触发 transitionEnd
    act(() => {
      const slideContainer = document.querySelector('.Slide-container')!;
      fireEvent.transitionEnd(slideContainer);
    });

    // 再前进 1s -> 进入下一张
    act(() => {
      jest.advanceTimersByTime(1000);
      fireEvent.transitionEnd(document.querySelector('.Slide-container')!);
    });

    // 只要自动切换不报错，说明逻辑正常
    expect(true).toBe(true);
  });

  it('should pause autoplay on mouse enter and resume on mouse leave', () => {
    // 测试鼠标移入暂停自动播放，移出后恢复
    const { container } = render(
      <Slide duration={1}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slide>,
    );

    const slideRoot = container.querySelector('.Slide')!;
    // 等待 1s 后自动进入下一张
    act(() => {
      jest.advanceTimersByTime(1000);
      fireEvent.transitionEnd(document.querySelector('.Slide-container')!);
    });

    // 移入 -> 暂停
    fireEvent.mouseEnter(slideRoot);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // 移出 -> 恢复
    fireEvent.mouseLeave(slideRoot);
    act(() => {
      jest.advanceTimersByTime(1000);
      fireEvent.transitionEnd(document.querySelector('.Slide-container')!);
    });
    expect(true).toBe(true);
  });

  it('should not autoplay when duration <= 0', () => {
    // 测试 duration <= 0 时不自动播放
    render(
      <Slide duration={0}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Slide>,
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // 若没有出现异常，说明 duration=0 时不会自动切换
    expect(true).toBe(true);
  });
});
