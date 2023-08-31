import { React } from 'react';
import './styles/Home.css';
import NavBar from 'components/NavBar';

const Home = () => {
  return (
    <div className="homeContainer">
      <h2 className="homeTitle">오늘의 운동은 뭐야?</h2>
      <NavBar className="navBarPosition"/>
    </div>
  );
};
export default Home;
