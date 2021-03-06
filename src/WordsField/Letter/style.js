import styled from 'styled-components';

export const LetterWrapper = styled.p`
  font-size: 5rem;
  opacity: ${props=>props.display ==true ? 1 : 0};
  
 
  `;

export const Undreline = styled.div`
    content: "";
      display: inline-block;
      border-bottom:${props=>props.empty==true ? 'none' : '3px solid #fff'} ;
      width: 5rem;
      height: 2px;
      position: absolute;
      top: 6rem;
      right: 50%;
      transform: translateX(50%);
     
`;

export const UnderlinedLetter = styled.div`
position: relative;
padding: 0 3rem;

`;



