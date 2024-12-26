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

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastProps = {
  type?: ToastType; // 消息类型
  open: boolean; // 是否显示
  content?: string; // 消息内容
  duration?: number; // 显示时长(自动关闭的持续时间)
};

const iconMap = new Map<ToastType, ReactNode>([
  ['info', <InfoCircleTwoTone key="info" />],
  ['success', <CheckCircleTwoTone key="success" twoToneColor="#52c41a" />],
  ['error', <CloseCircleTwoTone key="error" twoToneColor="#ec5b56" />],
  [
    'warning',
    <ExclamationCircleTwoTone key="warning" twoToneColor="#efb041" />,
  ],
]);

// 创建 toast 容器元素，用于添加 toast 元素
const toastContainer = document.createElement('div');
toastContainer.className = 'cobalt-toast-container';
document.body.appendChild(toastContainer);

const ToastEle: FC<ToastProps> = ({
  type = 'info',
  open,
  content,
  duration = 3,
}) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(open);
    const timerId = setTimeout(() => {
      setShowToast(false);
      setTimeout(() => {
        const container = document.querySelector('.cobalt-toast-container');
        container?.removeChild(document.querySelector('.cobalt-toast')!);
      }, 500);
    }, duration * 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [open]);

  return (
    <CSSTransition
      in={showToast}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onExited={() => {}}
    >
      <div className="cobalt-toast-position" role="alert">
        <div className="cobalt-toast-item">
          {iconMap.get(type)}
          <span>{content}</span>
        </div>
      </div>
    </CSSTransition>
  );
};

const toast = {
  Ele: null,
  info: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-toast';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <ToastEle open content={content} duration={duration} type="info" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-toast-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  success: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-toast';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <ToastEle open content={content} duration={duration} type="success" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-toast-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  warning: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-toast';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <ToastEle open content={content} duration={duration} type="warning" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-toast-container');
    if (container) {
      container.appendChild(Ele);
    }
  },

  error: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'cobalt-toast';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <ToastEle open content={content} duration={duration} type="error" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.cobalt-toast-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
};

export default toast;
