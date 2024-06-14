'use client';

import {useEffect} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import {css} from '@styled/css';
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';

import updateDescription from '@/app/(main)/setup/[bizId]/_actions/update-description';
import {Button} from '@/components';
import {FormStatus} from '@/constants';
import {EMPTY_FORM_STATE} from '@/utils';

function Page() {
  const params = useParams();
  const router = useRouter();
  const [formState, action] = useFormState(updateDescription, EMPTY_FORM_STATE);
  const {bizId} = params;

  useEffect(() => {
    if (formState?.status === FormStatus.ERROR) {
      alert(formState.message);
    }
    if (formState?.status === FormStatus.SUCCESS) {
      router.push(`/setup/${bizId}/photo-upload`);
    }
  }, [formState, router]);

  return (
    <div
      className={css({
        minH: 'screen',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
      })}
    >
      <h1 className={css({textStyle: 'title1', color: 'grey_800', textAlign: 'left'})}>
        Specialties
      </h1>
      <p
        className={css({
          textStyle: 'body14_medium',
          color: 'grey_700',
        })}
      >
        Add a brief description about your business and make yourself standout to the customers
      </p>
      <h2
        className={css({
          textStyle: 'body1',
          color: 'grey_800',
          mt: '6',
          mb: '4',
        })}
      >
        What makes your business unique?
      </h2>
      <form
        className={css({
          bgColor: 'white',
          w: 'full',
        })}
        action={action}
      >
        <input type='hidden' name='id' value={bizId} />
        <div
          className={css({
            w: ' full',
            mb: '4',
            p: '8',
            rounded: 'sm',
            border: '1px solid token(colors.grey_200)',
          })}
        >
          <textarea
            className={css({w: 'full', border: '1px solid token(colors.grey_400)', p: '2'})}
            id='description'
            name='description'
            rows={4}
            placeholder="Tell customers what's special about your business abd why they should choose you?"
          />
        </div>
        <SubmitButton />
        <Link
          href={`/setup/${bizId}/photo-upload`}
          className={css({
            ml: '4',
            mb: '4',
            px: '4',
            py: '2.5',
            bgColor: 'transparent',
            color: 'blue.500',
            rounded: 'lg',
            _hover: {color: 'blue.400'},
          })}
        >
          Skip for now
        </Link>
      </form>
    </div>
  );
}

export default Page;

const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <Button visual='contained' color='danger' size='md' type='submit' disabled={pending}>
      {pending ? 'Saving...' : 'Save and continue'}
    </Button>
  );
};
