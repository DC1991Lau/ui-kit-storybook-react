import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;

  @media only screen and (max-width: 1179px) {
    justify-content: stretch;
    height: 96px;
    padding-left: 40px;

    transition: height 0.25s;
  }

  @media only screen and (max-width: 1023px) {
    padding: 0;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 767px) {
    padding-left: 40px;
    border-bottom: 1px solid #e4e4e4;
  }
`;

export const CloseSidebarButton = styled.button`
  position: relative;
  top: -3px;
  display: none;
  margin-right: 25px;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    display: inline-flex;
  }
`;

export const SidebarLogo = styled.a`
  img {
    width: 176px;
  }

  @media only screen and (max-width: 1179px) {
    img {
      width: 140px;
    }
    transition: width 0.2s;
  }

  @media only screen and (max-width: 1023px) {
    opacity: 0;
  }

  @media only screen and (max-width: 767px) {
    opacity: 1;
  }
`;

export const OpenSidebarButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 96px;
  height: 96px;
  padding: 20px;
  border-bottom: 1px solid transparent;

  @media only screen and (max-width: 1179px) {
    display: inline-block;
    align-items: center;
  }

  @media only screen and (max-width: 1023px) {
    border-color: #e4e4e4;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
