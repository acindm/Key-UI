import { Loading, Space } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space direction="horizontal">
      <Loading style={{ width: 30, height: 30 }} color="#6debf3" />
      <Loading style={{ width: 45, height: 45 }} color="#6debf3" />
      <Loading style={{ width: 60, height: 60 }} color="#6debf3" />
    </Space>
  );
};

export default App;
