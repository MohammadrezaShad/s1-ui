import Form from './register-form';
import {LoginWrapper, Subtitle, Title} from './register-view.styled';

function LoginView() {
  return (
    <LoginWrapper>
      <Title>Register</Title>
      <Subtitle>Please enter your information</Subtitle>
      <Form />
    </LoginWrapper>
  );
}

export default LoginView;
