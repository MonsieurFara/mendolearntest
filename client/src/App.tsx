import React, { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userActions';
import Routes from './components/routes/Routes';
import NavBar from './components/Navbar';
import {ToastContainer} from 'react-toastify'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  
  return (
    <React.Fragment>
      <NavBar/>

      <Routes/>

      <ToastContainer position="bottom-right" />
    </React.Fragment>
  );
}

export default App;
