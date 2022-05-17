import styled from 'styled-components';
import { useState,useEffect } from 'react';
import './home.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  
`;

const Wrapper = styled.div`

`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  width:400px;
  background-color: grey;
  border: 2px solid black;
  border: none;
  border-bottom: 2px solid black;
`;

const ButtonContainer = styled.div`
  width: 400px;
`;

const Home = () => {
  const [exp,setExp] = useState('');
  
  const clearLastDigit = ()=>{
    if(exp === '') {
      setExp('');
    } else {
      const newExp = exp.slice(0,-1);
      setExp(newExp);
    }
  }

  const calculate = () => {
    if(exp==='') {
      setExp('');
    } else {
      const result = eval(exp);
      setExp(result);
    }
  }
  return (
    <Container>
      <Wrapper>
        <Display>
          <span className='display'>{exp}</span>
        </Display>
       <ButtonContainer>
          <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp('')}}>AC</button>
          <button style={{backgroundColor:"orange"}} className='digitButton' onClick={clearLastDigit}>x</button>
          <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp(exp+"%")}}>%</button>
          <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp(exp+"/")}}>/</button>
       </ButtonContainer>
       <ButtonContainer>
          <button className='digitButton' onClick={()=>{setExp(exp+"7")}}>7</button>
          <button className='digitButton' onClick={()=>{setExp(exp+"8")}}>8</button>
          <button className='digitButton' onClick={()=>{setExp(exp+"9")}}>9</button>
          <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp(exp+"*")}}>X</button>
       </ButtonContainer>
       <ButtonContainer>
       <button className='digitButton' onClick={()=>{setExp(exp+"4")}}>4</button>
       <button className='digitButton' onClick={()=>{setExp(exp+"5")}}>5</button>
       <button className='digitButton' onClick={()=>{setExp(exp+"6")}}>6</button>
       <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp(exp+"-")}}>-</button>
       </ButtonContainer>
       <ButtonContainer>
       <button className='digitButton' onClick={()=>{setExp(exp+"1")}}>1</button>
       <button className='digitButton' onClick={()=>{setExp(exp+"2")}}>2</button>
       <button className='digitButton' onClick={()=>{setExp(exp+"3")}}>3</button>
       <button style={{backgroundColor:"orange"}} className='digitButton' onClick={()=>{setExp(exp+"+")}}>+</button>
       </ButtonContainer>
       <ButtonContainer>
       <button className='digitButton'>opt</button>
       <button className='digitButton' onClick={()=>{setExp(exp+"0")}}>0</button>
       <button className='digitButton' onClick={()=>{setExp(exp+".")}}>.</button>
       <button style={{backgroundColor:"orange"}} className='digitButton' onClick={calculate}>=</button>
       </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default Home