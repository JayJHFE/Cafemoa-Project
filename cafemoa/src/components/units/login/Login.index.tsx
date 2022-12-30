import { useState } from "react";
import { useForm } from "react-hook-form";
import Input02 from "../../common/input/02/Input02.index";
import Text from "../../common/text/01/Text01.index";
import * as S from "./Login.styles";

export default function Login() {
  const [bounce, setBounce] = useState("right");

  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(ProductSchema),
    mode: "onChange",
  });

  const onCLickPartner = (dir) => (event) => {
    setBounce(dir);
  };
  // console.log(bounce);

  // 일반회원 로그인
  const userLogin = () => {};

  // 파트너사 로그인
  const parterLogin = () => {};

  // 비밀번호 찾기
  const onClickFindPw = () => {};

  return (
    <S.Wrapper>
      <S.ContainerWrapper>
        <S.LoginContainer>
          <S.OptionsContainer>
            <S.OptionsRegister>
              <div>
                <Text size="28" weight="300">
                  카페모아 <br />
                  파트너이신가요?
                </Text>
              </div>
              <S.OptionsDetail>
                <Text size="16" weight="300">
                  카페모아와 함께하는 파트너사라면 아래의 버튼을 눌러 로그인
                  하세요.
                </Text>
              </S.OptionsDetail>
              <div>
                <S.OptionsButton onClick={onCLickPartner("left")}>
                  파트너사 로그인
                </S.OptionsButton>
              </div>
            </S.OptionsRegister>

            <S.OptionsRegister>
              <div>
                <Text size="28" weight="300">
                  카페모아 <br />
                  고객이신가요?
                </Text>
              </div>
              <S.OptionsDetail>
                <Text size="16" weight="300">
                  카페모아를 이용하는 고객이라면 아래의 버튼을 눌러 로그인
                  하세요.
                </Text>
              </S.OptionsDetail>
              <div>
                <S.OptionsButton onClick={onCLickPartner("right")}>
                  일반회원 로그인
                </S.OptionsButton>
              </div>
            </S.OptionsRegister>
          </S.OptionsContainer>

          <S.FormsContainer dir={bounce}>
            <S.RegistForms>
              <S.FormTitle>
                <Text size="32" weight="500">
                  {bounce === "left" ? "파트너사 로그인" : "일반회원 로그인"}
                </Text>
              </S.FormTitle>
              <form
                onSubmit={
                  bounce === "left"
                    ? handleSubmit(parterLogin)
                    : handleSubmit(userLogin)
                }
              >
                <div>
                  <S.FormsField>
                    <Input02 type="text" {...register("email")} />
                  </S.FormsField>
                  <S.FormsField>
                    <Input02 type="password" {...register("password")} />
                  </S.FormsField>
                </div>
                <S.FormsButtonsWrapper>
                  <S.FindPassword type="button" onClick={onClickFindPw}>
                    비밀번호를 잊으셨나요?
                  </S.FindPassword>
                  <S.LoginButton type="submit">로그인</S.LoginButton>
                </S.FormsButtonsWrapper>
              </form>
            </S.RegistForms>
          </S.FormsContainer>
        </S.LoginContainer>
      </S.ContainerWrapper>
    </S.Wrapper>
  );
}