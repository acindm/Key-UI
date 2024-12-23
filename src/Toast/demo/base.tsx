import { Button, Space, message } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  const info = () => {
    message.info('This is a normal message', 3);
  };
  const success = () => {
    message.success('This is a success message', 3);
  };

  const error = () => {
    message.error('This is an error message', 3);
  };

  const warning = () => {
    message.warning('This is a warning message', 3);
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
