import { React } from 'react';
import './styles/Home.css';
import { subPackList } from 'constants/constants';
import { useNavigate } from 'react-router-dom';

const HomeWithoutSub = () => {
  const navigate = useNavigate();

  const handleBuying = () => {
    navigate('/buying');
  };

  return (
    <div className="page home">
      
        <p className='homeTitle'>유진님!</p>
        <p className='homeTitle'>저와 같이 운동해요</p>
      

      <button className='mainButton' onClick={handleBuying}>구독 시작하기</button>
      
      <p style={{ textAlign: 'center', fontWeight: 'bold'}}>이런 구독팩은 어때요?</p>
      
      {/* 구독팩 */}
      <div className="contents_box_wrapper">
      {subPackList.map((subPack, i) => {
            return (
              <div key={i} className='contents_box' style={{margin: '10px'}}>
                  <div style={{fontWeight: 'bold', margin: '10px'}}>{subPack.name}</div>
                  {subPack.attributes.map((attr, j) => {
                    return (<p style={{margin: '5%'}} key={j}>{attr.exercise}</p>)
                  })}
              </div>);
          })}
      </div>
    </div>
  );
};
export default HomeWithoutSub;
