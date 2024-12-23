import { Skeleton } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <Skeleton
      loading
      title
      avatar
      row={4}
      width={['50%', '60%', '70%', '80%']}
    />
  );
};

export default App;
