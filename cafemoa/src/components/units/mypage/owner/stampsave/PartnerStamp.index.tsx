import * as S from "./PartnerStamp.styles";
import HeroWrap from "../../../../commons/hero/HeroWrap.index";
import Text from "../../../../commons/text/01/Text01.index";
import Box01 from "../../../../commons/box/01/Box01.index";
import MessageModal from "../../../../commons/modal/message/MessageModal.index";
import { useForm } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";
import { Modal, Pagination } from "antd";
import Select01 from "../../../../commons/select/01/Select01.index";
import { useEffect, useRef, useState } from "react";
import { fetchCouponAddUsers } from "../../../../commons/hooks/queries/useFetchCouponAddUsers";
import { useCreateStamp } from "../../../../commons/hooks/mutations/useCreateStamp";
import Input01 from "../../../../commons/input/01/Input01.index";
import { Router, useRouter } from "next/router";

const SELECT_VALUES01 = [
  { label: "1개", value: 1 },
  { label: "2개", value: 2 },
  { label: "3개", value: 3 },
  { label: "4개", value: 4 },
  { label: "5개", value: 5 },
  { label: "6개", value: 6 },
  { label: "7개", value: 7 },
  { label: "8개", value: 8 },
  { label: "9개", value: 9 },
  { label: "10개", value: 10 },
];

interface IStampSaveData {
  password: string;
  phone: string;
  selectPhone: string;
}

export default function PartnerStamp() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [createStamp] = useCreateStamp();
  const { data, onRefetchUsers } = fetchCouponAddUsers();
  console.log(data);
  const [selectValue, setSelectValue] = useState<string | number>("");
  const { ModalComponent, setIsModalOpen, onClickIsModalOpen } = MessageModal();
  const { register, setValue, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      password: "",
      selectPhone: "",
    },
  });
  const searchValue = watch("phone");

  const onClickStamp = (phone: string) => () => {
    if (selectValue === "") {
      Modal.warning({
        content: "적립할 스탬프 갯수를 선택하세요!",
      });
      return;
    }
    setValue("selectPhone", phone);
    setIsModalOpen(true);
  };

  const onStampSave = () => {
    inputRef.current?.click();
  };

  const submitStampSave = (data: IStampSaveData) => {
    const { phone, ...value } = data;
    console.log(value);
    console.log(selectValue);
    try {
      const result = createStamp({
        variables: {
          createStampInput: {
            phone: value.selectPhone,
            cafeId: "fb8553fb-b45e-47cc-8815-872361cfad8e",
            count: selectValue,
            password: value.password,
          },
        },
      });
      setIsModalOpen(false);
      Modal.success({
        content: `스탬프가 ${selectValue}개 적립되었습니다!`,
        afterClose() {
          setSelectValue("");
          void router.push("/mypage/owner/stampsave");
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    onRefetchUsers(searchValue);
  }, [searchValue]);

  return (
    <>
      <ModalComponent
        title={`스탬프 적립`}
        text={`스탬프 적립을 위해서 \n 가맹주 비밀번호를 입력해주세요.`}
        status="write"
        buttons={
          <>
            <S.ModalButton color="lightBeige" onClick={onClickIsModalOpen}>
              <Text size="24" fontColor="gray">
                취소
              </Text>
            </S.ModalButton>
            <S.ModalButton type="submit" color="beige" onClick={onStampSave}>
              <Text size="24">확인</Text>
            </S.ModalButton>
          </>
        }
      >
        <S.ModalFromWrap onSubmit={handleSubmit(submitStampSave)}>
          <Input01
            type="text"
            textAlign="center"
            placeHolder="가맹주 비밀번호 입력"
            register={register("password")}
          />
          <input type="submit" hidden ref={inputRef} />
        </S.ModalFromWrap>
      </ModalComponent>

      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="32" weight="500">
              스탬프를 적립해보세요!
            </Text>
          </S.TitleWrapper>
          <S.StampWrapper>
            <Box01 styles={{ padding: "40px 50px" }}>
              <S.StampContainer>
                <S.UserWrapper>
                  <Input01
                    styles={{ width: "100%" }}
                    type="text"
                    placeHolder="핸드폰번호뒷자리"
                    register={register("phone")}
                  >
                    <S.InputIconWrap>
                      <SearchOutlined />
                    </S.InputIconWrap>
                  </Input01>
                  <S.StampSelect>
                    <Select01
                      defaultText="적립스탬프 갯수"
                      selectValue={SELECT_VALUES01}
                      setSelectValue={setSelectValue}
                    />
                  </S.StampSelect>
                </S.UserWrapper>
                <S.StampTable>
                  <ul>
                    <S.Name>이름</S.Name>
                    <S.Name>닉네임</S.Name>
                    <S.PhoneEnd>전화번호 뒷자리</S.PhoneEnd>
                    <S.SaveStamp></S.SaveStamp>
                  </ul>
                  {data?.fetchCouponAddUsers.map((el) => (
                    <ul key={el.id}>
                      <S.Name>{el.name}</S.Name>
                      <S.Name>{el.nickname}</S.Name>
                      <S.PhoneEnd>{el.phone.slice(7)}</S.PhoneEnd>
                      <S.SaveStamp>
                        <S.SaveButton
                          color="beige"
                          type="button"
                          onClick={onClickStamp(el.phone)}
                        >
                          <Text size="14">적립 </Text>
                        </S.SaveButton>
                      </S.SaveStamp>
                    </ul>
                  ))}
                </S.StampTable>

                <S.PageWrapper>
                  <Pagination defaultCurrent={1} total={50} />
                </S.PageWrapper>
              </S.StampContainer>
            </Box01>
          </S.StampWrapper>
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
