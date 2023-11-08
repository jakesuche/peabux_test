import styled from 'styled-components';
import Box from 'ui/atoms/Box';
import { Typography } from 'ui/atoms/Typography';
import { Modal } from 'ui/components/Modal';

export const SearchLoaderModalWrapper = styled(Modal)`
  #modal-inner {
    border-radius: 5.96364px;
  }
`;

export const LoaderInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoaderLocations = styled.div``;
export const Container = styled.div<{ centered?: boolean }>`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  ${({ centered }) =>
    centered &&
    `
  height: 100%;
  justify-content: center;
`}
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: -34px;
  width: 100%;
  mix-blend-mode: darken;
`;

export const Row = styled.div<{ gap: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

export const Item = styled.div`
  //   flex: 1;

  //   margin-right: 10px;
`;

export const StyledTypography = styled(Typography)`
  // white-space: nowrap;
  //  :nth-child(event){
  //   color:red;
  // }
`;

export const StyedBox = styled(Box)`
  width: 300px;
  @media (max-width: 576.98px) {
    width: 200px;
    margin-top: 20px;
  }
`;
