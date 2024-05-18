import Form from './login-form';
import {LoginWrapper, Subtitle, Title} from './login-view.styled';

function LoginView() {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <Subtitle>Please enter your username and password</Subtitle>
      <Form />
    </LoginWrapper>
  );
}

export default LoginView;
