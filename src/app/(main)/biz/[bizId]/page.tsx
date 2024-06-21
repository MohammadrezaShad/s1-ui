import {FaUserCircle} from 'react-icons/fa';
import {css} from '@styled/css';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import {Button} from '@/components';
import {CookieName} from '@/constants';
import {findBusinessById, getProfile, searchBusiness} from '@/graphql';
import {BusinessEntity} from '@/graphql/generated/types';

import BusinessActions from './_components/actions';
import AddressBox from './_components/address-box';
import BusinessCard from './_components/business-card';
import BusinessHours from './_components/business-hours';
import CommentBox from './_components/comment-box';
import MainHeader from './_components/header';
import OwnershipBox from './_components/ownership-box';
import Rating from './_components/rating';
import Scores from './_components/scores';
import {
  Amenity,
  CardsWrapper,
  Contacts,
  Container,
  Details,
  RatingsContainer,
  RatingsWrapper,
  ReviewLink,
  ScoresWrapper,
  Section,
  VisitorInfoContainer,
  VisitorInfoWrapper,
  VisitorRatingWrapper,
  VisitorReviewWrapper,
  Wrapper,
} from './_components/styled';

const user = {
  name: 'Sara B.',
  location: 'Walnut Creek, CA',
  eliteStatus: 'Elite 24',
  reviews: 307,
  friends: 249,
  photos: 520,
  avatarUrl: 'https://via.placeholder.com/48', // replace with actual image URL
};

const comment = {
  date: 'Jan 3, 2024',
  content: `As the world's largest indoor bazaar, how can you visit in Istanbul without seeing the grand bazaar?! This beautiful and old market is definitely something you have to visit before leaving in Istanbul. It would be a sin to visit all of the historical sites and not include the Grand Bazaar in your itinerary. I will say to be careful as they do charge extremely high prices to tourists, of course. I would not buy anything until I get comfortable bargaining and check out a good portion of the bazaar, coming back to purchase from the from the merchant that gives you the best deal. Happy touring and hustling!`,
  ratings: {
    helpful: 0,
    thanks: 0,
    love: 2,
    ohNo: 0,
  },
};

async function Page({params}: {params: {bizId: string}}) {
  const cookie = cookies();
  const token = cookie.get(CookieName.ACCESS_TOKEN)?.value || '';
  const id = params.bizId;
  const data = await findBusinessById({id});
  const userData = await getProfile(token);

  const business = data.result;
  const currentUser = userData.result;

  if (!business) redirect('/');

  const businessTaxonomies = business.taxonomies?.map(taxonomy => taxonomy._id);

  const relatedBusinessData = await searchBusiness({
    taxonomies: businessTaxonomies,
    count: 5,
  });

  const relatedBusinesses = relatedBusinessData.results as BusinessEntity[];

  return (
    <div>
      <MainHeader business={business as BusinessEntity} />
      <Container>
        <Wrapper>
          <Details>
            <div className={css({my: '6'})}>
              <BusinessActions />
              <Section id='#location-and-hours'>
                <h2>Location & Hours</h2>
                <BusinessHours business={business as BusinessEntity} />
              </Section>
              <Section>
                <h2>Amenities and More</h2>
                <div>
                  <Amenity>Takes Reservations</Amenity>
                  <Amenity>No Delivery</Amenity>
                  <Amenity>No Takeout</Amenity>
                  <Amenity>Accepts Credit Cards</Amenity>
                  <Amenity>Outdoor Seating</Amenity>
                  <Amenity>Casual</Amenity>
                  <Amenity>Moderate Noise</Amenity>
                  <Amenity>Casual Dress</Amenity>
                  <Amenity>Good for Groups</Amenity>
                  <Amenity>Good for Dessert</Amenity>
                  <Amenity>Waiter Service</Amenity>
                  <Amenity>Free Wi-Fi</Amenity>
                  <Amenity>Live Music</Amenity>
                  <Amenity>Full Bar</Amenity>
                </div>
              </Section>
              <Section>
                <h2>Help improve us</h2>
                <p className={css({mb: '3'})}>Is this place touristy?</p>
                <div className={css({display: 'flex', alignItems: 'center', gap: '2'})}>
                  <Button visual='outlined' size='md' color='grey'>
                    Yes
                  </Button>
                  <Button visual='outlined' size='md' color='grey'>
                    No
                  </Button>
                  <Button visual='outlined' size='md' color='grey'>
                    Not sure
                  </Button>
                </div>
              </Section>
              <Section>
                <h2>Recommended Reviews</h2>
                <RatingsContainer>
                  <RatingsWrapper>
                    <p>Overall Rating</p>
                    <Rating rating={business.businessScore?.ratingValue ?? 0} />
                    <span>{business.businessScore?.ratingCount ?? 0} Reviews</span>
                  </RatingsWrapper>
                  <ScoresWrapper>
                    <Scores scoreDetails={business.businessScoreDetail} />
                  </ScoresWrapper>
                </RatingsContainer>
                <VisitorInfoContainer>
                  <VisitorInfoWrapper>
                    <FaUserCircle className={css({w: '16', h: '16', color: 'grey_300'})} />
                    <div>
                      <div className={css({fontWeight: 'semibold'})}>
                        {currentUser?.displayName}
                      </div>
                      <div className={css({color: 'gray.500', fontSize: 'sm'})}>
                        {`${currentUser?.country}, ${currentUser?.city}`}
                      </div>
                    </div>
                  </VisitorInfoWrapper>
                  <VisitorReviewWrapper>
                    <VisitorRatingWrapper>
                      <Rating rating={0} />{' '}
                      <span className={css({fontSize: 'sm'})}>Select your rating</span>
                    </VisitorRatingWrapper>
                    <ReviewLink href='/'>
                      Start your review of <span>{business.name}</span>
                    </ReviewLink>
                  </VisitorReviewWrapper>
                </VisitorInfoContainer>
                <CommentBox user={user} comment={comment} />
                <CommentBox user={user} comment={comment} />
              </Section>
            </div>
          </Details>
          <Contacts>
            <AddressBox
              phoneNumber={business.phone as string}
              address={business.address as string}
              website={business.webAddress as string}
            />
            <OwnershipBox businessName={business.name as string} />
          </Contacts>
        </Wrapper>

        {relatedBusinesses?.length > 0 ? (
          <Section>
            <h2>People Also Viewed</h2>
            <CardsWrapper>
              {relatedBusinesses?.map(_business => (
                <BusinessCard key={_business._id} business={_business} />
              ))}
            </CardsWrapper>
          </Section>
        ) : null}
      </Container>
    </div>
  );
}

export default Page;
