import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQuery";

export const CardImgWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;
export const CardInfoWrap = styled.div`
  padding: 24px 24px 48px;
  ${mq.MobileL} {
    padding: 16px 16px 24px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 24px;
  overflow: hidden;
`;
