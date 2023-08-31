import { React } from 'react';
import { test, getSubscriptionRervation } from 'api/api';
import './styles/MyPage.css';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import RadiusRect from 'components/RadiusRect';

const MyPage = () => {
  return (
    <div className="page">
      <Header title="마이페이지" />
      <div className="mypage_wrapper">
        <div className="home_title">{`유진님!\n지금까지 총 3.5만원 할인 받으셨네요!`}</div>
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
              2023.08.20 ~ 2023.09.20
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginBottom: '8px'
              }}
            >
              <div style={{ fontSize: '17px', textAlign: 'center' }}>
                예약가능 8{' '}
              </div>
              <div style={{ fontSize: '17px', textAlign: 'center' }}>
                잔여 8 / 10{' '}
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr'
              }}
            >
              <div style={{ fontSize: '15px', textAlign: 'center' }}>
                테니스 1/2
              </div>
              <div style={{ fontSize: '15px', textAlign: 'center' }}>
                복싱 1/3
              </div>     
              <div style={{ fontSize: '15px', textAlign: 'center' }}>
                수영 1/5
              </div>        
            </div>
          </div>
        </RadiusRect>

        <div className="home_title">다가오는 예약</div>
        <RadiusRect width="100%">
          <div className="history_wrapper">
            <div className="history_img_wrapper">
              <img className="history_img" src="sports/tennis.png"></img>
              <div>테니스</div>
            </div>
            <div>
              <div style={{ fontSize: '17px' }}>다이나믹테니스 북가좌점</div>
              <div style={{ fontSize: '15px' }}>2023.09.03 19:30</div>
              <div style={{ color: 'grey', fontSize: '12px' }}>
                서울시 서대문구 증가로12가길 78
              </div>
            </div>
          </div>
        </RadiusRect>
        <div className="home_title">이용 내역</div>
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
        <div style={{ margin: '8px' }} />
        <RadiusRect width="100%">
          <div className="history_wrapper">
            <div className="history_img_wrapper">
              <img className="history_img" src="sports/boxing.png"></img>
              <div>복싱</div>
            </div>
            <div>
              <div style={{ fontSize: '17px' }}>버닝복싱짐</div>
              <div style={{ fontSize: '15px' }}>2023.08.25 20:30</div>
              <div style={{ color: 'grey', fontSize: '12px' }}>
                서울시 마포구 합정로13
              </div>
            </div>
            <div></div>
          </div>
        </RadiusRect>
      </div>
    </div>
  );
};

export default MyPage;
