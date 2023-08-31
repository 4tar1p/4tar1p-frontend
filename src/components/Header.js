import { React } from 'react';
import './styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoMyPage = () => {
    navigate('/mypage');
  };
  const { pathname } = useLocation();

  return (
    <>
      <div className="header">
        {(pathname != '/' && pathname != '/homewithsub') ? (
          <div className="header_left">
            <img
              className="header_btn"
              src="/left_arrow.png"
              onClick={handleGoBack}
            ></img>
          </div>
        ) : (
          <div></div>
        )}
        <div className="header_center">
          <div className="header_title">{title}</div>
        </div>
        {pathname != '/mypage' && (
          <div className="header_right">
            <img
              className="header_btn"
              src="/user.png"
              onClick={handleGoMyPage}
            ></img>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
