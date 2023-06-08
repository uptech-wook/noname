import React, {
  useState,
  useEffect,
} from 'react';
import { styled } from 'styled-components';
import FitHeightBox from '../Components/FItHeightBox';
import FixedButton from '../Components/FixedButton';

const INITIAL_BUTTON_TEXT = `Scroll`;
const SCROLLED_BUTTON_TEXT  = `Top`;

const ScrollContainer = styled.div`
  
`

const TestContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 5000px;
  transition: background-color 0.5s ease;
`
const Test = () => {
  const [ scrolling, setScrolling ] = useState(false);
  const [ buttonText, setButtonText ] = useState(INITIAL_BUTTON_TEXT);

  const handleScroll = () => {
    let nowSrollY = window.scrollY;
    
    if(nowSrollY > 0){
      setScrolling(true);
    }else{
      setScrolling(false);
    }

    // console.log(`widnow scroll = ${window.scrollY}`)
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return(
    <ScrollContainer>
      <TestContainer>
        <FitHeightBox bg='red'/>
        <FitHeightBox bg='blue'/>
        <FitHeightBox bg='green'/>
        <FitHeightBox bg='pink'/>

        <FixedButton text={buttonText} />
      </TestContainer>
    </ScrollContainer>
  )
}

export default Test; 