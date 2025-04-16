

import Routes from '@/src/routes';
import { store } from '@/store/store';
import { Provider } from 'react-redux';


export default function HomeScreen() {
  return (
    <>
     <Provider store={store}>
      <Routes/>
      </Provider>
    </>
  );
}


