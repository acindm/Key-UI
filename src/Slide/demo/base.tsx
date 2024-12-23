import React, { FC } from 'react';
import Slide from '../slide';

const App: FC = () => {
  return (
    <div className="App">
      <Slide duration={3} dots={true}>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div className="slide-item">
          <img
            src="https://via.placeholder.com/600x300?text=Slide+3"
            alt="Slide 3"
          />
        </div>
      </Slide>
    </div>
  );
};

export default App;
