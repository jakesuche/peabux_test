import styled from 'styled-components';
import { Typography } from 'ui/atoms/Typography';

export const BookingsTableWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-top: 35px;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BookingsTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  img {
    height: 40px;
    width: 48px;
    object-fit: cover;
  }
  thead {
    text-align: left;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid #e1e6ed;
    th {
      padding: 0 20px;
      padding-bottom: 21px;
    }
  }
  tbody {
    td {
      padding: 12px 20px;
      /* width: 20%; */
      border-bottom: 1px solid #e1e6ed;
      h5 {
        font-size: 13.2px;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme.colors.black};
      }
      p {
        font-size: 7.91965px;
        color: ${({ theme }) => theme.colors.volcanoGray};
      }
      button {
        background: ${({ theme }) => theme.colors.white};
        padding: 16px 50px;
        width: 96.34px;
        height: 35.88px;
        border: 1px solid ${({ theme }) => theme.colors.primary500};
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme.colors.primary500};

        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }

    tr:last-child {
      td {
        border: 0;
      }
    }
  }
`;

export const FlightDistanceTD = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 70px;
    margin: 0 12px;
  }
`;

export const BookingTableStatus = styled(Typography)<{ BookingStatusName: string }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.02em;
  ${({ BookingStatusName, theme }) =>
    BookingStatusName?.toLowerCase() === 'active' &&
    `
        color: ${theme.colors.success600};
    `}
  ${({ BookingStatusName }) =>
    BookingStatusName?.toLowerCase() === 'ticketpending' &&
    `
        color: #FBBF24;
    `}
    ${({ BookingStatusName }) =>
    BookingStatusName?.toLowerCase() === 'cancelled' &&
    `
        color:red;
    `}
`;
