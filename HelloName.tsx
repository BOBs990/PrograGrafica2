import React from 'react';

interface HelloNameProps {
  name: string;
}

const HelloName: React.FC<HelloNameProps> = ({ name }) => {
  return (
    <a-entity
      text={{
        value: `Hello, ${name}`,
        align: 'center',
        width: 6,
        color: 'yellow',
      }}
      position="0 2 -3"
    ></a-entity>
  );
};

export default HelloName;
