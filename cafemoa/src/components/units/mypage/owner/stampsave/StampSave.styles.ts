import styled from "@emotion/styled";
import { Tabs } from "antd";
import { DEFAULT_COLOR } from "../../../../../commons/default/default";
import {
  ContainerWrap,
  MediumBtn,
  SmallBtn,
} from "../../../../../commons/styles/commonStyles";

export const SaveButton = styled(SmallBtn)``;

export const ContainerWrapper = styled(ContainerWrap)`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
`;

export const ModalButton = styled(MediumBtn)``;

export const ModalFromWrap = styled.form`
  padding-top: 32px;
`;

export const StampButton = styled(MediumBtn)`
  border-radius: 10px;
  background-color: #f3e6d8;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 350px);
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 56px;
`;

export const StampWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;

export const StampContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;
  max-width: 500px;
`;

export const StampSelect = styled.div`
  /* display: flex;
  align-items: center; */
  margin-left: 10px;
  width: 100%;
`;

export const InputIconWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    font-size: 24px;
  }
`;

export const StampTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;

  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid ${DEFAULT_COLOR.black};
    margin-bottom: 0em;
    padding: 4px 0px;
  }
`;

export const Name = styled.li`
  width: 30%;
`;

export const PhoneEnd = styled.li`
  width: 40%;
`;

export const SaveStamp = styled.li`
  width: 30%;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;

export const QrReader = styled.div`
  margin-bottom: 30px;
`;

export const QrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
`;

export const QrUserWrapper = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
`;

export const QrSaveStamp = styled.div`
  width: 30%;
  margin-left: 10px;
`;

export const TapWrap = styled(Tabs)`
  .ant-tabs-nav::before {
    display: none;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${DEFAULT_COLOR.mainColor};
    transform: scale(1);
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 16px;
  }

  .ant-tabs-tab-btn {
    font-size: 20px;
    color: ${DEFAULT_COLOR.gray};
    transform: scale(0.8);
  }

  .ant-tabs-ink-bar {
    background: none;
  }

  .ant-tabs-content {
    padding-top: 56px;
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }
`;