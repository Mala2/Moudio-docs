import React, { useState } from 'react';
import SpeakergrillList from './SpeakergrillList';
import { Svg } from 'react-native-svg';

function SpeakergrillPage() {
  const [selectedGrill, setSelectedGrill] = useState(null);
  const [customizations, setCustomizations] = useState([]);

  const previewSvg = (
    <Svg width="300" height="300">
      {selectedGrill &&
        selectedGrill.customizations.map(customization => (
          <Circle
            cx={customization.x}
            cy={customization.y}
            r={customization.r}
            fill={customization.color}
            key={customization.id}
          />
        ))}
    </Svg>
  );

  return (
    <div>
      <h1>Customize Your Speaker Grill</h1>
      <p>Choose a speaker grill from the list below:</p>
      <SpeakergrillList
        selectedGrill={selectedGrill}
        setSelectedGrill={setSelectedGrill}
      />
      {selectedGrill && (
        <div>
          <h2>Customize Your Grill</h2>
          <p>
            You have selected the {selectedGrill.name} grill. Use the options
            below to customize your grill.
          </p>
          {selectedGrill.customizations.map(customization => (
            <div key={customization.id}>
              <h3>{customization.shape}</h3>
              <p>
                Select the number of {customization.shape}s on your grill:
              </p>
              <input
                type="range"
                min="1"
                max="10"
                value={customization.quantity}
                onChange={event => {
                  const updatedCustomizations = customizations.map(c => {
                    if (c.id === customization.id) {
                      return {
                        ...c,
                        quantity: parseInt(event.target.value, 10)
                      };
                    }
                    return c;
                  });
                  setCustomizations(updatedCustomizations);
                }}
              />
              <p>{customization.quantity}</p>
            </div>
          ))}
          <h2>Preview</h2>
          <p>
            The preview below shows what your speaker grill will look like with
            the current customizations applied.
          </p>
          {previewSvg}
        </div>
      )}
    </div>
  );
}

export default SpeakergrillPage;
