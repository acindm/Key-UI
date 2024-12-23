import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import message from './toast';

describe('Message 组件', () => {
  beforeEach(() => {
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.innerHTML = '';
    }
  });

  // 测试不同类型消息
  it('should display info type message', async () => {
    act(() => {
      message.info('Info message', 3);
    });

    const messageElement = await screen.findByText('Info message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display success type message', async () => {
    act(() => {
      message.success('Success message', 3);
    });

    const messageElement = await screen.findByText('Success message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display warning type message', async () => {
    act(() => {
      message.warning('Warning message', 3);
    });

    const messageElement = await screen.findByText('Warning message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display error type message', async () => {
    act(() => {
      message.error('Error message', 3);
    });

    const messageElement = await screen.findByText('Error message');
    expect(messageElement).toBeInTheDocument();
  });
  // 测试清理定时器，以及DOM的移除
  it('should clean timers and remove DOM', async () => {
    jest.useFakeTimers();

    act(() => {
      message.info('Message with cleanup', 2);
    });

    const messageElement = await screen.findByText('Message with cleanup');
    expect(messageElement).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // 验证消息已经被移除
    await waitFor(() => {
      expect(messageElement).not.toBeInTheDocument();
    });

    jest.useRealTimers(); // 恢复计时器
  });

  // 测试动画效果
  it('should handle animations correctly', async () => {
    act(() => {
      message.info('Animation test', 3);
    });

    const messageElement = await screen.findByText('Animation test');
    const parentElement = messageElement.closest('.cobalt-message-position');

    // 等待动画完成
    await waitFor(() => {
      expect(parentElement).toHaveClass('alert-enter-done');
    });
  });

  // 测试多条消息的顺序渲染
  it('should render multiple messages sequentially', async () => {
    act(() => {
      message.info('Message 1', 3);
      message.success('Message 2', 3);
      message.error('Message 3', 3);
    });

    const messages = await screen.findAllByText(/Message [1-3]/);
    expect(messages).toHaveLength(3);

    expect(screen.getByText('Message 1')).toBeInTheDocument();
    expect(screen.getByText('Message 2')).toBeInTheDocument();
    expect(screen.getByText('Message 3')).toBeInTheDocument();
  });

  // 测试定时器与 warning 消息的错误处理
  it('should validate timers and error handling for warning type', async () => {
    jest.useFakeTimers();

    act(() => {
      message.warning('Warning with timer', 1);
    });

    const messageElement = await screen.findByText('Warning with timer');
    expect(messageElement).toBeInTheDocument();

    // 快进时间
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(messageElement).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  // 测试边界情况处理，例如空内容的消息
  it('should handle edge cases and fallback gracefully', async () => {
    act(() => {
      message.info('');
    });

    const container = document.querySelector('.cobalt-message-container');
    expect(container).not.toBeEmptyDOMElement();
  });
});
