import Stack from 'ui/atoms/Stack';

import { Container, Image, StyedBox, StyledTypography } from './index.styled';

type Iprops = {
  title?: string;
  children?: React.JSX.Element | string;
  centered?: boolean;
};

const FallBack = ({ title, children, centered }: Iprops) => {
  return (
    <Container centered={centered} className="smooth">
      <StyedBox>
        <Image src="/resources/gif/flight-around.gif" alt="Image" />
        {/* <Image src="/resources/images/worldglobe.svg" alt="Image" />
        <Image src="/resources/gif/flight-around.gif" alt="Image" /> */}
      </StyedBox>
      <Stack mt={30} alignItems="center">
        <StyledTypography color="primary500" size="md" variant="p">
          {title || ' We were unable to locate your trip.'}
        </StyledTypography>
        {children ? (
          <StyledTypography align="center" size="md" variant="p">
            {children}
          </StyledTypography>
        ) : (
          <>{children}</>
        )}
      </Stack>
    </Container>
  );
};

export default FallBack;
