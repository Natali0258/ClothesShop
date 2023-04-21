import { Suspense } from 'react';
import Layout from './layout/Layout';
import './App.scss';
import './i18n';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="App">
        <Layout />
      </div>
    </Suspense>
  );
}

export default App;
