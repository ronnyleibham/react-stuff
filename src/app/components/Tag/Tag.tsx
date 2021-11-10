import type { ReactNode } from 'react';
import React from 'react';
// import styled from 'styled-components'

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps): JSX.Element {
  return <span>{children}</span>;
}
