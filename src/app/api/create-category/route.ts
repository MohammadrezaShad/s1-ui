import {cookies} from 'next/headers';
import {NextRequest} from 'next/server';

import {CookieName} from '@/constants';
import {createTaxonomy} from '@/graphql';

export async function POST(request: NextRequest) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  if (!token) return Response.error();
  const body = await request.json();

  try {
    const res: any = await createTaxonomy(body, token);
    if (res.success) {
      return Response.json({success: res.success, data: res.result!});
    }
    return Response.error();
  } catch (error: Error | any) {
    return Response.error();
  }
}
