import React, { useState, useContext, FC } from "react";
import { ContexT } from "../index";
import { observer } from "mobx-react-lite";
import {
  BtnDiv,
  Wrapper,
  WrapperBlock,
  WrapperBlockText,
  WrapperBlockTitle,
  WrapperBodyButton,
  WrapperFormInput,
} from "../styled-css/styledGlobal.jsx";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(ContexT);

  return (
    <Wrapper>
      <WrapperBlock>
        <WrapperBlockTitle>Welcome </WrapperBlockTitle>
        <WrapperBlockText>
          To keep connected with us plase login with your personal info
        </WrapperBlockText>
        <WrapperFormInput
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />

        <WrapperFormInput
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />

        <BtnDiv>
          <WrapperBodyButton onClick={() => store.login(email, password)}>
            Login
          </WrapperBodyButton>
          <WrapperBodyButton
            onClick={() => {
              store.registration(email, password);
            }}
          >
            Registration
          </WrapperBodyButton>
        </BtnDiv>
      </WrapperBlock>
    </Wrapper>
  );
};

export default observer(LoginForm);
