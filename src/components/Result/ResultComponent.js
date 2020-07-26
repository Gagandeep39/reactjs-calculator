import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ResultComponent = (props) => {
  return (
    <div className='container result'>
      {props.result}
    </div>
  );
};

export default ResultComponent;
