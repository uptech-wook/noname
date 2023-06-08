import React, {
  useState,
  useEffect,
} from 'react';
import { styled } from 'styled-components';

const InfoContainer = styled.div`
  display:flex;
  flex: 1;
  padding: 18px 0;
  background-color: #000;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: 1176px;
`

const InfoText = styled.p`
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
`


const Opening = () => {
  return(
    <InfoContainer>
      <TextWrapper>
        <InfoText>
            Giờ mở cửa: Thứ 2 - Chủ nhật: 08:00 - 20:00
        </InfoText>
      </TextWrapper>
    </InfoContainer>
  )
}

export default Opening;