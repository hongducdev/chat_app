import Button from "@mui/material/Button";
import Head from "next/head";
import styled from "styled-components";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const StyledContainer = styled.div`
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
  const handleLoginWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <StyledContainer>
      <Head>
        <title>Login Page</title>
      </Head>

      <StyledLoginContainer>
        <Button variant="outlined" onClick={handleLoginWithGoogle}>
          Sign In With Google
        </Button>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

export default login;
