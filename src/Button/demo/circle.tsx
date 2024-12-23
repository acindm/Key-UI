import { Button, Space } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button type="default" circle>
        1
      </Button>
      <Button type="primary" circle>
        2
      </Button>
      <Button type="danger" circle>
        3
      </Button>
      <Button type="warning" circle>
        4
      </Button>
      <Button type="info" circle>
        5
      </Button>
      <Button type="link" circle>
        6
      </Button>
      <Button type="dashed" circle>
        7
      </Button>
    </Space>
  );
};

export default App;
