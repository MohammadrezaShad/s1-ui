import {GoogleMapsEmbed} from '@next/third-parties/google';
import {css} from '@styled/css';

import {Button} from '@/components';
import {BusinessEntity, WorkHourType} from '@/graphql/generated/types';

import BusinessHoursTable from './business-hours-table';
import {Address, BusinessAddressContainer, BusinessAddressWrapper, Cell} from './styled';

interface Props {
  business: BusinessEntity;
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string;

function BusinessHours({business}: Props) {
  return (
    <BusinessAddressContainer>
      <BusinessAddressWrapper>
        {business?.address && (
          <a href='/'>
            <GoogleMapsEmbed
              apiKey={GOOGLE_MAPS_API_KEY}
              height='100%'
              width='100%'
              mode='place'
              q={encodeURIComponent(business.address)}
            />
          </a>
        )}
        <Address>
          <Cell className={css({pr: '2'})}>
            <address>{business?.address}</address>
          </Cell>
          <Cell>
            <Button className={css({rounded: 0})} visual='outlined' size='md' color='grey'>
              Get directions
            </Button>
          </Cell>
        </Address>
      </BusinessAddressWrapper>
      <BusinessHoursTable workHours={business?.workHour as WorkHourType[]} />
    </BusinessAddressContainer>
  );
}

export default BusinessHours;
