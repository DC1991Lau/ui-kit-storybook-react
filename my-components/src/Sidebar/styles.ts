import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  flex-shrink: 0;
  width: 256px;
  height: 100vh;
  padding: 140px 0 72px;
  background: #fff;
  border-right: 1px solid #e4e4e4;

  @media only screen and (max-width: 1179px) {
    padding-top: 96px;
    overflow: hidden;
    transition: width 0.25s transform 0.25s;
  }
  @media only screen and (max-width: 1023px) {
    z-index:10;
    width: 96px;
  }
  @media only screen and (max-width: 767px) {
    width: 256px;
    transform: translateX(-100%)
  }
`;
