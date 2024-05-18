import ResetForm from './reset-form';
import {ResetWrapper, Subtitle, Title} from './reset-view.styled';

function ResetView() {
  return (
    <ResetWrapper>
      <Title>Change Password</Title>
      <Subtitle>Please insert your new password.</Subtitle>
      <ResetForm />
    </ResetWrapper>
  );
}

export default ResetView;
