import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container, SidebarMenuIntemIcon, SidebarMenuItemText } from './styles';

export interface Props {
  active: boolean;
  title: string;
  icon: ComponentType<IconBaseProps>;
}

export const SidebarMenuItem = ({
  active = false,
  title = 'Button',
  icon: Icon,
  ...props
}: Props) => {
  return (
    <Container {...props} active={active}>
      <SidebarMenuIntemIcon>
        <Icon />
      </SidebarMenuIntemIcon>
      <SidebarMenuItemText>{title}</SidebarMenuItemText>
    </Container>
  );
};
