import React from 'react';
import { styled } from 'styled-components';
import Logo from "../Images/Mainpage/Frame.png";

const MENU_TEXT_1 = `About us`;
const MENU_TEXT_2 = `Plan a visit`;
const MENU_TEXT_3 = `Ticket & Promo`;
const MENU_TEXT_4 = `Animals & Exhibities`;
const MENU_TEXT_5 = `Experiences`;
const MENU_TEXT_6 = `News & Events`;

const Header = styled.header`
  display: flex;
  padding: 18px 0;
  justify-content: center;

`;
const Navigation = styled.nav`
  display: flex;
  width: 1176px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ImageContainer = styled.div.attrs({
  onClick: () => {console.log(`check this event`)}
})`
  cursor:pointer;
`;
const MainLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  
`;
const MenuContainer = styled.ul`
  display:flex;
  flex: 1;
  padding-left: 32px;
  flex-direction: row;
  justify-content: space-between;
`;
const Menu = styled.li`

`
const Mover = styled.a`
  color: #0e006e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  cursor: pointer;
`


function TopMenu () {
  return(
    <Header>
      <Navigation>
        <ImageContainer>
          <MainLogo />
        </ImageContainer>
        <MenuContainer>
          <Menu>
            <Mover>
              {MENU_TEXT_1}
            </Mover>
          </Menu>
          <Menu>
            <Mover>
              {MENU_TEXT_2}
            </Mover>
          </Menu>
          <Menu>
            <Mover>
              {MENU_TEXT_3}
            </Mover>
            </Menu>
          <Menu>
            <Mover>
              {MENU_TEXT_4}
            </Mover>
          </Menu>
          <Menu>
            <Mover>
              {MENU_TEXT_5}
            </Mover>
          </Menu>
          <Menu>
            <Mover>
              {MENU_TEXT_6}
            </Mover>
          </Menu>
        </MenuContainer>
      </Navigation>
    </Header>
  )
}

export default TopMenu;