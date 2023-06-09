import React,{
  useState,
  useEffect,
} from 'react';
import { styled, css, keyframes } from 'styled-components';

//style start
const ButtonContainer = styled.div.attrs({
  // onMouseEnter: TouchInButton,
  // onMouseLeave: TouchOutButton,
})`
  /* overflow: hidden; */
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 94px;
  height: 94px;
  line-height: 94px;
  text-align: center;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f00;
    border-radius: 50%;
    transition: all 900ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover:before{
    transform: scale(0.9);
  }

  &:hover p {
    opacity: 0;
  }

  &:hover #arrow_container svg {
    transform: translate(-50%, -50%);
  }
`
const TextScrollContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;

  ${props => 
    props.scrolled == "true"
      ? css`
        & p {
          opacity: 0;
        }
      `
      : css`
        & p {
          opacity: 1;
        }
      `
  };
`
const TextTopContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;

  ${props => 
    props.scrolled == "true"
      ? css`
        & p {
          opacity: 1;
        }
      `
      : css`
        & p {
          opacity: 0;
        }
      `
  };
`

const ButtonText = styled.p`
  position: relative;
  color: #fff;
  font-family: 'Orelo SemiWide', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 24px;
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1);

  &:nth-child(1){
    transition-delay: 0ms;
  }
  &:nth-child(2){
    transition-delay: 50ms;
  }
  &:nth-child(3){
    transition-delay: 100ms;
  }
  &:nth-child(4){
    transition-delay: 150ms;
  }
  &:nth-child(5){
    transition-delay: 200ms;
  }
  &:nth-child(6){
    transition-delay: 250ms;
  }
`
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;
`
const RotateContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: green;
  transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 0;
  transition-delay: 250ms;

  ${props =>
    props.scrolled == "true"
      ? css`
        transform: rotate(0deg);
      `
      : css`
        transform: rotate(180deg);
      `
  }
`

const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 23px;
  height: 36px;
  background-color: pink;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 250ms;
`
//style end

function FixedButton (props) {

  const {
    text,
    scrolled,
  } = props;

  const [ focusing, setFocusing ] = useState(false);

  const onMouseOver = () => {
    setFocusing(true);
    console.log(`mouse 접근 확인`)
  }

  const onMouseOut = () => {
    setFocusing(false);
  }

  // useEffect(() => {
  //   console.log(`scrolled: ${scrolled}`)

  // },[scrolled])

  return(
    <ButtonContainer
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <TextScrollContainer scrolled={scrolled.toString()}>
        <ButtonText>S</ButtonText>
        <ButtonText>c</ButtonText>
        <ButtonText>r</ButtonText>
        <ButtonText>o</ButtonText>
        <ButtonText>l</ButtonText>
        <ButtonText>l</ButtonText>
      </TextScrollContainer>

      <TextTopContainer scrolled={scrolled.toString()}>
        <ButtonText>T</ButtonText>
        <ButtonText>o</ButtonText>
        <ButtonText>p</ButtonText>
      </TextTopContainer>

      <ArrowContainer id='arrow_container'>
        <RotateContainer
          scrolled={scrolled.toString()}
          focusing={focusing.toString()}
        >
          <Arrow viewBox="0 0 23 36">
            <path d="M 19.199219 11.578125 L 12.011719 0.328125 C 11.730469 -0.109375 11.277344 -0.109375 10.996094 0.328125 L 3.808594 11.578125 L 4.824219 13.164062 L 10.78125 3.835938 L 10.78125 36 L 12.21875 36 L 12.21875 3.835938 L 18.175781 13.164062 Z M 19.199219 11.578125 "/> 
          </Arrow>
        </RotateContainer>
      </ArrowContainer>

    </ButtonContainer>       
  )
}

export default FixedButton;