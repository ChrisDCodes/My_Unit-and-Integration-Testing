import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('sould subtract', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button3 = container.getByTestId('number3');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('7');
  });

it('should concatenate numbers', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(button1);
  expect(runningTotal.textContent).toEqual('21');
});

it('should chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const buttonAdd = container.getByTestId('operator-add');
  const buttonMultiply = container.getByTestId('operator-multiply');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button1);
  fireEvent.click(buttonAdd);
  fireEvent.click(button1);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('4');
});

it('clear the running total without affecting the calculation', () => {
  const button2 = container.getByTestId('number2');
  const buttonAdd = container.getByTestId('operator-add');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  const buttonClear = container.getByTestId('clear');
  fireEvent.click(button2);
  fireEvent.click(buttonAdd);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  fireEvent.click(buttonClear);
  fireEvent.click(buttonAdd);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('6');
});

});

