import {cookies} from 'next/headers';
import {NextRequest} from 'next/server';

import {CookieName} from '@/constants';
import {updateBusiness} from '@/graphql';

export async function POST(request: NextRequest) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return Response.error();
  const body = await request.json();

  try {
    const res = await updateBusiness({id: body.id, images: body.images}, token);
    if (res.success) {
      return Response.json({success: res.success});
    }
    return Response.error();
  } catch (error: Error | any) {
    return Response.error();
  }
}
