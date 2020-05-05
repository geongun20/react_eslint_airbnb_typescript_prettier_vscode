import React, { FC } from 'react';

interface Props {
  name?: string;
}
const MyName: FC<Props> = ({ name = 'defaultName' }) => {
  console.log('render my name ');
  return <div className="MyName">My name is {name}</div>;
};

export default MyName;
