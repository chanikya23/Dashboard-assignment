// src/components/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import './Dashboard.css';

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const addWidget = (category) => {
    const widgetName = prompt("Enter Widget Name:");
    const widgetText = prompt("Enter Widget Text:");
    if (widgetName && widgetText) {
      const newWidget = {
        id: new Date().getTime(),
        name: widgetName,
        text: widgetText
      };
      dispatch({ type: 'ADD_WIDGET', payload: { category, widget: newWidget } });
    }
  };

  return (
    <div className='Dashboard'>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <button onClick={() => addWidget(category.category)}>+ Add Widget</button>
          <div className="widget-container">
            {category.widgets.map(widget => (
              <Widget key={widget.id} category={category.category} widget={widget} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
