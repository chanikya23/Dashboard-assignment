// src/store.js
import { createStore } from 'redux';

const initialState = {
  categories: require('./dashboardData.json')
};

function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.category === action.payload.category
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.category === action.payload.category
            ? {
                ...category,
                widgets: category.widgets.filter(
                  widget => widget.id !== action.payload.widgetId
                )
              }
            : category
        )
      };
    default:
      return state;
  }
}

const store = createStore(widgetReducer);

export default store;
