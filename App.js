import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin'
import Post from './Pages/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Post/>} path="/post/:id" />
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<Signin />} path="/signin" />
        <Route element={<Home />} path="/" />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
