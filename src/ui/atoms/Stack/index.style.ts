import { CSSProperties } from "react";
import styled, { css } from "styled-components";

export interface StackProps {
  spacing?: number;
  direction?: "row" | "column";
  alignItems?: CSSProperties["alignItems"];
  justifycontent?: CSSProperties["justifyContent"];
  padding?: string;
  width?: string;
  sm?: Partial<StackProps>;
  md?: Partial<StackProps>;
  lg?: Partial<StackProps>;
  xl?: Partial<StackProps>;
  children: React.ReactNode;
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  mr?: CSSProperties["marginRight"];
  ml?: CSSProperties["marginLeft"];
  className?: string;
}
export const propsToCss = (props: Partial<StackProps>) => css`
  ${props.spacing && `margin-bottom: ${props.spacing}px;`}
  ${props.direction && `flex-direction: ${props.direction};`}
  ${props.alignItems && `align-items: ${props.alignItems};`}
  ${props.justifycontent && `justify-content: ${props.justifycontent};`}
`;

export const StackContainer: any = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifycontent};
  padding: ${(props) => props.padding};
  margin-top: ${(props) =>
    typeof props.mt === "number" ? `${props.mt}px` : props.mt};
  margin-bottom: ${(props) =>
    typeof props.mb === "number" ? `${props.mb}px` : props.mb};
  margin-right: ${(props) =>
    typeof props.mr === "number" ? `${props.mr}px` : props.mr};
  margin-left: ${(props) =>
    typeof props.ml === "number" ? `${props.ml}px` : props.ml};
  width: ${({ width }) => width};
  & > * + * {
    ${(props) =>
      props.direction === "column"
        ? `margin-top: ${props.spacing}px;`
        : `margin-left: ${props.spacing}px;`}
  }

  ${(props) =>
    props.sm &&
    css`
      @media (min-width: 576px) {
        ${StackContainer} {
          ${propsToCss(props.sm)}
        }
      }
    `}

  ${(props) =>
    props.md &&
    css`
      @media (min-width: 768px) {
        ${StackContainer} {
          ${propsToCss(props.md)}
        }
      }
    `}

  ${(props) =>
    props.lg &&
    css`
      @media (min-width: 992px) {
        ${StackContainer} {
          ${propsToCss(props.lg)}
        }
      }
    `}

  ${(props) =>
    props.xl &&
    css`
      @media (min-width: 1200px) {
        ${StackContainer} {
          ${propsToCss(props.xl)}
        }
      }
    `}
`;
