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

  it('should display info type message', async () => {
    act(() => {
      message.info('Info message', 3);
    });

    const messageElement = await screen.findByText('Info message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should display multiple messages', async () => {
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

  it('should clean timers and DOM', async () => {
    jest.useFakeTimers();

    act(() => {
      message.info('Message cleanup test', 2);
    });

    const messageElement = await screen.findByText('Message cleanup test');
    expect(messageElement).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(messageElement).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});
