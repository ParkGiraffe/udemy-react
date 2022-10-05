import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
          // react에서 동적 스타일을 구현하기 위해선 {}안에 style 객체를 넣어줘야 한다. 객체를 넣어주다보니 이중 중괄호로 보인다.
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}