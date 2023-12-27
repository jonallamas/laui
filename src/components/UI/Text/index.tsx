import React from 'react';
import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
}

export function Text(props: TextProps) {
  const { children } = props;
  return <p>{children}</p>;
}
