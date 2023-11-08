import styled from 'styled-components';


export const TabControllerNavigation = styled.div`
  margin-top: 34px;
  text-align: center;
`;

 const HorizontalScrollGroupWrapper = styled.div`
  padding: 8px;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div,
  & > button {
    display: inline-block;
  }
`;

export const TabControllerNavigationButtonGroup = styled(HorizontalScrollGroupWrapper)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.mercury};
  display: flex;
  align-items: center;
  padding: 0;

  button {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TabControllerNavigationButton = styled.button<{
  active?: boolean;
  activeColor?: string;
  textColor?: string;
  activeBorderWidth?: string;
}>`
  padding-bottom: 15px;
  background: none;
  border: 0;
  white-space: nowrap;
  font-size: 16px;
  color: ${({ theme, textColor }) => (textColor ? textColor : theme.colors.lightGeyser)};
  margin-right: 28.8px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  &:hover {
    cursor: pointer;
    color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.colors.darkGray)};
  }
  ${({ active, theme, activeColor, activeBorderWidth }) =>
    active &&
    `
		color: ${activeColor ? activeColor : theme.colors.darkGray};
		&::after {
			content: '';
			display: block;
			height: 4px;
			width: ${activeBorderWidth ? activeBorderWidth : '24px'};
			background: ${activeColor ? activeColor : theme.colors.darkGray};
			border-radius: 4px 4px 0px 0px;
			position: absolute;
			bottom: 0;
			left: 25%;
		}
	`};

  ${({ theme }) => theme.media.small`
			font-size: 13px;
	`};
`;

export const TabControllerBody = styled.div`
  margin-bottom: 20px;
  margin-top: 27px;
`;
