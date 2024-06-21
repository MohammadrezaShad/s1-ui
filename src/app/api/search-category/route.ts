import {NextRequest} from 'next/server';

import {searchTaxonomy} from '@/graphql';
import {TaxonomyType} from '@/graphql/generated/types';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') || '';

  try {
    const res = await searchTaxonomy({text: query, type: TaxonomyType.Category});
    if (res.success) {
      return Response.json({success: res.success, data: res.results});
    }
    return Response.error();
  } catch (error: Error | any) {
    return Response.json({success: false, message: error.message});
  }
}
