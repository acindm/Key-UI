import React, { createElement, useState } from 'react';

// 传入的 children 是一个渲染函数
interface FixedSizeListProps {
  children: (props: {
    index: number;
    style: React.CSSProperties;
  }) => React.JSX.Element;
  width: number;
  height: number;
  itemCount: number;
  itemSize: number;
}

const FixedSizeList: React.FC<FixedSizeListProps> = (props) => {
  const { children, width, height, itemCount, itemSize } = props;

  // 所有 Hooks 移到组件的最顶层
  const [startIndex, setStartIndex] = useState(0);
  const [startOffset, setStartOffset] = useState(0);

  if (!height || !itemCount || !itemSize || typeof children !== 'function') {
    console.error('请按要求设置属性');
    return null;
  }

  const visibleCount = Math.ceil(height / itemSize);
  const endIndex = startIndex + visibleCount;
  const actualHeight = itemCount * itemSize;

  const getItemStyle = () => ({
    height: itemSize,
    width: '100%',
  });

  const onScroll = (event: any) => {
    const scrollTop = event.target.scrollTop;
    setStartIndex(Math.floor(scrollTop / itemSize));
    setStartOffset(scrollTop - (scrollTop % itemSize));
  };

  const render = () => {
    const items = [];
    for (let index = startIndex; index < endIndex; index++) {
      items.push(
        createElement(children, {
          index,
          style: getItemStyle(),
          key: index,
        }),
      );
    }
    return items;
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        willChange: 'transform',
        width,
        height,
      }}
      onScroll={onScroll}
    >
      <div style={{ height: actualHeight }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${startOffset}px)`,
        }}
      >
        {render()}
      </div>
    </div>
  );
};

export default FixedSizeList;
