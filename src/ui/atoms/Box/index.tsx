import { CSSProperties } from "react";
import styled from "styled-components";

export interface BoxProps {
  display?: CSSProperties["display"];
  margin?: CSSProperties["margin"];
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  mr?: CSSProperties["marginRight"];
  ml?: CSSProperties["marginLeft"];
  padding?: CSSProperties["padding"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  border?: CSSProperties["border"];
  borderRadius?: CSSProperties["borderRadius"];
  boxShadow?: CSSProperties["boxShadow"];
  alignItems?: CSSProperties["alignItems"];
  justifycontent?: CSSProperties["justifyContent"];
  css?: string;
  zIndex?: CSSProperties["zIndex"];
  flexFlow?: CSSProperties["flexFlow"];
  flex?: CSSProperties["flex"];
  maxWidth?: CSSProperties["maxWidth"];
  minHeight?: CSSProperties["minHeight"];
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  gap?: CSSProperties["gap"];
}

const Box = styled.div<BoxProps>`
  display: ${(props) => props.display || "block"};
  margin: ${(props) => props.margin || "0"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifycontent};
  margin-top: ${(props) =>
    typeof props.mt === "number" ? `${props.mt}px` : props.mt};
  margin-bottom: ${(props) =>
    typeof props.mb === "number" ? `${props.mb}px` : props.mb};
  margin-right: ${(props) =>
    typeof props.mr === "number" ? `${props.mr}px` : props.mr};
  margin-left: ${(props) =>
    typeof props.ml === "number" ? `${props.ml}px` : props.ml};
  height: ${(props) => props.height};
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  max-width: ${(props) =>
    typeof props.maxWidth === "number"
      ? `${props.maxWidth}px`
      : props.maxWidth};
  min-height: ${(props) =>
    typeof props.minHeight === "number"
      ? `${props.minHeight}px`
      : props.minHeight};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};

  gap: ${(props) => props.gap};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
`;

export default Box;
