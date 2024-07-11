import {css} from '@styled/css';
import {Container} from '@styled/jsx';
import {cookies} from 'next/headers';
import {redirect, RedirectType} from 'next/navigation';

import Rating from '@/app/(main)/biz/[bizId]/_components/rating';
import {Button} from '@/components';
import {CookieName} from '@/constants';
import {createReview, findBusinessById, getProfile} from '@/graphql';
import {CreateReviewInput, ReviewType} from '@/graphql/generated/types';

interface Props {
  params: {
    bizId: string;
  };
  searchParams: {
    returnUrl?: string;
    rating?: string;
  };
}

async function Page({params, searchParams}: Props) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value || '';

  const profileResponse = await getProfile(token);
  const profile = profileResponse.result;

  const {bizId} = params;
  const {rating, returnUrl} = searchParams;

  if (!bizId) redirect('/');
  const data = await findBusinessById({id: bizId});
  const business = data.result;

  async function handleSubmitReview(formData: FormData) {
    'use server';

    const content = formData.get('content') as string;

    const payload: CreateReviewInput = {
      content,
      post: bizId,
      score: rating ? parseInt(rating, 10) : 0,
      type: ReviewType.Business,
      author: profile?._id,
    };

    const response = await createReview(payload, token);
    if (response.success) {
      redirect(returnUrl as string, RedirectType.push);
    }
  }

  return (
    <Container>
      <div
        className={css({
          maxW: 'xl',
          mx: 'auto',
          mt: '10',
          p: '4',
          shadow: 'shadow',
        })}
      >
        <h1 className={css({fontSize: '2xl', lineHeight: '2xl', fontWeight: 'bold'})}>
          {business?.name}
        </h1>
        <form
          action={handleSubmitReview}
          className={css({
            my: '4',
            rounded: 'md',
            p: '4',
            border: '2px solid token(colors.grey_300)',
            transition: 'colors 0.3s ease-in-out',
            _focusWithin: {
              borderColor: 'green_800',
              borderWidth: '2px',
            },
          })}
        >
          <div className={css({display: 'flex', alignItems: 'center'})}>
            <div className={css({display: 'flex'})}>
              <Rating rating={+(rating ?? '0')} readonly={false} />
            </div>
          </div>
          <div className={css({my: '4'})}>
            <p>A few things to consider in your review</p>
            <div className={css({mt: '2', display: 'flex', gap: '2', mr: '2', ml: '2'})}>
              {business?.taxonomies?.slice(0, 3)?.map(tag => (
                <span
                  key={tag._id}
                  className={css({
                    px: '1',
                    py: '0.5',
                    fontSize: 'xs',
                    color: 'gray.700',
                    bgColor: 'gray.200',
                    rounded: 'md',
                  })}
                >
                  {tag.title}
                </span>
              ))}
            </div>
          </div>
          <textarea
            name='content'
            id='content'
            rows={8}
            className={css({
              _focusVisible: {outline: 'none'},
              w: 'full',
              resize: 'none',
              mb: '4',
            })}
            required
          />
          <Button
            visual='contained'
            color='danger'
            size='md'
            type='submit'
            className={css({gap: '2'})}
          >
            Post Review
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Page;
