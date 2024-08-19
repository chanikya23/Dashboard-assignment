// src/components/CWPPDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';

const Cwpp = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const addWidget = (category) => {
    const widgetName = prompt("Enter Widget Name:");
    if (widgetName && widgetText) {
      const newWidget = {
        id: new Date().getTime(),
        name: widgetName
      };
      dispatch({ type: 'ADD_WIDGET', payload: { category, widget: newWidget } });
    }
  };
  // Filter for CWPP Dashboard category
  const cwppCategory = categories.find(cat => cat.category === 'CWPP Dashboard');

  if (!cwppCategory) return null; // Return null if the category doesn't exist

  return (
    <div>
      <h3>{cwppCategory.category}</h3>
      <button onClick={() => addWidget(cwppCategory.category)}>+ Add Widget</button>
      <div className="widget-container">
        {cwppCategory.widgets.map(widget => (
          <Widget key={widget.id} category={cwppCategory.category} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default Cwpp;
