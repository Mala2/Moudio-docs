import React, { useState } from 'react';
import styles from './Speakergrill.module.css';

function Speakergrill({ grill, onSave }) {
  const [customizations, setCustomizations] = useState(grill.customizations);

  function updateCustomization(id, shape, quantity) {
    const updatedCustomizations = customizations.map(customization => {
      if (customization.id === id) {
        return {
          ...customization,
          shape,
          quantity
        };
      }
      return customization;
    });
    setCustomizations(updatedCustomizations);
  }

  return (
    <div>
      {customizations.map(customization => (
        <div key={customization.id} className={styles.customization}>
          {/* Add a dropdown to choose the shape of the customization */}
          <select
            value={customization.shape}
            onChange={event => updateCustomization(customization.id, event.target.value, customization.quantity)}
          >
            <option value="circle">Circle</option>
            <option value="pentagon">Pentagon</option>
            <option value="hexagon">Hexagon</option>
            <option value="heptagon">Heptagon</option>
            <option value="octagon">Octagon</option>
            <option value="nonagon">Nonagon</option>
            <option value="decagon">Decagon</option>
          </select>

          {/* Add a slider to choose the quantity of the customization */}
          <input
            type="range"
            min={1}
            max={10}
            value={customization.quantity}
            onChange={event => updateCustomization(customization.id, customization.shape, event.target.value)}
          />
          {customization.quantity}
        </div>
      ))}

      {/* Add a save button to update the grill with the customizations */}
      <button
        onClick={() => onSave({
          ...grill,
          customizations
        })}
      >
        Save
      </button>
    </div>
  );
}

export default Speakergrill;
