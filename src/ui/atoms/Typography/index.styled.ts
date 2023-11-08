import React, { CSSProperties } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { variant } from 'styled-system';

enum VARIANT_BASED_TYPE {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  div = 'body',
  p = 'p',
  span = 'span',
  /* eslint-disable */
  a = 'span'
}

export interface TypographyProps {
  children?: React.ReactNode;
  // variant defines the html tag
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'p' | 'span' | 'a';
  // type defines the styling
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'p' | 'span';
  align?: 'center' | 'left' | 'right';
  uppercase?: boolean;
  noMargin?: boolean;
  textDecoration?: CSSProperties['textDecoration'];
  textTransform?: CSSProperties['textTransform'];

  color?: 'inherit' | keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSizes'];
  font?: keyof DefaultTheme['fonts'];

  // don't include extra-bold since Roboto doesn't have the font-weight of 800
  fontWeight?: keyof DefaultTheme['fontWeights'];
  lineHeight?: CSSProperties['lineHeight'];
  italic?: boolean;
}

const Typography = styled.span.attrs<TypographyProps>(({ variant = 'span', type }) => ({
  as: variant,
  // assign type if available in props, else define based on variant
  type: type || VARIANT_BASED_TYPE[variant]
}))<TypographyProps>`
  /* variant based typography */
  ${({
    textDecoration,
    textTransform,
    theme: { fonts, fontSizes, lineHeights, fontWeights }
  }) => css`
    ${variant({
      prop: 'type',
      variants: {
        h1: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['4xl'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.bold,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        h2: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['3xl'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.bold,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        h3: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['2xl'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.semiBold,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        h4: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['xl'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.semiBold,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        h5: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['lg'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.semiBold,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        body: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['md'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.regular,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        p: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['md'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.regular,
          textTransform: textTransform,
          textDecoration: textDecoration
        },
        span: {
          fontFamily: fonts?.primary,
          fontSize: fontSizes?.['md'],
          lineHeight: lineHeights?.base,
          fontWeight: fontWeights?.regular,
          textTransform: textTransform,
          textDecoration: textDecoration
        }
      }
    })}
  `}

  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.merlin)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  line-height: ${({ lineHeight }) => lineHeight};
  ${({ noMargin }) => noMargin !== undefined && `margin: 0;`};
  ${({ align }) => align && `text-align: ${align};`}
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}  
  ${({ font, theme }) => font && `font-family: ${theme?.fonts?.[font]};`}
  ${({ size, theme }) => size && `font-size: ${theme?.fontSizes?.[size]};`}
  ${({ fontWeight, theme }) => fontWeight && `font-weight: ${theme?.fontWeights?.[fontWeight]};`}
`;

Typography.displayName = 'Typography';

export { Typography };
