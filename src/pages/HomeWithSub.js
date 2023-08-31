import { React } from 'react';
import './styles/Home.css';
import { useNavigate } from 'react-router-dom';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';
import CurationCard from 'components/CurationCard';

const HomeWithSub = () => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/reservation');
  };

  return (
    <div className="page">
      <Header title="이달의운세" />
      <div className="home_wrapper">
        <div className="home_title">{`유진님!\n저와 같이 운동해요 😊`}</div>
        <RadiusRect
          backgroundColor="#6adfa0"
          color="white"
          width="100%"
          height={'72px'}
          fontSize={'24px'}
          fontWeight={500}
          onClick={handleReservation}
        >
          <div>예약 하기</div>
        </RadiusRect>
        <div className="home_title">이런 헬스 컨텐츠는 어때요? 🏋️</div>
        {/* 헬스 컨텐츠 */}
        <div className="health_contents_wrapper">
          <CurationCard
            size="m"
            title={`운동 후 섭취하면 좋은 과일 알아보기`}
            imgSrc={'/healthy_2_01.png'}
            bgColor="#EFD5D5"
          />
          <CurationCard
            size="m"
            title={`요가로 거북목 치료하기`}
            imgSrc={'/healthy_2_02.png'}
            bgColor="#D9EFD5"
          />
          <CurationCard
            size="m"
            title={`운동 후 비타민 섭취가 필수인 이유`}
            imgSrc={'/healthy_2_03.png'}
            bgColor="#D5E3EF"
          />
          <CurationCard
            size="m"
            title={`화창한 날엔 야외로 나가요!\n야외 요가스팟 추천`}
            imgSrc={'/healthy_2_04.png'}
            bgColor="#CFBA92"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeWithSub;
