import './App.css';
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import './Styles/Style.css';
import './Styles/Queries.css';


function App() { 
  const location = useLocation();
  // const [backgroundClass, setBackgroundClass] = useState('');

  
  const calcBackground = (pathname) => {
    switch (pathname) {
      case '/':
        return 'bodyHome';
      case '/destination':
        return 'bodyDest';
      case '/crew':
        return 'bodyCrew';
      case '/technology':
        return 'bodyTech';
      default:
        return '';
    }
  };

  
  // const currentBackgroundClass = setBackground(location.pathname);

  
  // if (backgroundClass !== currentBackgroundClass) {
  //   setBackgroundClass(currentBackgroundClass);
  // }

  
  return (
    <div className={`App ${calcBackground(location.pathname)}`}>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
    </div>
  );
}


export default App;
