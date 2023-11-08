import { CSSProperties } from "react";
import styled from "styled-components";

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value: string | number) =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = "8px" }) => gap;

const flow = ({ flow = "row" }) => flow;

const formatAreas = (areas: string[]) =>
  areas.map((area: string) => `"${area}"`).join(" ");

export interface GridProps {
  className?: string;
  columns?: string | number;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  minRowHeight?: string;
  flow?: string;
  rows?: string | number;
  areas?: string[];
  justifycontent?: string;
  alignContent?: string;
}

export interface CellProps {
  className?: string;
  width?: number;
  height?: number;
  top?: string | number;
  left?: string | number;
  middle?: boolean;
  center?: boolean;
  area?: string;
}

interface GridItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  mr?: CSSProperties["marginRight"];
  ml?: CSSProperties["marginLeft"];
  gridgap?: string;
  className?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  height: ${({ height = "auto" }) => height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifycontent }) =>
    justifycontent && `justify-content: ${justifycontent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

export const Cell = styled.div<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ center }) => center && `text-align: center`};
  ${({ area }) => area && `grid-area: ${area}`};
  ${
    /* prettier-ignore */
    ({ middle }) => middle && `
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
  `
  };
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column: span ${(props) => props.xs};
  margin-top: ${(props) =>
    typeof props.mt === "number" ? `${props.mt}px` : props.mt};
  margin-bottom: ${(props) =>
    typeof props.mb === "number" ? `${props.mb}px` : props.mb};
  margin-right: ${(props) =>
    typeof props.mr === "number" ? `${props.mr}px` : props.mr};
  margin-left: ${(props) =>
    typeof props.ml === "number" ? `${props.ml}px` : props.ml};
  @media (min-width: 576px) {
    grid-column: span ${(props) => props.sm};
  }

  @media (min-width: 768px) {
    grid-column: span ${(props) => props.md};
  }

  @media (min-width: 992px) {
    grid-column: span ${(props) => props.lg};
  }
`;

export const GridContainer = styled.div<GridItemProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${({ gridgap }) => gridgap || "16px"};
  margin-top: 10px;
  margin-bottom: 10px;

  margin-top: ${(props) =>
    typeof props.mt === "number" ? `${props.mt}px` : props.mt};
  margin-bottom: ${(props) =>
    typeof props.mb === "number" ? `${props.mb}px` : props.mb};
  margin-right: ${(props) =>
    typeof props.mr === "number" ? `${props.mr}px` : props.mr};
  margin-left: ${(props) =>
    typeof props.ml === "number" ? `${props.ml}px` : props.ml};
  @media (max-width: 768px) {
    // grid-template-columns: repeat(2, 1fr);
  }
`;
