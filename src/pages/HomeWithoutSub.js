import { React } from 'react';
import './styles/Home.css';
import { subPackList } from 'constants/constants';
import { useNavigate } from 'react-router-dom';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';
import CurationCard from 'components/CurationCard';

const HomeWithoutSub = () => {
  const navigate = useNavigate();

  const handleBuying = () => {
    navigate('/buying');
  };

  return (
    <div className="page">
      <Header title="이달의운세" />
      <div className="home_wrapper">
        <div className="home_title">{`유진님!\n저와 같이 운동해요 😊`}</div>
        <RadiusRect
          backgroundColor="#609966"
          color="white"
          width="100%"
          height={'72px'}
          fontSize={'24px'}
          fontWeight={500}
          onClick={handleBuying}
        >
          <div>구독 하기</div>
        </RadiusRect>
        <div className="home_title">이런 구독팩은 어때요?</div>
        {/* 구독팩 */}
        <div className="contents_box_wrapper">
          {subPackList.map((subPack, i) => {
            return (
              <CurationCard
                key={i}
                size="s"
                title={subPack.name}
                imgSrc={`/subpack_${i + 1}.png`}
              >
                <div></div>
                
                <div key={i} className="sub_pack_detail_sports_name">
                  {subPack.description}
                </div>
              </CurationCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomeWithoutSub;
