import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MobileEmul from './components/MobileEmul';

function App() {
  return (
    <div className="App">
      <MobileEmul>
        <Routes>
          <Route path='/' element={<h1>Test</h1>}/>
        </Routes>
      </MobileEmul>
    </div>
  );
}

export default App;
