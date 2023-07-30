import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f3;
`;

const BtnDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;

const WrapperBodyButton = styled.button`
  color: #333;
  font-size: 16px;
  padding: 10px 50px;
  background-color: fff;
  letter-spacing: 1px;
  border: 1px solid #fff;
  border-radius: 15px;
  cursor: pointer;
`;


const WrapperBlock = styled.div`
  width: 500px;
  height: 550px;
  background-color: #06a67e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
border-radius: 15px;
`;

const WrapperBlockTitle = styled.h1`
  font-size: 36px;
  color: #fff;
  font-family: "Montserrat";
  font-weight: bold;
`;

const WrapperBlockText = styled.p`
color: #e7e5e5;
font-family: "Montserrat";
font-weight: 400;
width: 80%;
font-size: 14px;
text-align: center;
margin-bottom: 20px;
`;



const WrapperFormInput = styled.input`
border: 0;
padding: 15px 100px 15px 15px;
background-color: #F4F8F5;
font-size: 18px;
border-radius: 5px;
:focus{
  outline: none;
}
`;


export {
  Wrapper,
  WrapperBlock,
  WrapperBodyButton,
  WrapperBlockTitle,
  WrapperBlockText,
  WrapperFormInput,
  BtnDiv,
};
