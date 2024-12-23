import { faker } from '@faker-js/faker';
import { VariableSizeList } from 'keyui';
import React from 'react';

interface Props {
  index: number;
  style: object;
}

export default () => {
  const data = new Array(1000).fill(0).map((_, idx) => ({
    id: idx + 1,
    content: faker.lorem.sentences(),
  }));

  const Row = ({ index, style, ...rest }: Props) => {
    return (
      <div
        style={{
          ...style,
          padding: '20px 10px',
          background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',
          boxSizing: 'border-box',
        }}
        {...rest}
      >
        {`${index}: ${data[index]?.content}`}
      </div>
    );
  };

  return (
    <VariableSizeList height={300} itemCount={1000} itemSize={36} width={500}>
      {({ index, style }: { index: number; style: React.CSSProperties }) => (
        <Row index={index} style={style} />
      )}
    </VariableSizeList>
  );
};
