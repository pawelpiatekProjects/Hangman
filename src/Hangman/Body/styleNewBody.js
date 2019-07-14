import styled from 'styled-components';

export const BodyWrapper = styled.div`


height: calc(100% - 6rem);
justify-self: center;
margin: -5rem 3rem 3rem 3rem;
padding: 3rem;
position: relative;
width: 50rem;
`;

export const GallowsTop = styled.div`
width: 27.5rem;
height: 3rem;
 background-image: linear-gradient(to right bottom ,#8b4513 ,	#a26a42);
position: absolute;
top: 0;
left: 0;

&::after{
content: "";
display: block;
width: 1rem;
height: 1rem;
 background-image: radial-gradient(#555 ,	#333);
border-radius: 50%;
position: absolute;
top: 1rem;
left: 1rem;
}

`;

export const GallowsLeft = styled.div`
width: 3rem;
height: 50rem;
 background-image: linear-gradient(to  bottom ,#8b4513 ,	#a26a42);
position:absolute ;
top: 3rem;
left: 0;

&::after{
content: "";
display: block;
background-image: linear-gradient(to right top ,#8b4513 ,	#a26a42);
height: 3rem;
width: 17rem;
position: absolute;
transform: rotate(-45deg) translate(-2.75rem,2rem);
}
`;

export const GallowsBottom = styled.div`
height: 3rem;
width: 15rem;
background-image: linear-gradient(to left top ,#8b4513 ,	#a26a42);
position: absolute;
top: 45rem;
transform: translateX(-12.5rem) rotate(-60deg) ;
&::after{
content: "";
display: block;
height: 3rem;
width: 10rem;
background-image: linear-gradient(to left bottom ,#8b4513 ,	#a26a42);
position: absolute;
transform: rotate(100deg) translateX(7rem) translateY(-6rem);
}
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
  top: 8rem;//+5
  right: 50%;
  transform: translateX(50%);
  margin: 0 auto;
  z-index: 10;

  
  &::before{
  content: "";
  display: block;
  width: 1rem;
  height: 5rem;
  background-color: brown;
  position: absolute;
  top: -5rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 1000;
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
&::after{
content: "";
width: 3rem;
height: 4px;
background: red;


transform: rotate(90deg);
display: block;
}
`;

export const Neck = styled.div`
height: 2.5rem;
width: 2.5rem;
background-image: linear-gradient(to right bottom ,#ffe39f ,	#ffad60);
position: absolute;
 top: 9.75rem;
left: 50%;
transform: translateX(-50%);
display: block;
z-index: 1000;
border-radius: 0 0 10rem 10rem;
    &::after{
    content: "";
    display: block;
    width: 3rem;
    height: 1.25rem;
    position: absolute;
    top: 2px;
    background: brown;
   transform: translateX(-2px);
    }
`;

export const Core = styled.div`
  width: 7rem;
  height: 4rem;
  background-color: 	#3CB371;

  display: inline-block;
  text-align: center;
  position: absolute;
  top: 19.5rem;
  right: 50%;
  transform: translateX(50%);
  border-radius: 1rem 1rem 0 0;
  z-index: 10;

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
top: 19.5rem;
right: 50%;
transform:  translate(-4rem,-.25rem) rotate(20deg);
border-radius: 2rem;

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
top: 19.5rem;
left: 50%;
transform:  translate(4rem,-.25rem) rotate(-20deg);
border-radius: 2rem;

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
top: 30rem;
right: 50%;
transform:  translate(-1rem,1rem) rotate(10deg);
z-index: 2;
border-radius: 0 0 1rem 1rem;

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
top: 30rem;
left: 50%;
transform:  translate(1rem,1rem) rotate(-10deg);
z-index: 2;
border-radius: 0 0 1rem 1rem;

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