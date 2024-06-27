import React from 'react';
import {Box} from '@styled/jsx';
import Image from 'next/image';
import Link from 'next/link';

import {storageUrl} from '@/constants/environments';
import {BusinessEntity} from '@/graphql/generated/types';

import Rating from './rating';
import {BusinessCategory, CardTitle, ImageWrapper, Ratings} from './styled';

interface Props {
  business: BusinessEntity;
}

function BusinessCard({business}: Props) {
  const {thumbnail, name, businessScore, taxonomies, _id, images} = business;
  return (
    <div>
      <ImageWrapper>
        <Image
          src={thumbnail ? `${storageUrl}/${thumbnail?._id}` : `${storageUrl}/${images?.[0]?._id}`}
          alt={name}
          unoptimized
          width={240}
          height={186}
        />
      </ImageWrapper>
      <Box mb={2}>
        <CardTitle>
          <Link href={`/biz/${business._id}`}>{name}</Link>
        </CardTitle>
      </Box>
      <Ratings>
        <Rating width='5' height='5' rating={3} />
        <span>{businessScore?.ratingCount}</span>
      </Ratings>
      <span>
        {taxonomies?.map(taxonomy => (
          <BusinessCategory key={taxonomy._id}>{taxonomy.title}, </BusinessCategory>
        ))}
      </span>
    </div>
  );
}

export default BusinessCard;
