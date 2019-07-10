import styled from 'styled-components';

export const BodyWrapper = styled.div`
background-color: #eee;

height: calc(100% - 6rem);
justify-self: center;
margin: 3rem;
padding: 3rem;
position: relative;

`;

export const Head = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: orangered;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  right: 50%;
  transform: translateX(50%);
  margin: 0 auto;
  z-index: 10;
  
  &::before{
  content: "";
  display: block;
  width: 1rem;
  height: 3rem;
  background-color: orange;
  position: absolute;
  top: -3rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
  }
`;

export const Core = styled.div`
  width: 5rem;
  height: 15rem;
  background-color: brown;
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 13rem;
  right: 50%;
  transform: translateX(50%);
`;

export const HandLeft = styled.div`
width: 3rem;
height: 10rem;
background-color: brown;
position: absolute;
top: 13rem;
right: 50%;
transform:  translate(-3.5rem,-.25rem) rotate(45deg);

`;

export const HandRight = styled.div`
width: 3rem;
height: 10rem;
background-color: brown;
position: absolute;
top: 13rem;
left: 50%;
transform:  translate(3.5rem,-.25rem) rotate(-45deg);

`;

export const LegLeft = styled.div`
width: 3rem;
height: 12rem;
background-color: brown;
position: absolute;
top: 25rem;
right: 50%;
transform:  translate(-2rem,1rem) rotate(35deg);
`;

export const LegRight = styled.div`
width: 3rem;
height: 12rem;
background-color: brown;
position: absolute;
top: 25rem;
left: 50%;
transform:  translate(2rem,1rem) rotate(-35deg);
`;