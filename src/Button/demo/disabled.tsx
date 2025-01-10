import { Button, Space } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button type="default" disabled>
        Default
      </Button>
      <Button type="warning" disabled>
        Warning
      </Button>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button type="danger" disabled>
        Error
      </Button>
      <Button type="info" disabled>
        Info
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
    </Space>
  );
};

export default App;
