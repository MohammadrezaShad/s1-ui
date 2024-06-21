import {css} from '@styled/css';

import {storageUrl} from '@/constants/environments';
import {BusinessEntity, WorkHourType} from '@/graphql/generated/types';

import {isBusinessOpen} from '../utils';
import Rating from './rating';
import Slider from './slider';
import {Header, HoursLink, InfoWrapper, Overlay, RatingWrapper, Taxonomy, Title} from './styled';

interface Props {
  business: BusinessEntity;
}

function MainHeader({business}: Props) {
  function formatTime(time: string): string {
    const [hour, minute] = time.split(' ')[0].split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  }

  function getTodaysWorkingHours(workHours: WorkHourType[], currentDate: Date): string {
    if (!workHours) return 'Closed';

    const currentDay = currentDate.toLocaleDateString('en-US', {weekday: 'long'});

    const todaysHours = workHours.find(workHour => workHour.day === currentDay);

    if (!todaysHours || todaysHours.closed) {
      return 'Closed';
    }

    if (todaysHours.open24Hours) {
      return 'Open 24 hours';
    }

    if (!todaysHours.timeRanges) {
      return 'Closed';
    }

    return todaysHours.timeRanges
      .map(range => `${formatTime(range.from!)} - ${formatTime(range.to!)}`)
      .join(', ');
  }

  const isBusinessCurrentlyOpen = isBusinessOpen(business?.workHour as WorkHourType[], new Date());

  return (
    <Header>
      {business?.images && <Slider images={business.images} storageUrl={storageUrl as string} />}
      <Overlay>
        <InfoWrapper>
          <Title>{business?.name}</Title>
          <RatingWrapper>
            <Rating rating={business?.businessScore?.ratingValue ?? 0} />
            <span>
              {business?.userBusinessScore} ({business?.businessScore?.ratingCount ?? 0} reviews)
            </span>
          </RatingWrapper>

          {business?.taxonomies?.length ? (
            <span>
              <Taxonomy>{`${business?.taxonomies?.[0]?.title} `}</Taxonomy>
              {business?.taxonomies?.[1] && (
                <Taxonomy>{`${business?.taxonomies?.[1]?.title} `}</Taxonomy>
              )}
              {business?.taxonomies?.[2] && (
                <Taxonomy>{`${business?.taxonomies?.[2]?.title}`}</Taxonomy>
              )}
            </span>
          ) : null}
          <div className={css({display: 'flex', alignItems: 'center', gap: 1})}>
            {isBusinessCurrentlyOpen ? (
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.green_600)',
                })}
              >
                Open
              </span>
            ) : (
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.pumpkin_600)',
                })}
              >
                Close
              </span>
            )}

            <span
              className={css({
                textStyle: 'caption',
                color: 'token(colors.white)',
              })}
            >
              {getTodaysWorkingHours(business?.workHour as WorkHourType[], new Date())}
            </span>
            <HoursLink href='#location-and-hours'>
              <span>See hours</span>
            </HoursLink>
          </div>
        </InfoWrapper>
      </Overlay>
    </Header>
  );
}

export default MainHeader;
