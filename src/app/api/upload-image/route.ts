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
  const file = formData.getAll('file');

  try {
    const res = await uploadImage(file, {}, token);
    console.log('🚀 ~ POST ~ res:', res);
    if (res.success) {
      return Response.json({id: res.imageId});
    }
    return Response.error();
  } catch (error: Error | any) {
    return Response.error();
  }
}

// export async function DELETE(request: NextRequest) {
//   const token = getCookie(CookieName.AUTH_TOKEN)!;
//   const body = await request.text();
//   const regex = /data-id=([^&]+)/;
//   const match = body.match(regex);
//   if (match) {
//     // The data-id value is captured in the first capturing group (index 1)
//     const dataId = match[1];
//     console.log("Data ID:", dataId);
//     const res = deleteImages({ ids: [dataId] }, token);
//   } else {
//     console.log("Data ID not found in the string.");
//     return Response.error();
//   }

//   return Response.json({});
// }
