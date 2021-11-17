import React, { ReactNode } from 'react';
import { Container, SidebarCaption, SidebarMenu } from './styles';

interface Props {
  children: ReactNode;
  caption: string;
}

export const SidebarGroup = ({ children, caption }: Props) => {
  const smCaption = caption.split(' ');
  return (
    <Container>
      <SidebarCaption>
        {smCaption[0]}
        <span> {smCaption[1]}</span>
      </SidebarCaption>
      <SidebarMenu>{children}</SidebarMenu>
    </Container>
  );
};
