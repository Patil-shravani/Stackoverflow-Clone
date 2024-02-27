import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country;
        setTheme(getThemeByCountry(country));
      } catch (error) {
        console.error('Error fetching user location:', error);
       
        setTheme('light');
      }
    };

    fetchUserLocation();
  }, []);

  const getThemeByCountry = (country) => {

    const countryTimezones = {
      'IN': 'Asia/Kolkata', 
      'US': {
        'eastern': 'America/New_York', 
        'pacific': 'America/Los_Angeles'
      }
    
    };

    const userTimeZone = getUserTimeZone(country);
    if (countryTimezones[country] && typeof countryTimezones[country] === 'object') {
     
      if (userTimeZone === countryTimezones[country].eastern || userTimeZone === countryTimezones[country].pacific) {
        return 'dark';
      }
    } else if (countryTimezones[country] && userTimeZone === countryTimezones[country]) {
      return 'dark';
    }
    return 'light'; 
  };

  const getUserTimeZone = (country) => {
 
    switch (country) {
      case 'IN':
        return 'Asia/Kolkata'; 
      case 'US':
        const offset = new Date().getTimezoneOffset();
        return offset === 300 ? 'America/New_York' : 'America/Los_Angeles';
      default:
        return 'UTC'; 
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} theme={theme} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} theme={theme} />
      </Router>
    </div>
  );
}

export default App;
