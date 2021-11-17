import styled from 'styled-components';

export const Container = styled.div`
  &:not(:last-child) {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 30px;

    &::before {
      content: '';
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      height: 1px;
      background: #f0f3f6;
    }
  }

  @media only screen and (max-width: 1179px) {
    &:not(:last-child)::before {
      transition: all 0.25s;
    }
  }

  @media only screen and (max-width: 1023px) {
    &:not(:last-child)::before {
      left: 20px;
      right: 20px;
    }

    span {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    padding-bottom: 15px;

    &:not(:last-child)::before {
      left: 20px;
      right: 20px;
    }
  }
`;
export const SidebarCaption = styled.div`
  margin-bottom: 16px;
  padding-left: 20px;
  color: #808191;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  @media only screen and (max-width: 1179px) {
    white-space: nowrap;
    transition: padding 0.25s;
  }
  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 20px;
    text-align: left;
  }
`;
export const SidebarMenu = styled.div``;
