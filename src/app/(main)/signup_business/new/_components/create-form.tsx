'use client';

import {useEffect, useState} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
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
import {TaxonomyEntity} from '@/graphql/generated/types';
import {EMPTY_FORM_STATE} from '@/utils';

import 'react-phone-input-2/lib/style.css';

import signupBusiness from '../_actions/signup-business';
import AsyncAutocompleteInput from './async-autocomplete';

function CreateBusinessForm({token}: {token: string}) {
  const [formState, action] = useFormState(signupBusiness, EMPTY_FORM_STATE);
  const [selectedCategories, setSelectedCategories] = useState<TaxonomyEntity[]>([]);
  const [phone, setPhone] = useState<string>();
  const router = useRouter();

  const handleCategoryRemove = (id: string) => {
    setSelectedCategories(prev => prev.filter(category => category._id !== id));
  };

  useEffect(() => {
    if (formState?.status === FormStatus.SUCCESS) {
      router.push(`/setup/${formState.data.data.id}/operation-hours`);
    } else if (
      formState?.status === FormStatus.ERROR &&
      Object.keys(formState.fieldErrors).length === 0
    ) {
      toast.error(formState.message);
    }
  }, [formState, router]);

  return (
    <form className={css({mt: '8'})} action={action}>
      <input
        type='hidden'
        name='categories'
        value={selectedCategories.map(category => category._id)}
      />
      <input type='hidden' name='phone-number' value={phone} />
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
      <AsyncAutocompleteInput
        token={token}
        onCategoryRemove={handleCategoryRemove}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <FieldError formState={formState} name='categories' />
      <TextField className={css({mb: '8'})}>
        <Label htmlFor='phone-number'>Business phone number</Label>
        <InputWrapper>
          <PhoneInput
            containerClass='border-0'
            inputClass='border-0'
            onChange={_phone => setPhone(_phone)}
          />
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
