import React from 'react';
import {
  Container,
  SidebarInner,
  SidebarLogo,
  SidebarList,
  SidebarProfile,
  SidebarProfileDetails,
  SidebarProfileUser,
  SidebarProfileDetailsLink,
} from './styles';

import { SidebarGroup } from '../SidebarGroup';

import smallLogo from '../../assets/smallLogo.png';
import { SidebarMenuItem } from '../SidebarMenuItem';
import { FiCalendar } from 'react-icons/fi';

interface Props {}

export const SidebarMain = ({}: Props) => {
  return (
    <Container>
      <SidebarInner>
        <SidebarLogo>
          <img src={smallLogo} alt="logo" />
        </SidebarLogo>
        <SidebarList>
          <SidebarGroup caption="Admin Tools">
            <SidebarMenuItem
              active={true}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
          </SidebarGroup>
          <SidebarGroup caption="Insights">
            <SidebarMenuItem
              active={true}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
            <SidebarMenuItem
              active={false}
              title="Definições"
              icon={FiCalendar}
            />
          </SidebarGroup>
        </SidebarList>
        <SidebarProfile>
          <SidebarProfileDetails>

            <SidebarProfileDetailsLink>
              <div></div>
            </SidebarProfileDetailsLink>
          </SidebarProfileDetails>
          <SidebarProfileUser></SidebarProfileUser>
        </SidebarProfile>
      </SidebarInner>
    </Container>
  );
};
