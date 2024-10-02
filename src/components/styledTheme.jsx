import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 20px 20px;
  background: ${(props) => props.theme.color.primary};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;

function App(){
  return (
      <div>
        <Button>Click me</Button>
      </div>
  );
}
export default App;