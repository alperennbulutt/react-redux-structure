import './App.css';
import { Provider } from 'react-redux';
import { RouteList } from './routes/RouteList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouteList />
    </Provider>
  );
}

export default App;
