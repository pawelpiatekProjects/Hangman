import styled from 'styled-components';

export const PopupWrapper = styled.div`
width: 80rem;
height: 60rem;
background-image: linear-gradient(to right bottom ,#333,#222);
z-index: 10000;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
color: #fff;
display: ${props=>props.state === 1? 'block' : 'none'};
font-size: 3rem;


`;

export const PopupInfo = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
a{
width: 20rem;
padding: 1rem;
background: orange;
border: 1px solid orange;
border-radius: 5rem;
color: #fff;
text-align: center;
display: block;
margin: 5rem auto;
text-decoration: none;
text-transform: uppercase;
&:focus{
outline: none;
background: darken(orange,8);//change
}
}
`;