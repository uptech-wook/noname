import React,{
  useState,
  useEffect,
} from 'react';
import { styled } from 'styled-components';

const FixedButton = (props) => {

  const { text } = props;

  const TouchInButton = (evt) => {
    // console.log(`mouseenter event: ${Object.keys(evt)}`)
  }

  const TouchOutButton = () => {
  }
  
  const ButtonContainer = styled.div.attrs({
    // onMouseEnter: TouchInButton,
    // onMouseLeave: TouchOutButton,
  })`
    overflow: hidden;
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
      background-color: #000;
      border-radius: 50%;
      transition: all 900ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover:before{
      transform: scale(0.9);
    }

    &:hover p {
      opacity: 0;
    }
  `
  const TextContainer = styled.div`
    display: flex;
    justify-content: center;
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
  
  

  return(
    <ButtonContainer>
      <TextContainer>
        <ButtonText>S</ButtonText>
        <ButtonText>c</ButtonText>
        <ButtonText>r</ButtonText>
        <ButtonText>o</ButtonText>
        <ButtonText>l</ButtonText>
        <ButtonText>l</ButtonText>
      </TextContainer>

      <TextContainer>
        <ButtonText>T</ButtonText>
        <ButtonText>o</ButtonText>
        <ButtonText>p</ButtonText>
      </TextContainer>
    </ButtonContainer>       
  )
}

export default FixedButton;