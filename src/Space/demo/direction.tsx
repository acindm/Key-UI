import { Button, Space } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space direction="vertical">
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
    </Space>
  );
};

export default App;
