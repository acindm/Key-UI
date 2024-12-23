import { FixedSizeList } from 'keyui';
import React, { Profiler } from 'react';

interface RowProps {
  index: number;
  style?: React.CSSProperties;
}

const Row = ({ index, style }: RowProps) => (
  <div style={style}>Row {index + 1}</div>
);

// 普通长列表
const List = ({ data }: { data: number[] }) => (
  <div style={{ height: 250, width: 300, overflowY: 'scroll' }}>
    {data.map((_, index) => (
      <Row
        style={{ height: '36px', lineHeight: '36px' }}
        index={index}
        key={index}
      />
    ))}
  </div>
);

// 虚拟长列表
const VirtualList = () => (
  <FixedSizeList height={250} width={300} itemCount={1000} itemSize={36}>
    {({ index, style }) => <Row index={index} style={style} />}
  </FixedSizeList>
);

const data = new Array(1000).fill(0);

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(`id: ${id}, phase: ${phase}, actualDuration: ${actualDuration}`);
};

export default () => (
  <div style={{ display: 'flex' }}>
    <div>
      <h2>普通列表</h2>
      <Profiler id="normal-list" onRender={onRender}>
        <List data={data} />
      </Profiler>
    </div>
    <div style={{ marginLeft: '30px' }}>
      <h2>虚拟列表</h2>
      <Profiler id="virtual-list" onRender={onRender}>
        <VirtualList />
      </Profiler>
    </div>
  </div>
);
