import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import { makeStyles } from '@mui/styles';
import { clsx } from 'clsx';
import Register from './views/Register';
import UserBar from './components/UserBar';
import MainScreen from './views/MainScreen';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#e9e7e9",
    overflowY: "hidden",
  },
  loginregister: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/main/contacts" element={<MainScreen />} />
          <Route path="/main/messages" element={<MainScreen />} />
          <Route path="/main/group" element={<MainScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
