import React from 'react';
import './Keypad.component.css';
import 'bootstrap/dist/css/bootstrap.css';

const KeypadComponent = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <button
          name='C'
          className='col-9'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          C
        </button>
        <button
          name='CE'
          className='col-3 formula'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          CE
        </button>
      </div>

      <div className='row'>
        <button
          name='1'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          1
        </button>
        <button
          name='2'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          2
        </button>
        <button
          name='3'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          3
        </button>
        <button
          name='+'
          className='col formula'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          +
        </button>
      </div>

      <div className='row'>
        <button
          name='4'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          4
        </button>
        <button
          name='5'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          5
        </button>
        <button
          name='6'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          6
        </button>
        <button
          name='-'
          className='col formula'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          -
        </button>
      </div>

      <div className='row'>
        <button
          name='7'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          7
        </button>
        <button
          name='8'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          8
        </button>
        <button
          name='9'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          9
        </button>
        <button
          name='*'
          className='col formula'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          x
        </button>
      </div>

      <div className='row'>
        <button
          name='.'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          .
        </button>
        <button
          name='0'
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          0
        </button>
        <button
          name='='
          className='col'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          =
        </button>
        <button
          name='/'
          className='col formula'
          onClick={(event) => props.buttonClick(event.target.name)}
        >
          ÷
        </button>
      </div>
    </div>
  );
};

export default KeypadComponent;
