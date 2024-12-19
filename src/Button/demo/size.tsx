import { Button } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <Button size="small" type="primary">
        small
      </Button>
      <Button type="primary">middle</Button>
      <Button size="large" type="primary">
        large
      </Button>
    </div>
  );
};

export default App;
