import React, { 
  useEffect,
  useState,
} from 'react';
import { styled } from 'styled-components';

const FitHeightBox = (props) => {
  
  const { bg } = props;

  const FitBox = styled.div`
  height: 100vh;
  background-color: ${bg};
`

  return(
    <FitBox />
  )
}

export default FitHeightBox;