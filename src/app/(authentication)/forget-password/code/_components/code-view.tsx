import {css} from '@styled/css';

import PinInput from '@/app/(authentication)/_components/pin-input';
import Timer from '@/app/(authentication)/_components/timer';

import {Title, Wrapper} from '../../_components/forget-password-view.styled';
import {ContentWrapper, PinWrapper, Subtitle, SubtitleWrapper} from './code-view.sytled';

function CodeView() {
  return (
    <Wrapper>
      <Title className={css({mb: '0'})}>Verify account</Title>
      <ContentWrapper>
        <SubtitleWrapper>
          <Subtitle>Please insert the code sent to tes...@gmail.com</Subtitle>
        </SubtitleWrapper>
        <PinWrapper>
          <PinInput />
          <Timer />
        </PinWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CodeView;
