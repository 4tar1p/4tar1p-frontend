import { React } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import ProgressBar from 'components/ProgressBar';
import RadiusRect from 'components/RadiusRect';
import {
  clickedNextStep,
  decreaseCnt,
  increaseCnt,
  selectedSports,
} from 'features/buying/buying';
import { useNavigate } from 'react-router-dom';
import { regionList } from 'constants/constants';
import './styles/Buying.css';

const SportsCard = ({ sports }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectedSports(sports.id));
  };

  return (
    <div className="sports_card" onClick={handleClick}>
      <img className="sports_img" src={sports.imgSrc}></img>
      <div className="sports_name">{sports.name}</div>
      {sports.selected && <img src="/check_full.png"></img>}
    </div>
  );
};

const SelectedSports = ({ sports }) => {
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increaseCnt(sports.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseCnt(sports.id));
  };
  return (
    <div>
      <img src={sports.imgSrc}></img>
      <div>{sports.name}</div>
      <div>{sports.price}원</div>
      <img
        className="cnt_btn"
        src={'/minus.png'}
        onClick={handleDecrease}
      ></img>
      <div>{sports.cnt}</div>
      <img className="cnt_btn" src={'/add.png'} onClick={handleIncrease}></img>
    </div>
  );
};
const Buying = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { step, sportsList } = useAppSelector((state) => state.buying);

  const handleClick = () => {
    dispatch(clickedNextStep(step + 1));
  };

  const handlePay = () => {
    navigate('/paying');
  };

  return (
    <div className="page">
      <ProgressBar value={(100 * (step + 1)) / 3} />
      {step == 0 && (
        <>
          <div className="title">어디서 운동하실건가요?</div>
          {regionList.map((region, i) => {
            return <div key={i}>{region.name}</div>;
          })}

          <RadiusRect
            height="54px"
            backgroundColor="black"
            color="white"
            onClick={handleClick}
          >
            <div>다음</div>
          </RadiusRect>
        </>
      )}
      {step == 1 && (
        <>
          <div className="title">종목을 선택해주세요!</div>
          <div className="sports_grid">
            {sportsList.map((sports, i) => {
              return <SportsCard key={i} sports={sports} />;
            })}
          </div>

          <RadiusRect
            height="54px"
            backgroundColor="black"
            color="white"
            onClick={handleClick}
          >
            <div>다음</div>
          </RadiusRect>
        </>
      )}
      {step == 2 && (
        <>
          <div className="title">횟수를 선택해주세요!</div>
          {sportsList.map((sports, i) => {
            if (sports.selected) {
              return <SelectedSports key={i} sports={sportsList[i]} />;
            }
          })}
          <RadiusRect
            height="54px"
            backgroundColor="black"
            color="white"
            onClick={handlePay}
          >
            <div>결제</div>
          </RadiusRect>
        </>
      )}
    </div>
  );
};

export default Buying;
