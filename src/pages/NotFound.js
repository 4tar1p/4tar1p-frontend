import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NotFound.css';
import RadiusRect from 'components/RadiusRect';
import GoBackBar from 'components/GoBackBar';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="page" style={{ minHeight: '720px', marginBottom: '102px' }}>
      NotFound
      <GoBackBar />
      <img className="not_found_img" src="/gear_perspective.png"></img>
      <div style={{ margin: '70px auto 0 auto' }}>
        <RadiusRect
          height="80px"
          backgroundColor="black"
          color="white"
          onClick={handleClick}
        >
          <div>홈으로 돌아가기</div>
        </RadiusRect>
      </div>
      {/* <GoBackBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img className="not_found_img" src="/gear_perspective.png"></img>
        <div style={{ marginBottom: '40px' }}>
          <Subject
            subject=""
            description={`서비스 이용에 \n 불편을 드려 죄송합니다`}
            textAlign="center"
          ></Subject>
        </div>
        <div className="not_found_text">{`일시적인 시스템 오류로 \n 화면을 불러오지 못하였습니다`}</div>
        <div className="not_found_text">{`아래 ‘홈으로 돌아가기’ 버튼을 눌러 \n 재시도 부탁드립니다`}</div>
        <div style={{ margin: '70px auto 0 auto' }}>
          <RadiusRect
            height="80px"
            backgroundColor="black"
            color="white"
            onClick={handleClick}
          >
            <div>홈으로 돌아가기</div>
          </RadiusRect>
        </div>
      </div> */}
    </div>
  );
};

export default NotFound;
