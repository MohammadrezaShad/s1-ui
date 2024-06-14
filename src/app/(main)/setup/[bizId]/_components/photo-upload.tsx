'use client';

import React, {ChangeEvent, useState} from 'react';
import {css} from '@styled/css';
import {useParams, useRouter} from 'next/navigation';

import {Button} from '@/components';

interface PhotoUploadProps {
  token: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({token}: PhotoUploadProps) => {
  const params = useParams();
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const {bizId} = params;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;
    if (files) {
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  const handleSaveAndContinue = async () => {
    setIsUploading(true);
    const promises: Promise<any>[] = [];
    selectedFiles.forEach(photo => {
      const formData = new FormData();
      formData.append('file', photo);
      promises.push(
        fetch('/api/upload-image', {
          method: 'POST',
          body: formData,
        }),
      );
    });

    try {
      const imageIds: string[] = [];
      const responses = await Promise.all(promises);
      responses.forEach(response => {
        if (response.ok) {
          response.json().then((res: any) => imageIds.push(res.id));
        }
      });
      const updateBusinessPhotosResponse = await fetch('/api/update-business', {
        method: 'POST',
        body: JSON.stringify({id: bizId as string, images: imageIds}),
      });
      if (updateBusinessPhotosResponse.ok) {
        router.push(`/setup/${bizId}/conclusion-screen`);
      }
    } catch (error: Error | any) {
      setIsUploading(false);
      alert(error.message);
    }
  };

  return (
    <>
      <div
        className={css({
          w: 'full',
          bgColor: 'white',
          rounded: 'lg',
          border: '1px solid token(colors.grey_200)',
          p: '6',
          mb: '4',
        })}
      >
        <h2 className={css({fontSize: 'xl', lineHeight: 'xl', fontWeight: 'semibold', mb: '4'})}>
          Add your photos below
        </h2>
        <div className={css({display: 'flex', mr: '2', ml: '2', flexWrap: 'wrap', gap: '2'})}>
          <label
            htmlFor='file'
            className={css({
              borderWidth: '2px',
              borderStyle: 'dashed',
              borderColor: 'gray.300',
              rounded: 'md',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              h: '24',
              w: '24',
            })}
          >
            <input
              id='file'
              type='file'
              accept='images/*'
              multiple
              className={css({display: 'none'})}
              onChange={handleFileChange}
            />
            <span className={css({color: 'gray.400', fontSize: 'xl', lineHeight: 'xl'})}>+</span>
          </label>
          {selectedFiles.map((file, index) => (
            <div key={crypto.randomUUID()} className={css({pos: 'relative', h: '24', w: '24'})}>
              <img
                src={URL.createObjectURL(file)}
                alt='thumbnail'
                className={css({h: 'full', w: 'full', objectFit: 'cover', rounded: 'md'})}
              />
              <button
                type='button'
                onClick={() => handleRemovePhoto(index)}
                className={css({
                  pos: 'absolute',
                  top: '0',
                  right: '0',
                  mt: '1',
                  mr: '1',
                  bgColor: 'red.500',
                  color: 'white',
                  rounded: 'full',
                  h: '6',
                  w: '6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _focus: {ring: 'none', ringOffset: 'none'},
                })}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <SubmitButton pending={isUploading} onClick={handleSaveAndContinue} />
    </>
  );
};

export default PhotoUpload;

const SubmitButton = ({pending, onClick}: {pending: boolean; onClick: any}) => (
  <Button
    visual='contained'
    color='danger'
    size='md'
    type='button'
    onClick={onClick}
    disabled={pending}
  >
    {pending ? 'Saving...' : 'Save and continue'}
  </Button>
);
