import React, { ReactNode } from 'react';

import { TextPrimitive } from './style';

interface TextProps {
  children: ReactNode;
  size?: 'small' | 'normal';
  align?: 'left' | 'center' | 'right';
  isBold?: boolean;
  color?: string;
}

export function Text(props: TextProps) {
  const {
    children,
    size = 'normal',
    align = 'left',
    isBold = false,
    color,
  } = props;

  return (
    <TextPrimitive
      $isSmall={size === 'small'}
      $align={align}
      $isBold={isBold}
      $color={color}
    >
      {children}
    </TextPrimitive>
  );
}
