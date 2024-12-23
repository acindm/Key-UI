import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  ExclamationCircleTwoTone,
  InfoCircleTwoTone,
} from '@ant-design/icons';
// import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CSSTransition } from 'react-transition-group';
import './toast.scss';

export type MessageType = 'success' | 'error' | 'warning' | 'info';
export type MessageProps = {
  type?: MessageType; // 消息类型
  open: boolean; // 是否显示
  content?: string; // 消息内容
  duration?: number; // 显示时长(自动关闭的持续时间)
};

const iconMap = new Map<MessageType, ReactNode>([
  ['info', <InfoCircleTwoTone key="info" />],
  ['success', <CheckCircleTwoTone key="success" twoToneColor="#52c41a" />],
  ['error', <CloseCircleTwoTone key="error" twoToneColor="#ec5b56" />],
  [
    'warning',
    <ExclamationCircleTwoTone key="warning" twoToneColor="#efb041" />,
  ],
]);

// 创建 message 容器元素，用于添加 message 元素
const messageContainer = document.createElement('div');
messageContainer.className = 'cobalt-message-container';
document.body.appendChild(messageContainer);

const MessageEle: FC<MessageProps> = ({
  type = 'info',
  open,
  content,
  duration = 3,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(open);
    const timerId = setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        const container = document.querySelector('.cobalt-message-container');
        container?.removeChild(document.querySelector('.cobalt-message')!);
      }, 500);
    }, duration * 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [open]);

  return (
    <CSSTransition
      in={showMessage}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onExited={() => {}}
    >
      <div className="cobalt-message-position" role="alert">
        <div className="cobalt-message-item">
          {iconMap.get(type)}
          <span>{content}</span>
        </div>
      </div>
    </CSSTransition>
  );
};

const message = {
  Ele: null,
  info: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="info" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  success: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="success" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  warning: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="warning" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  error: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="error" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
};

export default message;
