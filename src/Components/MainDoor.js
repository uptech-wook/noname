import React from 'react';
import { styled } from 'styled-components';
import DoorBg from '../Images/Mainpage/Subtract.svg'

const doorText = `Môi trường sống có một không hai \n Rừng sông Amazon khắc họa một nhánh sông Amazon ở giai đoạn đầu của quá trình lũ lụt theo mùa vào khu rừng xung quanh. Trong thời gian này, các con sông tràn bờ và nước dâng cao từ 10 đến 40 feet theo phương thẳng đứng, tạo ra môi trường sống độc đáo theo mùa cho sự đa dạng đáng kinh ngạc của các loài động vật. Hai triển lãm nhỏ hơn khắc họa những lát cắt giống hệt nhau của khu rừng ven sông: một vào mùa mưa và một vào mùa khô.`;

const DoorContainer = styled.div`
  display:flex;
  flex-direction: column;
`
const BackgroundImage = styled.img.attrs({
  src: DoorBg,
})`
  /* width: 100%;
  height: 100%;
  object-fit: cover; */
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GridContainer = styled.div`
  display: grid;
  width: 1060px;
  padding: 67px 185px 0;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  text-align: center;
`

const MainText = styled.p`
  grid-column: span 12;
`

const MainDoor = () => {
  return(
    <DoorContainer>
      <BackgroundImage />
      <TextContainer>
        <GridContainer>
          <MainText>
            {doorText}
          </MainText>
        </GridContainer>
      </TextContainer>
    </DoorContainer>
  )
}

export default MainDoor;