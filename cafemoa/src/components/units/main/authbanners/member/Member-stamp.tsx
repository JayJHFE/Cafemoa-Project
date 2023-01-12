import Slider, { Settings } from "react-slick";
import Box01 from "../../../../commons/box/01/Box01.index";
import Text from "../../../../commons/text/01/Text01.index";
import { TfiStamp } from "react-icons/tfi";
import * as S from "./Member.styles";
import Link from "next/link";
import { GetStamp } from "../../../../../commons/libraries/utill";
import { useFetchUserStamps } from "../../../../commons/hooks/queries/useFetchUserStamps";
import Link01 from "../../../../commons/link/01/Link01.index";

interface IMemberStampProps {
  infoUserId?: string;
}

const SETTINGS: Settings = {
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  speed: 500,
};

export default function MemberStamp(props: IMemberStampProps) {
  const { data } = useFetchUserStamps();
  return (
    <S.SlideWrap>
      <div style={{ textAlign: "right", marginBottom: "8px" }}>
        <Link01
          href={`mypage/user/${String(props.infoUserId)}/mystamp`}
          size="sm"
        >
          <Text size="14">자세히 보기</Text>
        </Link01>
      </div>
      <Slider {...SETTINGS}>
        {data?.fetchUserStamps?.map((el, idx) => (
          <S.SlideItem key={idx}>
            <Box01 styles={{ padding: "16px", display: "flex" }}>
              <S.BoxIconWrap>
                <TfiStamp />
              </S.BoxIconWrap>
              <S.BoxTextWrap>
                <S.CafeName>{el.cafeInform.owner.brandName}</S.CafeName>
                <div>{GetStamp(el.count)} / 10</div>
              </S.BoxTextWrap>
            </Box01>
          </S.SlideItem>
        ))}
      </Slider>
    </S.SlideWrap>
  );
}
