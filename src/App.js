import './App.css';
import HomePage from './pages/home_page';
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
