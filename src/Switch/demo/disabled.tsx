import { Switch } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <Switch defaultChecked disabled />
      <Switch disabled />
    </div>
  );
};

export default App;
