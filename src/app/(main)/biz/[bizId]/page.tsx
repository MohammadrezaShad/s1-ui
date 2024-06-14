import {FaUserCircle} from 'react-icons/fa';
import {FiBookmark, FiShare, FiStar} from 'react-icons/fi';
import {TbPhotoPlus} from 'react-icons/tb';
import {css} from '@styled/css';
import Link from 'next/link';

import {Button} from '@/components';

import AddressBox from './address-box';
import CommentBox from './comment-box';
import OwnershipBox from './ownership-box';
import Rating from './rating';
import Scores from './scores';
import Slider from './slider';

const addressData = {
  phoneNumber: '(0212) 5191248',
  address: 'Kalpakçılar Cd. No:22',
  city: 'Istanbul',
  country: 'Turkey',
};

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

function Page() {
  return (
    <div>
      <div
        className={css({
          position: 'relative',
        })}
      >
        <Slider />
        <div
          className={css({
            position: 'absolute',
            inset: '0',
            alignItems: 'flex-end',
            display: 'flex',
            px: '16',
            py: '10',
            zIndex: 1,
            bgImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)',
          })}
        >
          <div
            className={css({
              flex: '1',
              pointerEvents: 'none',
              pr: '4',
              display: 'flex',
              flexDir: 'column',
              rowGap: '2',
            })}
          >
            <h1
              className={css({
                textStyle: 'heading1',
                color: 'token(colors.white)',
              })}
            >
              Parole
            </h1>
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '0.5',
              })}
            >
              <Rating rating={3.7} />
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.white)',
                })}
              >
                3.7 (19 reviews)
              </span>
            </div>

            <span>
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.white)',
                })}
              >
                Lounges,{' '}
              </span>
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.white)',
                })}
              >
                Breakfast & Brunch,{' '}
              </span>
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.white)',
                })}
              >
                Sandwiches
              </span>
            </span>
            <div className={css({display: 'flex', alignItems: 'center', gap: 1})}>
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.green_600)',
                })}
              >
                Open
              </span>
              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.pumpkin_600)',
                  display: 'none',
                })}
              >
                Close
              </span>

              <span
                className={css({
                  textStyle: 'caption',
                  color: 'token(colors.white)',
                })}
              >
                8:30 AM - 2:00 AM (Next day)
              </span>
              <Link
                href='/'
                className={css({
                  display: 'inline-flex',
                  rounded: 'md',
                  py: '0.5',
                  px: '1',
                  textAlign: 'center',
                  transition: 'all 0.8s',
                  bgColor: 'rgba(255, 255, 255, 0.1)',
                  _hover: {
                    bgColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  color: 'token(colors.white)',
                  cursor: 'pointer',
                })}
              >
                <span>See hours</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          maxW: '6xl',
          mx: 'auto',
          px: '10',
          mt: '8',
        })}
      >
        <div
          className={css({
            w: 'full',
            display: 'flex',
            flexWrap: 'nowrap',
          })}
        >
          <div
            className={css({
              pr: '4',
              w: '[calc(100% / 3*2)]',
            })}
          >
            <div className={css({my: '6'})}>
              <div className={css({display: 'flex', gap: '2', alignItems: 'center'})}>
                <Button
                  visual='contained'
                  color='danger'
                  size='md'
                  type='button'
                  className={css({gap: '2'})}
                >
                  <FiStar className={css({w: '6', h: '6'})} /> Write a review
                </Button>
                <Button
                  visual='outlined'
                  color='grey'
                  size='md'
                  type='button'
                  className={css({gap: '2'})}
                >
                  <TbPhotoPlus className={css({w: '6', h: '6'})} /> Add photo
                </Button>
                <Button
                  visual='outlined'
                  color='grey'
                  size='md'
                  type='button'
                  className={css({gap: '2'})}
                >
                  <FiShare className={css({w: '6', h: '6'})} />
                  Share
                </Button>
                <Button
                  visual='outlined'
                  color='grey'
                  size='md'
                  type='button'
                  className={css({gap: '2'})}
                >
                  <FiBookmark className={css({w: '6', h: '6'})} />
                  Save
                </Button>
              </div>
              <section
                className={css({
                  py: '8',
                  borderTop: '1px solid token(colors.grey_200)',
                  pt: '8',
                  mt: '8',
                })}
              >
                <h2
                  className={css({
                    textStyle: 'title3',
                    mb: '6',
                  })}
                >
                  Location & Hours
                </h2>
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'start',
                    columnGap: '8',
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      flexDir: 'column',
                      alignItems: 'start',
                      width: '[315px]',
                    })}
                  >
                    <a href='/'>
                      <img
                        src='https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&zoom=15&center=41.029805%2C28.975451&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C41.029805%2C28.975451&signature=XZoW9le88a3c_KBwG81SRspfcwM='
                        alt=''
                      />
                    </a>
                    <div
                      className={css({
                        display: 'table',
                        mt: '2',
                      })}
                    >
                      <div
                        className={css({
                          display: 'table-cell',
                        })}
                      >
                        <address>
                          <p>İstiklal Cad.</p>
                          <p>Suriye Pasajı No:166/ C</p>
                          <p>34200 Istanbul</p>
                          <p>Turkey</p>
                        </address>
                        <p>Asmalı Mescit, Tomtom Mh., Beyoğlu</p>
                      </div>
                      <div
                        className={css({
                          display: 'table-cell',
                        })}
                      >
                        <Button visual='outlined' size='sm'>
                          Get directions
                        </Button>
                      </div>
                    </div>
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Mon</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Tue</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Wed</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Thu</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Fri</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Sat</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})}>
                          <span className={css({color: 'green_600'})}>Open now</span>
                        </td>
                      </tr>
                      <tr className={css({h: '2'})} />
                      <tr>
                        <th className={css({pr: '4', textAlign: 'left'})}>Sun</th>
                        <td className={css({pr: '4', textAlign: 'left'})}>10:00 AM - 10:00 PM</td>
                        <td className={css({pr: '4', textAlign: 'left'})} />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section
                className={css({
                  py: '8',
                  borderTop: '1px solid token(colors.grey_200)',
                  pt: '8',
                  mt: '8',
                })}
              >
                <h2
                  className={css({
                    textStyle: 'title3',
                    mb: '6',
                  })}
                >
                  Amenities and More
                </h2>
                <div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Takes Reservations
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    No Delivery
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    No Takeout
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Accepts Credit Cards
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Outdoor Seating
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Casual
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Moderate Noise
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Casual Dress
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Good for Groups
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Good for Dessert
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Waiter Service
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Free Wi-Fi
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Live Music
                  </div>
                  <div className={css({w: '1/2', mt: '4', px: '2', display: 'inline-block'})}>
                    Full Bar
                  </div>
                </div>
              </section>
              <section
                className={css({
                  py: '8',
                  borderTop: '1px solid token(colors.grey_200)',
                  pt: '8',
                  mt: '8',
                })}
              >
                <h2
                  className={css({
                    textStyle: 'title3',
                    mb: '6',
                  })}
                >
                  Help improve us
                </h2>
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
              </section>
              <section
                className={css({
                  py: '8',
                  borderTop: '1px solid token(colors.grey_200)',
                  pt: '8',
                  mt: '8',
                })}
              >
                <h2
                  className={css({
                    textStyle: 'title3',
                    mb: '6',
                  })}
                >
                  Recommended Reviews
                </h2>
                <div className={css({display: 'table', borderSpacingX: '16', mx: '-14'})}>
                  <div
                    className={css({
                      display: 'table-cell',
                      verticalAlign: 'middle',
                      pt: '10',
                      mx: '8',
                    })}
                  >
                    <p className={css({textStyle: 'body2', color: 'grey_800', mb: '2'})}>
                      Overall Rating
                    </p>
                    <Rating rating={3.75} />
                    <span className={css({color: 'grey_400', mt: '2'})}>19 Reviews</span>
                  </div>
                  <div
                    className={css({
                      display: 'table-cell',
                      verticalAlign: 'middle',
                      pt: '10',
                      mx: '8',
                      w: 'full',
                    })}
                  >
                    <Scores />
                  </div>
                </div>
                <div
                  className={css({
                    shadow: 'lg',
                    px: '4',
                    py: '5',
                    rounded: 'sm',
                    bgColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    w: 'full',
                    mt: '4',
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'start',
                      gap: '4',
                    })}
                  >
                    <FaUserCircle className={css({w: '16', h: '16', color: 'grey_300'})} />
                    <div>
                      <div className={css({fontWeight: 'semibold'})}>Javad R.</div>
                      <div className={css({color: 'gray.500', fontSize: 'sm'})}>
                        San Fransisco, CA
                      </div>
                    </div>
                  </div>
                  <div
                    className={css({
                      display: 'flex',
                      flexDir: 'column',
                      alignItems: 'start',
                      gap: '4',
                    })}
                  >
                    <div
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2',
                      })}
                    >
                      <Rating rating={0} />{' '}
                      <span className={css({fontSize: 'sm'})}>Select your rating</span>
                    </div>
                    <Link
                      className={css({
                        color: 'sky.400',
                        fontSize: 'sm',
                        _hover: {textDecoration: '!underline'},
                      })}
                      href='/'
                    >
                      Start your review of <span className={css({fontWeight: 600})}>Parole</span>
                    </Link>
                  </div>
                </div>
                <CommentBox user={user} comment={comment} />
                <CommentBox user={user} comment={comment} />
              </section>
            </div>
          </div>
          <div
            className={css({
              pl: '4',
              w: '[calc(100% / 3)]',
              position: 'sticky',
              alignSelf: 'start',
              top: '0',
            })}
          >
            <AddressBox
              phoneNumber={addressData.phoneNumber}
              address={addressData.address}
              city={addressData.city}
              country={addressData.country}
            />
            <OwnershipBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
