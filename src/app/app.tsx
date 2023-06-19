import Login from 'src/view/Auth/Login';
import { store } from './store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
