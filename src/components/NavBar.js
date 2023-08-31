import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NavBar.css';

const NavBtn = ({ description, selected, onClick }) => {
  return (
    <div className="nav_btn" onClick={onClick}>
      <div className="nav_selected">{description}</div>
    </div>
  );
};

const NavBar = ({ menuIdx }) => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === 'buying') navigate('/buyingcompletion');
    else if (type === 'reserve') navigate('/reservationcompletion');
    else if (type === 'mypage') navigate('/mypage');
  };

  return (
    <div className="navbar">
      {menuIdx === 0 ? (
        <NavBtn
          description="이용권 구매"
          onClick={() => handleClick('buying')}
        />
      ) : (
        <NavBtn
          description="이용권 구매"
          onClick={() => handleClick('buying')}
        />
      )}
      {menuIdx === 1 ? (
        <NavBtn
          description="예약"
          onClick={() => handleClick('reserve')}
        />
      ) : (
        <NavBtn
          description="예약"
          onClick={() => handleClick('reserve')}
        />
      )}
      {menuIdx === 2 ? (
        <NavBtn
          description="마이페이지"
          onClick={() => handleClick('mypage')}
        />
      ) : (
        <NavBtn
          description="마이페이지"
          onClick={() => handleClick('mypage')}
        />
      )}
    </div>
  );
};

export default NavBar;
