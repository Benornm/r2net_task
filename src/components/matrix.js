import React from 'react';
import './matrix.css';

export default class Matrix extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      redQubePressed: false
    }
  }

  clacArray(){
    const originalArray = [3,5,1,9,2,6,7,4];
    const conditionsArr = [];
    let sum = 0;

    console.log('Original Array:', originalArray);

    console.log('Numbers that are bigger than 4 and smaller than 8');
    originalArray.forEach( num => {
      if( num > 4 && num < 8 ){
        console.log(num);
        conditionsArr.push(num);
      }
    });

    console.log('Numbers that are bigger than 4 and smaller than 8, multiplied by 10');
    conditionsArr.forEach( num => {
      let multipliedNum = num*10;
      console.log(multipliedNum);
      sum += multipliedNum;
    });

    console.log('Sum of the numbers that are bigger than 4 and smaller than 8, multiplied by 10');
    console.log(sum);
  }

    render() {
    const { redQubePressed } = this.state;

      return (
        <div>

          <div className="matrix" onClick={() => alert('You need to press the red qube')}>

            <div className="matrixLine">
              <div className="qube green centered"/>
            </div>

            <div className="matrixLine">
              <div className="qube green floatedLeft"/>
              <div className="qube green floatedLeft"/>
              <div className="qube green floatedLeft"/>
            </div>

            <div className="matrixLine">
              <div className="qube green"/>
            </div>

            <div className="matrixLine"/>

            <div className="matrixLine">
              <div className="qube green centered"/>
            </div>

            <div className="matrixLine">
              <div>
                {redQubePressed ? 'On' : 'Off'}
              </div>
            </div>

            <div className="matrixLine"/>

            <div className="matrixLine">
              <div className={'qube red'}
                   style={{
                     transform: `translate(0px,${redQubePressed ? '-50px' : '0px'})`,
                     transition: 'transform 1000ms ease-in-out',
                   }}
                   onClick={(e) => {
                     e.stopPropagation();
                     this.setState({redQubePressed: !redQubePressed});
                   }}/>
            </div>
          </div>

          <button className="button" onClick={() => this.clacArray()}>
            Activate Task 2
          </button>

        </div>
      );
    }
}