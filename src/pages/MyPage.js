import { React } from 'react';
import { test, getSubscriptionRervation } from 'api/api';
import './styles/MyPage.css';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import RadiusRect from 'components/RadiusRect';

const History = () => {
  return (
    <div>
      <RadiusRect width="100%">
        <div className="history_wrapper">
          <div className="history_img_wrapper">
            <img className="history_img" src="sports/tennis.png"></img>
            <div>테니스</div>
          </div>
          <div>
            <div style={{ fontSize: '17px' }}>다니아믹테니스 북가좌점</div>
            <div style={{ fontSize: '15px' }}>2023.09.03 19:30</div>
            <div style={{ color: 'grey', fontSize: '12px' }}>
              서울시 서대문구 증가로12가길 78
            </div>
          </div>
        </div>
      </RadiusRect>
      <div style={{ margin: '10px 0' }} />
      <RadiusRect width="100%">
        <div className="history_wrapper">
          <div className="history_img_wrapper">
            <img className="history_img" src="sports/swimming.png"></img>
            <div>수영</div>
          </div>
          <div>
            <div style={{ fontSize: '17px' }}>상암동 스포렉스</div>
            <div style={{ fontSize: '15px' }}>2023.08.31 18:30</div>
            <div style={{ color: 'grey', fontSize: '12px' }}>
              서울시 마포구 월드컵북로416
            </div>
          </div>
          <div></div>
        </div>
      </RadiusRect>
    </div>
  );
};
const MyPage = () => {
  return (
    <div className="page">
      <Header title="마이페이지" />
      <div className="mypage_wrapper">
        <div className="home_title">{`유진님!\n이번달 총 2만원 할인 혜택을 받으셨네요!`}</div>
        <RadiusRect
          backgroundColor="#609966"
          color="white"
          width="100%"
          fontSize={'24px'}
          fontWeight={500}
        >
          <div style={{ margin: '10px auto 10px 10px', width: '100%' }}>
            <div style={{ fontSize: '23px', marginBottom: '10px' }}>
              내맘대로 구독팩
            </div>
            <div style={{ fontSize: '15px', marginBottom: '4px' }}>
              홍대/합정/마포
            </div>
            <div style={{ fontSize: '17px', marginBottom: '10px' }}>
              2023.08.31 ~ 2023.09.31
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <div style={{ fontSize: '17px', textAlign: 'center' }}>
                예약가능 8{' '}
              </div>
              <div style={{ fontSize: '17px', textAlign: 'center' }}>
                잔여 9 / 10{' '}
              </div>
            </div>
          </div>
        </RadiusRect>

        <div className="home_title">예약 현황</div>
        {<History></History>}
      </div>
    </div>
  );
};

export default MyPage;
