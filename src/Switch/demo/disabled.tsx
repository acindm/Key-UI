import { Space, Switch } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch defaultChecked disabled />
      <Switch disabled />
    </Space>
  );
};

export default App;
