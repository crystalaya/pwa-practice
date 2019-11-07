import React, { useState, useEffect } from "react";
import CloudCanvas from "./Clouds";
import Airship from "./Airship";
import styled from "styled-components";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <StyledBody>
    <Airship />
    <CloudCanvas />
  </StyledBody>
);

export default App;
