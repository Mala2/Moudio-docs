import React, { useState } from 'react';
import Speakergrill from './Speakergrill';
import styles from './Speakergrill.module.css';
import speakergrills from './Speakergrill.json';

function SpeakergrillList({ onSelect }) {
  const [selectedGrill, setSelectedGrill] = useState(null);

  return (
    <div>
      {speakergrills.map(grill => (
        <div
          key={grill.id}
          className={styles.grill}
          onClick={() => setSelectedGrill(grill)}
        >
          <img src={grill.image} alt={grill.name} className={styles.grillImage} />
          <br />
          {grill.name}
        </div>
      ))}
      {selectedGrill && (
        <div>
          <h1>{selectedGrill.name}</h1>
          <button onClick={() => onSelect(selectedGrill)}>Select</button>
          <hr />

          {/* Add a div to contain the slot shape preview */}
          <div className={styles.grillPreviewContainer}>
            <div className={styles.grillPreview}>
              {selectedGrill.customizations.map(customization => (
                <div
                  key={customization.id}
                  className={`${styles[customization.shape]} ${styles[customization.quantity]}`}
                />
              ))}
            </div>
          </div>

          <Speakergrill grill={selectedGrill} onSave={updatedGrill => setSelectedGrill(updatedGrill)} />
        </div>
      )}
    </div>
  );
}

export default SpeakergrillList;
