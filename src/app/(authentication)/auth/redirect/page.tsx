import {redirect} from 'next/navigation';

export default function Page({
  params,
  searchParams,
}: {
  params: {slug: string};
  searchParams?: {[key: string]: string | string[] | undefined};
}) {
  console.log(searchParams);

  redirect('/');
}
