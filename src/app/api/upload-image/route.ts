import {cookies} from 'next/headers';
import {NextRequest} from 'next/server';

import {CookieName} from '@/constants';
import {uploadImage} from '@/graphql';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return Response.error();
  const formData = await request.formData();
  const files = formData.getAll('file');

  try {
    const res = await uploadImage(files[0], {alt: ''}, token);
    if (res.success) {
      return Response.json({id: res.imageId});
    }
    return Response.error();
  } catch (error: Error | any) {
    return Response.error();
  }
}
