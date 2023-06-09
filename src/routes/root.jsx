import React, {
  useState,
  useEffect,
}from 'react';
import { styled } from 'styled-components';

import Opening from '../Components/Opening';
import TopMenu from '../Components/TopMenu';
import MainDoor from '../Components/MainDoor';

const MainContainer = styled.div`
    
`;

export default function Root() {
  return (
    <MainContainer>
      <Opening />
      <TopMenu />
      <MainDoor />
    </MainContainer>
  );
}