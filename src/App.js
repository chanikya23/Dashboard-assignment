import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>CNAPP Dashboard</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
