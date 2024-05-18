'use client';

import {useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';
import {useRouter} from 'next/navigation';

import {IconLock} from '@/assets';
import {Button} from '@/components';

import {
  Form,
  Input,
  InputWrapper,
  Label,
  TextField,
} from '../../_components/forget-password-view.styled';

function ResetForm() {
  return (
    <Form>
      <TextField className={css({mb: '10'})}>
        <Label htmlFor='new-password'>Password</Label>
        <InputWrapper>
          <Input
            type='password'
            id='new-password'
            name='new-password'
            autoComplete='new-password'
          />
          <IconLock className={css({w: '6', h: '6'})} />
        </InputWrapper>
      </TextField>
      <TextField className={css({mb: '16'})}>
        <Label htmlFor='repeat-password'>Repeat password</Label>
        <InputWrapper>
          <Input type='password' id='repeat-password' name='repeat-password' />
          <IconLock className={css({w: '6', h: '6'})} />
        </InputWrapper>
      </TextField>
      <Flex w='full' columnGap='4'>
        <SubmitButton />
        <CancelButton />
      </Flex>
    </Form>
  );
}

export default ResetForm;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  const buttonText = pending ? 'Pease wait...' : 'Continue';

  return (
    <Button type='submit' visual='contained' size='lg' color='primary' className={css({w: 'full'})}>
      <span>{buttonText}</span>
    </Button>
  );
};

const CancelButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/login')}
      type='button'
      visual='outlined'
      size='lg'
      color='primary'
      className={css({w: 'full'})}
    >
      Cancel
    </Button>
  );
};
