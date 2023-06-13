import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList'
import StudentAdd from './components/StudentAdd'
import StudentUpdate from './components/StudentUpdate'
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
      <h3>React JS and Redux CRUD application</h3>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StudentList />}></Route>
            <Route path='/student/add' element={<StudentAdd />}></Route>
            <Route path='/student/edit/:id' element={<StudentUpdate />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
