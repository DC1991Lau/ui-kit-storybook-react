import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { SidebarBottom } from './SidebarBottom';
import { SidebarMain } from './SidebarMain';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarTop } from './SidebarTop';
import { Container } from './styles';

export interface Props {}

export const Sidebar = ({}: Props) => {
  return (
    <Container>
      <SidebarTop />
      <SidebarMain/>
      <SidebarBottom />
    </Container>
  );
};
