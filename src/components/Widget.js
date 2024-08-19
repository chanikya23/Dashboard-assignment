
import React from 'react';
import { useDispatch } from 'react-redux';
import './Widget.css';

const Widget = ({ category, widget }) => {
  const dispatch = useDispatch();

  const removeWidget = () => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { category, widgetId: widget.id } });
  };

  return (
    <div className="widget-card">
      <img src={widget.image} alt={widget.name} className="widget-image" />
      <div className="widget-content">
        <h4>{widget.name}</h4>
        <p>{widget.text}</p>
      </div>
      <span className="remove-icon" onClick={removeWidget}>❌</span>
    </div>
  );
};

export default Widget;


