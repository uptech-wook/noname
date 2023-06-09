import React, {
  useState,
  useEffect,
} from 'react';
import { styled } from 'styled-components';
import FixedButton from '../Components/FixedButton';
import ValidCheck from '../utils/ValidCheck';
import Log from '../utils/Log';

const INITIAL_BUTTON_TEXT = `Scroll`;
const SCROLLED_BUTTON_TEXT  = `Top`;

//style start
const ScrollContainer = styled.div.attrs({

})`
overflow-y: scroll;
height: 100vh;
`
const TestContainer = styled.div`
width: 100%;
/* height: 5000px; */
transition: background-color 0.5s ease;
`
const FitBox = styled.div`
  height: 100vh;
  background-color: ${props => props.bg || 'blue'};
`
const EmptyBg = styled.svg`
  width: 23px;
  height: 36px;

`
//style end

function Test () {

  const [ scrolled, setScrolled ] = useState(false);
  const [ buttonText, setButtonText ] = useState(INITIAL_BUTTON_TEXT);

  useEffect(() => {
    // const nullCheck = null;
    // const undefinedCheck = undefined;
    // const falseCheck = false;

    // Log(`validCheck: ${ValidCheck(falseCheck)}`)
  }, [])

  const IndependentScrollEvent = (evt) => {
    if(ValidCheck(evt)){
      const { scrollTop } = evt.target;
      let togglePosition = window.innerHeight * 0.3;

      // console.log(`togglePosition: ${togglePosition}`)

      if(scrollTop > togglePosition){
        setScrolled(true);
      }else{
        setScrolled(false);
      }

      // console.log(`IndependentScrollEvent: ${evt.target.scrollTop}`)
    }
  }

  return(
    <ScrollContainer
      onScroll={IndependentScrollEvent}
    >
      <TestContainer>
        <FitBox bg='white'/>
        <FitBox bg='blue'/>
        <FitBox bg='green'/>
        <FitBox bg='pink'/>

        <FixedButton
          text={buttonText}
          scrolled={scrolled}
        />
      </TestContainer>
    </ScrollContainer>
  )
}

export default Test; 