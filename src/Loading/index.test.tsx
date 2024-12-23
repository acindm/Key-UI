import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Loading, Skeleton } from './loading';

describe('Skeleton 组件', () => {
  it('should render skeleton with default props', () => {
    // 渲染默认 Skeleton
    render(<Skeleton loading />);

    // 验证容器是否存在
    const skeleton = screen.getByRole('presentation', { hidden: true });
    expect(skeleton).toBeInTheDocument();

    // 验证行数
    const lines = skeleton.querySelectorAll('.skeleton-container-line');
    expect(lines).toHaveLength(3); // 默认行数为 3
  });

  it('should render skeleton with custom rows and widths', () => {
    render(
      <Skeleton
        loading
        row={5}
        width={['50%', '30%', 100, '70%', 200]}
        title
        avatar
        size={60}
      />,
    );

    // 验证容器是否存在
    const skeleton = screen.getByRole('presentation', { hidden: true });
    expect(skeleton).toBeInTheDocument();

    // 验证 avatar 是否渲染
    expect(skeleton.querySelector('.skeleton-avatar')).toBeInTheDocument();

    // 验证 title 是否渲染
    expect(
      skeleton.querySelector('.skeleton-container-title'),
    ).toBeInTheDocument();

    // 验证行数和宽度
    const lines = skeleton.querySelectorAll('.skeleton-container-line');
    expect(lines).toHaveLength(5);
    expect(lines[0]).toHaveStyle('width: 50%');
    expect(lines[2]).toHaveStyle('width: 100px');
  });

  it('should not render skeleton when loading is false', () => {
    render(<Skeleton loading={false} />);

    // 验证 Skeleton 不渲染
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});

describe('Loading 组件', () => {
  it('should render loading spinner with default props', () => {
    // 渲染默认的 Loading
    render(<Loading />);

    // 验证是否渲染了 Loading 图标
    const loadingIcon = screen.getByRole('img', { hidden: true });
    expect(loadingIcon).toBeInTheDocument();
    expect(loadingIcon).toHaveClass('animate-spin');
  });

  it('should not render loading spinner when show is false', () => {
    // 渲染不显示的 Loading
    render(<Loading show={false} />);

    // 验证 Loading 没有渲染
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should apply custom styles and color', () => {
    render(
      <Loading
        show
        className="custom-loading"
        style={{ fontSize: '24px' }}
        color="red"
      />,
    );

    // 验证样式是否正确应用
    const loadingIcon = screen.getByRole('img', { hidden: true });
    expect(loadingIcon).toHaveStyle('font-size: 24px');
    expect(loadingIcon).toHaveStyle('color: red');
    expect(loadingIcon).toHaveClass('custom-loading');
  });
});
