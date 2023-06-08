import React, {
  useState,
  useEffect,
}from 'react';
import { styled } from 'styled-components';

import Opening from '../Components/Opening';
import TopMenu from '../Components/TopMenu';
import MainDoor from '../Components/MainDoor';

export default function Root() {


  const MainContainer = styled.div`
    
  `;

  return (
    <MainContainer>
      <Opening />
      <TopMenu />
      <MainDoor />
    </MainContainer>
  );
}