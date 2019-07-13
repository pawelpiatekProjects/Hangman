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
  //background-color: 	#ffe0bd;
 // background-image: linear-gradient(to right bottom , 	#ffe39f, #ffe0bd);
  background-image: linear-gradient(to right bottom ,#ffe39f ,	#ffad60);
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  right: 50%;
  transform: translateX(50%);
  margin: 0 auto;
  z-index: 10;
opacity: ${props=>props.errorCount>0 ? 1 : 0};
  
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

export const EyeLeft = styled.div`
width: 3rem;
height: 4px;
background: red;
position: absolute;
top: 4rem;
left: 1.5rem;
transform: rotate(45deg);
opacity: ${props=>props.errorCount>5 ? 1 : 0};
&::after{
content: "";
width: 3rem;
height: 4px;
background: red;


transform: rotate(90deg);
display: block;
}
`;

export const EyeRight = styled.div`
width: 3rem;
height: 4px;
background: red;
position: absolute;
top: 4rem;
right: 1.5rem;
transform: rotate(45deg);
opacity: ${props=>props.errorCount>5 ? 1 : 0};
&::after{
content: "";
width: 3rem;
height: 4px;
background: red;


transform: rotate(90deg);
display: block;
}
`;

export const Core = styled.div`
  width: 7rem;
  height: 4rem;
  background-color: 	#3CB371;

  display: inline-block;
  text-align: center;
  position: absolute;
  top: 13rem;
  right: 50%;
  transform: translateX(50%);
  border-radius: 1rem 1rem 0 0;
  z-index: 10;
  opacity: ${props=>props.errorCount>1 ? 1 : 0};

  //clip-path: polygon(0 0 ,100% 0,100% 85%,0 100%);
  &::after{
  content: "";
  display: block;
  width: 7rem;
  height: 10rem;
 background-color: 	#3CB371;
  position: absolute;
  top: 4rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  border-radius: 0 0 5rem 5em;
  border-bottom: 7px solid 	#8B4513;
  }
 
`;

export const HandLeft = styled.div`
width: 2.3rem;
height: 12rem;
background-image: linear-gradient(to right bottom ,#ffe39f ,	#ffad60);
position: absolute;
top: 13rem;
right: 50%;
transform:  translate(-4rem,-.25rem) rotate(20deg);
border-radius: 2rem;
opacity: ${props=>props.errorCount>2 ? 1 : 0};
&::after{
content: "";
width: 2.3rem;
height: 4rem;
border-radius: 2rem 2rem 0 0 ;
background-color: 	#3CB371;
border-bottom: 3px solid #fff;
display: block;
`;

export const HandRight = styled.div`
width: 2.3rem;
height: 12rem;
background-image: linear-gradient(to right bottom ,#ffe39f ,	#ffad60);
position: absolute;
top: 13rem;
left: 50%;
transform:  translate(4rem,-.25rem) rotate(-20deg);
border-radius: 2rem;
opacity: ${props=>props.errorCount>3 ? 1 : 0};
&::after{
content: "";
width: 2.3rem;
height: 4rem;
border-radius: 2rem 2rem 0 0 ;
background-color: 	#3CB371;
border-bottom: 3px solid #fff;
display: block;

`;

export const LegLeft = styled.div`
width: 2.3rem;
height: 14rem;
//background-color: brown;
background-image: linear-gradient(to right bottom ,#3686e9 ,#0d3d78);
position: absolute;
top: 25rem;
right: 50%;
transform:  translate(-1rem,1rem) rotate(10deg);
z-index: 2;
border-radius: 0 0 1rem 1rem;
opacity: ${props=>props.errorCount>4 ? 1 : 0};
&::after{
content: "";
display: block;
width: 7rem;
height: 4rem;
background: black;
position: absolute;
top: 14rem;
right: 50%;
clip-path: polygon(0 56%, 35% 57%, 92% 100%, 0% 100%);
border-radius: 0 1rem 3rem 0;
transform: rotateY(180deg) rotate(30deg) translatey(-1rem) translateX(-2rem);
z-index: 1;
}
`;

export const LegRight = styled.div`
width: 2.3rem;
height: 14rem;
//background-color: brown;
background-image: linear-gradient(to right bottom ,#3686e9 ,#0d3d78);
position: absolute;
top: 25rem;
left: 50%;
transform:  translate(1rem,1rem) rotate(-10deg);
z-index: 2;
border-radius: 0 0 1rem 1rem;
opacity: ${props=>props.errorCount>5 ? 1 : 0};
&::after{
content: "";
display: block;
width: 7rem;
height: 4rem;
background: black;
position: absolute;
top: 14rem;
right: 50%;
clip-path: polygon(0 100%,  92% 100%,35% 57%, 0% 56%);
border-radius: 0 1rem 3rem 0;
transform:  rotate(30deg) translatey(-4.5rem) translateX(4rem);
z-index: 1;
}
`;