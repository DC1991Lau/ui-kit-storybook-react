import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.a<ContainerProps>`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  border-radius: 12px;
  background: ${(props) => (props.active ? 'var(--primary)' : 'transparent')};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? 'white' : '#808191')};

  transition: all 0.25s;

  &:hover {
    color: ${(props) => (props.active ? 'white' : 'var(--primary)')};
  }

  @media only screen and (max-width: 1179px) {
    position: relative;
  }
  @media only screen and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 3px;
  }
`;

export const SidebarMenuIntemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  font-size: 0;
  margin-right: 21px;

  svg {
    font-size: 21px;
    opacity: 0.4;
    transition: all 0.25s;
  }

  @media only screen and (max-width: 1179px) {
    width: 56px;
    height: 56px;
    margin-right: 0;
    transition: margin 0.25s;
  }
  @media only screen and (max-width: 1023px) {
    margin-right: 21px;
  }
  @media only screen and (max-width: 767px) {
    margin-right: 0;
  }
`;
export const SidebarMenuItemText = styled.div`
  margin-right: auto;
`;
