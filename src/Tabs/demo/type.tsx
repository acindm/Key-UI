import { Button, Space, TabItemType, Tabs } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  const items: TabItemType[] = [
    {
      label: `Tab 1`,
      key: '1',
      children: `Text Test: This is a test.`,
    },
    {
      label: `Tab 2`,
      key: '2',
      children: `Emoji Test: 😘`,
    },
    {
      label: `Tab 3`,
      key: '3',
      children: (
        <Space direction="vertical">
          <Button>Button Test</Button>
        </Space>
      ),
    },
  ];

  const handleClick = (key: string | number) => {
    // eslint-disable-next-line no-console
    console.log(key);
  };

  return (
    <Tabs
      type="card"
      defaultActiveKey="1"
      onTabClick={handleClick}
      items={items}
    />
  );
};

export default App;
