import styled from "styled-components";





export const InputsGroup = styled.form<{ isError?: boolean }>`
  label {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.lightGeyser};
  }

  input,
  select {
    width: 100%;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.neutral400};
    border-radius: 8px;
    padding: 14px 12px;
    font-size: 0.8rem;
    border: ${({ isError, theme }) =>
      isError && `1px solid ${theme.colors.primary600}`};
    &::placeholder {
      color: ${({ theme }) => theme.colors.geyser};
      font-size: 14px;
    }
  }
  select {
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 19 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.418 6.68494L9.79297 11.6849L4.16797 6.68494' stroke='%23676767' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    appearance: none;
    option[value=""][selected][hidden] {
      color: red;
    }
  }
  input {
    color: ${({ theme }) => theme.colors.black};
    border: ${({ isError, theme }) =>
      isError && `1px solid ${theme.colors.primary600}`};
    outline: none;
    box-shadow: none;
  }
  .error_text {
    margin: 0;
  }

 
`;
