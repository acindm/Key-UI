import { FixedSizeList } from 'keyui';
import React from 'react';

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

const Row = ({ index, style }: RowProps) => {
  const data = new Array(1000).fill(0).map((_, idx) => `Row ${idx + 1}`);
  return (
    <div
      style={{
        ...style,
        background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',
      }}
    >
      {data[index]}
    </div>
  );
};

export default () => {
  return (
    <FixedSizeList height={300} itemCount={1000} itemSize={36} width={500}>
      {({ index, style }: { index: number; style: React.CSSProperties }) => (
        <Row index={index} style={style} />
      )}
    </FixedSizeList>
  );
};
