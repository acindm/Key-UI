import { DragList } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  const els = new Array(6).fill(0).map((_, i) => (
    <div
      key={i}
      style={{
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '6px 0',
        background: '#50c9d2',
      }}
    >
      {i + 1}
    </div>
  ));

  return (
    <DragList
      onChange={(newVal: any, from: any, to: any) => {
        console.log('onChange: ', newVal, from, to);
      }}
    >
      {els}
    </DragList>
  );
};

export default App;
