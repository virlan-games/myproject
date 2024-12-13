
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateCommponent';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contactus from './Components/Contactus';
import Form from './Components/Form';
import Course from './Components/Course';



function App() {
  return (
    <div className="App12">

    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/home"element={<Home/>}></Route>
          <Route path="/course"element={<Course/>}></Route>
          <Route path="/blog"element={<Blog/>}></Route>
          <Route path="/logout"element={<h1>hi welcome to logout page </h1>}></Route>
          <Route path="/contact"element={<Contactus/>}></Route>
          <Route path="/apply"element={<Form/>}></Route>
        
          </Route>
          <Route path="/signup" element={<SignUp />} />

        </Routes>
        <Footer/>

            </BrowserRouter>

    </div>
  );
}

export default App;
