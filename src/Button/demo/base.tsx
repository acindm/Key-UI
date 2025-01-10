import { Button, Space } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Error</Button>
      <Button type="info">Info</Button>
      <Button type="link">Link</Button>
      <Button type="dashed">Dashed</Button>
    </Space>
  );
};

export default App;
