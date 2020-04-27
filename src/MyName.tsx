import React from 'react';

function MyName(props: { name: string }): React.ReactElement {
  const { name } = props;
  return <div className="MyName">My name is{name}</div>;
}

export default MyName;
