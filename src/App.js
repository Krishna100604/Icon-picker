import React, { useState } from 'react';
import IconPicker from './Components/IconPicker';
import * as Icons from 'feather-icons';
import './App.css';

const App = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
    setIsPickerOpen(false);
  };

  return (
    <div className="app">
      <div 
        className="icon-display" 
        onClick={() => setIsPickerOpen(true)}
        style={{ width: '100px', height: '100px', border: '1px solid #ccc', cursor: 'pointer' }}
      > 
        {selectedIcon && (
          <div 
            dangerouslySetInnerHTML={{ __html: Icons.icons[selectedIcon].toSvg() }}
          />
        )}
      </div>
      {isPickerOpen && (
        <IconPicker 
          rowsInOnePage={5} 
          columnsInOnePage={5} 
          iconHeight={50} 
          iconWidth={50} 
          pickerHeight="500px" 
          pickerWidth="500px"
          onSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;
