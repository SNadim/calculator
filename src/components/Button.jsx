import styled from 'styled-components';

const IndividualButton = styled.button`
    height: 100px;
    width: 100px;
    background-color: ${props=>props.color};
    color: ${props=>props.color === 'grey' ? "white" : "black"};
    border: 2px solid black;
    border: none;
    cursor: pointer;
`;

const Button = ({sign,color}) => {
  return (
    <IndividualButton color={color}>{sign}</IndividualButton>
  )
}

export default Button