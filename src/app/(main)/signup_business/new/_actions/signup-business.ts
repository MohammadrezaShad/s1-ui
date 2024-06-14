'use server';

import {cookies} from 'next/headers';
import slugify from 'slugify';
import {z} from 'zod';

import {CookieName, FormStatus} from '@/constants';
import {createBusiness} from '@/graphql';
import {fromErrorToFormState, toFormState} from '@/utils';

async function signupBusiness(formState: any, data: FormData) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return toFormState(FormStatus.ERROR, 'Your are not logged in.');

  const createRegisterSchema = z.object({
    businessName: z
      .string()
      .min(3, {message: 'This field has to be filled (At least 3 characters).'})
      .max(191),
    city: z.string().min(1, {message: 'This field has to be filled.'}).max(191),
    state: z.string().min(1, {message: 'This field has to be filled.'}).max(191),
    zipCode: z.string().min(5, {message: 'This field has to be filled.'}).max(191),
    categories: z.string(),
    email: z
      .string()
      .min(1, {message: 'This field has to be filled.'})
      .email('This is not a valid email.'),
    address: z.string().min(3, {message: 'Address must be at least 3 characters.'}).max(191),
    phone: z.string().min(10, {message: 'This field has to be at leat 10 digits.'}).max(11),
  });

  try {
    const {businessName, city, state, zipCode, categories, email, address, phone} =
      createRegisterSchema.parse({
        businessName: data.get('business-name'),
        city: data.get('city'),
        state: data.get('state'),
        zipCode: data.get('zip-code'),
        categories: data.get('categories'),
        email: data.get('email'),
        address: data.get('address-1'),
        phone: data.get('phone-number'),
      });
    const slug = slugify(businessName, {remove: /[*+~.()'"!:@]/g, lower: true, trim: true});
    const response = await createBusiness(
      {
        name: businessName,
        address: `${zipCode} ${address} ${city} ${state}`,
        email,
        phone,
        // taxonomies: categories.split(','),
        slug,
      },
      token,
    );
    if (response.success) {
      return toFormState(FormStatus.SUCCESS, 'Business created', {
        data: {id: response.businessId},
      });
    }
    return fromErrorToFormState(new Error('Business failed to create'));
  } catch (error: Error | any) {
    return fromErrorToFormState(error);
  }
}

export default signupBusiness;
