import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

function ColorBoxApp() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="App">
      <NewBoxForm addBox={addBox} />
      {boxes.length > 0 && (
        <div className="color-box-container">
          {boxes.map((box) => (
            <Box
              key={box.id}
              id={box.id}
              width={box.width}
              height={box.height}
              backgroundColor={box.backgroundColor}
              removeBox={removeBox}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorBoxApp;
