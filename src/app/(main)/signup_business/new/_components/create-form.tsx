'use client';

import {useEffect} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import {useRouter} from 'next/navigation';

import {
  Input,
  InputWrapper,
  Label,
  TextField,
} from '@/app/(authentication)/login/_components/login-view.styled';
import {Button, FieldError} from '@/components';
import {FormStatus} from '@/constants';
import {EMPTY_FORM_STATE} from '@/utils';

import signupBusiness from '../_actions/signup-business';

function CreateBusinessForm() {
  const [formState, action] = useFormState(signupBusiness, EMPTY_FORM_STATE);
  const router = useRouter();

  useEffect(() => {
    if (formState?.status === FormStatus.SUCCESS) {
      router.push(`/setup/${formState.data.data.id}/operation-hours`);
    }
  }, [formState, router]);

  return (
    <form className={css({mt: '8'})} action={action}>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='business-name'>Business name</Label>
        <InputWrapper>
          <Input type='text' id='business-name' name='business-name' required />
        </InputWrapper>
        <FieldError formState={formState} name='businessName' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='city'>City</Label>
        <InputWrapper>
          <Input type='text' id='city' name='city' required />
        </InputWrapper>
        <FieldError formState={formState} name='city' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='state'>State</Label>
        <InputWrapper>
          <Input type='text' id='state' name='state' required />
        </InputWrapper>
        <FieldError formState={formState} name='state' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='zip-code'>Zip code</Label>
        <InputWrapper>
          <Input type='text' id='zip-code' name='zip-code' required />
        </InputWrapper>
        <FieldError formState={formState} name='zipCode' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='categories'>Categories</Label>
        <InputWrapper>
          <Input type='text' id='categories' name='categories' />
        </InputWrapper>
        <FieldError formState={formState} name='categories' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='phone-number'>Business phone number</Label>
        <InputWrapper>
          <Input type='text' id='phone-number' name='phone-number' />
        </InputWrapper>
        <FieldError formState={formState} name='phone' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='address-1'>Street address</Label>
        <InputWrapper>
          <Input type='text' id='address-1' name='address-1' required />
        </InputWrapper>
        <FieldError formState={formState} name='address' />
      </TextField>
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='email'>Your email address</Label>
        <InputWrapper>
          <Input type='email' id='email' name='email' required />
        </InputWrapper>
        <FieldError formState={formState} name='email' />
      </TextField>
      <SubmitButton />
    </form>
  );
}

export default CreateBusinessForm;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <Button visual='contained' color='danger' size='md' type='submit' disabled={pending}>
      {pending ? 'Creating...' : 'Create'}
    </Button>
  );
};
