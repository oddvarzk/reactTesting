import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.isActive ? "blue" : "red"};
`;
function App(){
  const isactive = false;

  return (
    <div>
      <Box isActive={isactive}/>
    </div>
  );
}
export default App;