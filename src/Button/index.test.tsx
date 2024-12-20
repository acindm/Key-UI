import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '.';

//describe将Button相关的测试用例分组
describe('test button component', () => {
  //每个it块代表一个独立的测试用例，用来测试一个具体的功能

  //测试按钮渲染是否成功
  it('test button document', () => {
    const wrapper = render(<Button>abc</Button>);
    const element = wrapper.queryByText('abc');
    expect(element).toBeInTheDocument();
  });

  //测试默认样式
  it('should render the correct default button', () => {
    const wrapper = render(<Button>btn1</Button>);
    const element = wrapper.queryByText('btn1');
    expect(element?.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });

  //测试是否渲染链接按钮
  it('should render the link button', () => {
    const { getByText } = render(
      <Button type="link" href="https://baidu.com">
        btn2
      </Button>,
    );

    const element = getByText('btn2');
    expect(element?.tagName).toBe('A');
  });

  //测试圆形按钮
  it('circle button', () => {
    const { getByText } = render(<Button circle>btn-circle</Button>);
    const element = getByText('btn-circle');

    expect(element).toHaveClass('circle');
  });

  //测试禁用按钮
  it('button disabled', () => {
    const { getByText } = render(
      <Button type="link" href="https://baidu.com" disabled>
        btn3
      </Button>,
    );

    const element = getByText('btn3');
    expect(element).toHaveClass('disabled');
  });

  //测试按钮大小
  it('button size', () => {
    const { getByText } = render(<Button size="large">btn-size</Button>);
    const element = getByText('btn-size');

    expect(element).toHaveClass('btn-large');
  });

  //测试按钮点击事件
  it('button click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>btn-click</Button>,
    );
    const element = getByText('btn-click');

    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

//测试禁用按钮点击时不会触发事件
it('should not trigger onClick when button is disabled', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick} disabled>
      Disabled Button
    </Button>,
  );
  const button = getByText('Disabled Button');
  fireEvent.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});

//测试按钮内容是否动态更新
it('should change button text on state change', () => {
  const { getByText, rerender } = render(<Button>Submit</Button>);
  const button = getByText('Submit');

  rerender(<Button>Update！</Button>);
  expect(button).toHaveTextContent('Update！');
});

//边界情况测试：未传递props时能否正确渲染与使用默认值
it('should render a button with default props when no props are passed', () => {
  const { getByText } = render(<Button>Default Button</Button>);
  const element = getByText('Default Button');
  expect(element).toHaveClass('btn btn-default');
  expect(element.tagName).toBe('BUTTON');
});
