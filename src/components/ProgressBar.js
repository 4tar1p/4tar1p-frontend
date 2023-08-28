import { React } from 'react';
import './styles/ProgressBar.css';

const Progress = ({ value }) => {
  return <div className="progress" style={{ width: value + '%' }}></div>;
};

const ProgressBar = ({ value }) => {
  return (
    <div className="progress_bar">
      <Progress value={value} />
    </div>
  );
};

export default ProgressBar;
