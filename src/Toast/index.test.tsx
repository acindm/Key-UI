import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import message from './toast';

describe('Message 组件', () => {
  // 每次测试前清理消息容器
  beforeEach(() => {
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.innerHTML = '';
    }
  });

  it('should display info type message', async () => {
    // 测试 info 类型消息
    act(() => {
      message.info('Info message', 3);
    });

    const messageElement = await screen.findByText('Info message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display success type message', async () => {
    // 测试 success 类型消息
    act(() => {
      message.success('Success message', 3);
    });

    const messageElement = await screen.findByText('Success message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display warning type message', async () => {
    // 测试 warning 类型消息
    act(() => {
      message.warning('Warning message', 3);
    });

    const messageElement = await screen.findByText('Warning message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display error type message', async () => {
    // 测试 error 类型消息
    act(() => {
      message.error('Error message', 3);
    });

    const messageElement = await screen.findByText('Error message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should auto close message', async () => {
    // 测试自动关闭消息
    jest.useFakeTimers();
    act(() => {
      message.info('Auto-close message', 2);
    });

    const messageElement = await screen.findByText('Auto-close message');
    expect(messageElement).toBeInTheDocument();

    // 快进时间，检查消息是否自动关闭
    act(() => {
      jest.advanceTimersByTime(3000); // 动画时间 + duration
    });

    expect(messageElement).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('should display multiple messages', async () => {
    // 测试多个消息同时显示
    act(() => {
      message.info('Message 1', 3);
      message.success('Message 2', 3);
      message.error('Message 3', 3);
    });

    const messages = await screen.findAllByRole('alert');
    expect(messages).toHaveLength(3);

    expect(screen.getByText('Message 1')).toBeInTheDocument();
    expect(screen.getByText('Message 2')).toBeInTheDocument();
    expect(screen.getByText('Message 3')).toBeInTheDocument();
  });

  it('should validate message animation', async () => {
    // 测试消息动画类名
    act(() => {
      message.info('Animation test', 3);
    });

    const messageElement = await screen.findByText('Animation test');
    const parentElement = messageElement.closest('.cobalt-message-position');

    // 初始状态验证动画类名
    expect(parentElement).toHaveClass('alert-enter-active');
  });

  it('should clean timers and DOM', async () => {
    // 测试定时器清理和 DOM 移除
    jest.useFakeTimers();

    act(() => {
      message.info('Message cleanup test', 2);
    });

    const messageElement = await screen.findByText('Message cleanup test');
    expect(messageElement).toBeInTheDocument();

    // 快进时间，确保 DOM 被移除
    act(() => {
      jest.advanceTimersByTime(3000); // 动画时间 + duration
    });

    expect(messageElement).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
