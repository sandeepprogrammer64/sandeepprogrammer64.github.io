//import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
import Layout from './Layout/Layout';
import Aboutme from './Components/About/Aboutme';

function App() {
  return (
    <div className="App">
     
      <Layout />
      <br/>
      
      <Profile />
      <Aboutme />

    </div>
  );
}

export default App;
