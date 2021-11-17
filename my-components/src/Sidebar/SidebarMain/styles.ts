import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
  padding: 0 20px 30px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`;
export const SidebarInner = styled.div`
  width: 215px;
  overflow: hidden;
  transition: width 0.25s;

  @media only screen and (max-width: 1023px) {
    width: 56px;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const SidebarLogo = styled.a`
  display: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 -20px;
  height: 0;

  img {
    /* width: 176px; */
  }

  @media only screen and (max-width: 1179px) {
    display: flex;
    img {
      /* width: 140px; */
    }
  }
  @media only screen and (max-width: 1023px) {
    height: 80px;
  }
`;
export const SidebarList = styled.div`
  margin-bottom: 20px;

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`;
export const SidebarProfile = styled.div`
  margin-top: 25px;

  @media only screen and (max-width: 1023px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const SidebarProfileDetails = styled.div`
  position: relative;
  display: none;
  padding: 20px 10px 33px;

  background: '#F7F7F7';
  border-radius: 12px;

  transition: padding 0.25s, background 0.25s;

  a {
  }

  @media only screen and (max-width: 1339px) {
    padding: 10px 10px 25px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 5px 0 17px;
    background: none;
  }
`;
export const SidebarProfileDetailsLink = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 56px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #808191;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;

  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-right: 16px;
    font-size: 0;
  }

  @media only screen and (max-width: 1339px) {
    div {
      width: 56px;
      height: 56px;
      margin-right: 0;
      -webkit-transition: margin 0.25s;
      -o-transition: margin 0.25s;
      transition: margin 0.25s;
    }
  }
  @media only screen and (max-width: 1023px) {
    div {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 767px) {
    div {
      margin-right: 0;
    }
  }
`;
export const SidebarProfileUser = styled.a`
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 20px;
  height: 62px;
  border-radius: 12px;
  color: #11142d;
  cursor: pointer;

  transition: background 0.25s;

  @media only screen and (max-width: 1339px) {
    transition: all 0.25s;
  }

  @media only screen and (max-width: 1023px) {
    padding: 8px;
  }
`;
