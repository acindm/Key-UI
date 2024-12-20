import { Switch } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <Switch style={{ marginRight: '10px' }} defaultChecked small />
      <Switch defaultChecked />
    </div>
  );
};

export default App;
