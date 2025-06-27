// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './Pages/UserList';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />
        <Routes>
          <Route path='/' element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
