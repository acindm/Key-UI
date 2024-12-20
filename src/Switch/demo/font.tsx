import { Switch } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
    </div>
  );
};

export default App;
