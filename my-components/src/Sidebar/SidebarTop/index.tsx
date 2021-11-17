import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  Container,
  CloseSidebarButton,
  OpenSidebarButton,
  SidebarLogo,
} from './styles';

import fullLogo from '../../assets/fullLogo.png';

interface Props {}

export const SidebarTop = ({}: Props) => {
  return (
    <Container>
      <CloseSidebarButton>
        <FiX />
      </CloseSidebarButton>
      <SidebarLogo href="/">
        <img src={fullLogo} className="full__logo" alt="logo" />
      </SidebarLogo>
      <OpenSidebarButton>
        <FiMenu size={36} />
      </OpenSidebarButton>
    </Container>
  );
};
