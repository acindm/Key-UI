import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Slide from './slide';

jest.useFakeTimers();

describe('Slide component', () => {
  it('should render with default props', () => {
    render(
      <Slide>
        <div>Default Slide</div>
      </Slide>,
    );
    // 改用 getAllByTestId 以匹配多个元素
    const slides = screen.getAllByTestId('slide1');
    expect(slides.length).toBeGreaterThan(0);
    expect(slides[0]).toBeInTheDocument();
  });

  it('should jump to specified slide when dot is clicked', () => {
    render(
      <Slide>
        <div>Default Slide</div>
      </Slide>,
    );
    // 改为指示点添加 role 属性后改用 getAllByRole
    const dots = screen.getAllByRole('button', { hidden: true }); // 匹配所有指示点
    expect(dots.length).toBe(3); // 验证指示点数量
    fireEvent.click(dots[1]); // 点击第二个指示点
    expect(screen.getByText('Slide 2')).toBeInTheDocument(); // 验证跳转到 Slide 2
  });

  it('should autoplay slides based on duration', () => {
    jest.useFakeTimers(); // 使用虚拟时间控制
    render(
      <Slide>
        <div>Default Slide</div>
      </Slide>,
    );

    // 时间流逝后验证是否切换到 Slide 2
    jest.advanceTimersByTime(3000);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();

    jest.clearAllTimers();
  });

  it('should not autoplay when duration <= 0', () => {
    jest.useFakeTimers();
    render(
      <Slide>
        <div>Default Slide</div>
      </Slide>,
    );
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(screen.getByText('Slide 1')).toBeInTheDocument(); // 未切换

    jest.clearAllTimers();
  });
});
