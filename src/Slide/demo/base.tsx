import React, { FC } from 'react';
import Slide from '../slide';

const App: FC = () => {
  return (
    <div className="App">
      <Slide duration={2} dots={true}>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide1"
            alt="Slide 1"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide2"
            alt="Slide 2"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide3"
            alt="Slide 3"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
      </Slide>
    </div>
  );
};

export default App;
