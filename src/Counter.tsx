import React, { useReducer, useEffect, FC } from 'react';

const initState = { count: 0 };
const reducer = (
  state: { count: number },
  action: { type: string },
): { count: number } => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const Counter: FC = () => {
  console.log('render counter');
  const [state, dispatchCount] = useReducer(reducer, initState);
  const handleIncrease = (): void => dispatchCount({ type: 'increment' });
  const handleDecrease = (): void => dispatchCount({ type: 'decrement' });

  useEffect(() => {
    document.title = `Count: ${state.count}`;
  });
  return (
    <div>
      <h1>Counter</h1>
      <div>Num : {state.count}</div>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
};
export default Counter;
