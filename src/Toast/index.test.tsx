import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import toast from './toast';

describe('Toast 组件', () => {
  beforeEach(() => {
    const container = document.querySelector('.cobalt-toast-container');
    if (container) {
      container.innerHTML = '';
    }
  });

  // 测试不同类型消息
  it('should display info type toast', async () => {
    act(() => {
      toast.info('Info toast', 3);
    });

    const toastElement = await screen.findByText('Info toast');
    expect(toastElement).toBeInTheDocument();
  });

  it('should display success type toast', async () => {
    act(() => {
      toast.success('Success toast', 3);
    });

    const toastElement = await screen.findByText('Success toast');
    expect(toastElement).toBeInTheDocument();
  });

  it('should display warning type toast', async () => {
    act(() => {
      toast.warning('Warning toast', 3);
    });

    const toastElement = await screen.findByText('Warning toast');
    expect(toastElement).toBeInTheDocument();
  });

  it('should display error type toast', async () => {
    act(() => {
      toast.error('Error toast', 3);
    });

    const toastElement = await screen.findByText('Error toast');
    expect(toastElement).toBeInTheDocument();
  });
  // 测试清理定时器，以及DOM的移除
  it('should clean timers and remove DOM', async () => {
    jest.useFakeTimers();

    act(() => {
      toast.info('Toast with cleanup', 2);
    });

    const toastElement = await screen.findByText('Toast with cleanup');
    expect(toastElement).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // 验证消息已经被移除
    await waitFor(() => {
      expect(toastElement).not.toBeInTheDocument();
    });

    jest.useRealTimers(); // 恢复计时器
  });

  // 测试动画效果
  it('should handle animations correctly', async () => {
    act(() => {
      toast.info('Animation test', 3);
    });

    const toastElement = await screen.findByText('Animation test');
    const parentElement = toastElement.closest('.cobalt-toast-position');

    // 等待动画完成
    await waitFor(() => {
      expect(parentElement).toHaveClass('alert-enter-done');
    });
  });

  // 测试多条消息的顺序渲染
  it('should render multiple toasts sequentially', async () => {
    act(() => {
      toast.info('Toast 1', 3);
      toast.success('Toast 2', 3);
      toast.error('Toast 3', 3);
    });

    const toasts = await screen.findAllByText(/Toast [1-3]/);
    expect(toasts).toHaveLength(3);

    expect(screen.getByText('Toast 1')).toBeInTheDocument();
    expect(screen.getByText('Toast 2')).toBeInTheDocument();
    expect(screen.getByText('Toast 3')).toBeInTheDocument();
  });

  // 测试定时器与 warning 消息的错误处理
  it('should validate timers and error handling for warning type', async () => {
    jest.useFakeTimers();

    act(() => {
      toast.warning('Warning with timer', 1);
    });

    const toastElement = await screen.findByText('Warning with timer');
    expect(toastElement).toBeInTheDocument();

    // 快进时间
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(toastElement).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  // 测试边界情况处理，例如空内容的消息
  it('should handle edge cases and fallback gracefully', async () => {
    act(() => {
      toast.info('');
    });

    const container = document.querySelector('.cobalt-toast-container');
    expect(container).not.toBeEmptyDOMElement();
  });
});
