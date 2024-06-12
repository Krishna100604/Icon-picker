import React, { useState } from 'react';
import * as Icons from 'feather-icons';
import './IconPicker.css';

const IconPicker = ({ rowsInOnePage, columnsInOnePage, iconHeight, iconWidth, pickerHeight = '500px', pickerWidth = '500px', onSelect }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const icons = Object.keys(Icons.icons);

  const totalIconsPerPage = rowsInOnePage * columnsInOnePage;
  const startIndex = currentPage * totalIconsPerPage;
  const endIndex = startIndex + totalIconsPerPage;
  const paginatedIcons = icons.slice(startIndex, endIndex);

  const totalPages = Math.ceil(icons.length / totalIconsPerPage);

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-grid" style={{ display: 'grid', gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`, gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)` }}>
        {paginatedIcons.map((iconName) => (
          <div key={iconName} className="icon-item" onClick={() => onSelect(iconName)}>
            <div dangerouslySetInnerHTML={{ __html: Icons.icons[iconName].toSvg({ width: iconWidth, height: iconHeight }) }} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        {currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default IconPicker;
