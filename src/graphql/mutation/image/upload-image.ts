import {ImageMutation, Scalars, UploadImageInputType} from '@/graphql/generated/types';

export async function uploadImage(
  file: Scalars['Upload']['input'],
  input: UploadImageInputType,
  token: string,
): Promise<ImageMutation['uploadImage']> {
  const formData = new FormData();
  const query = `mutation uploadImage($file: Upload!, $input: UploadImageInputType) {
  image {
    uploadImage(file: $file, input: $input) {
      success
      imageId
    }
  }
}`;

  formData.append(
    'operations',
    JSON.stringify({
      query,
      variables: {
        input: {...input},
        file: null,
      },
    }),
  );
  formData.append('map', JSON.stringify({file: ['variables.file']}));

  if (file) {
    formData.append('file', file);
  }

  const res = await fetch(process.env.API_BASE_URL as string, {
    method: 'POST',
    headers: {
      'apollo-require-preflight': 'true',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to add file');
  }
  const response = await res.json();

  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data.image.uploadImage;
}
