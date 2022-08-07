import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='*'element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
