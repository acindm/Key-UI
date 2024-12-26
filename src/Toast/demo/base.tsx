import { Button, Space, toast } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  const info = () => {
    toast.info('This is a normal toast', 3);
  };
  const success = () => {
    toast.success('This is a success toast', 3);
  };

  const error = () => {
    toast.error('This is an error toast', 3);
  };

  const warning = () => {
    toast.warning('This is a warning toast', 3);
  };
  return (
    <Space>
      <Button onClick={info}>Normal</Button>
      <Button type="primary" onClick={success}>
        Success
      </Button>
      <Button type="warning" onClick={warning}>
        Warning
      </Button>
      <Button type="danger" onClick={error}>
        Error
      </Button>
    </Space>
  );
};

export default App;
