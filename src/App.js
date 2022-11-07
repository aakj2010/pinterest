import React, { useState, useEffect } from 'react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageHeader from './components/HomePageHeader';
import MainBoard from './components/mainpage/MainBoard';
import MainPageHeader from './components/mainpage/MainPageHeader';
import unsplash from './features/unsplash/unsplash'
import Portal from './components/portal/Portal';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux'
import Account from './components/mainpage/Account';


function App() {
  const [pins, setNewPins] = useState([])

  const { user } = useSelector((state) => state.auth)

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    });
  };


  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Toys', 'kids', 'car']

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  }


  useEffect(() => {

    getNewPins()
  }, [])



  const onSearchSubmit = (term) => {
    console.log("on Searchsubmit", term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function (a, b) {
        return 0.5 - Math.random()
      });
      setNewPins(newPins);
    })
  }

  // onSearchSubmit("cars")

  return (
    <BrowserRouter>
      {
        !user ? <HomePageHeader /> : null
      }

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/mainpageheader' element={<MainPageHeader onSubmit={onSearchSubmit} />} />
        <Route path='/' element={<MainBoard pins={pins} />} />
        <Route path= '/account' element={<Account />} />

        {/* <Route path='/portal' element={<Portal />}>
          <Route path='mainpageheader' element={<MainPageHeader onSubmit={onSearchSubmit} />} />
          <Route path='/' element={<MainBoard pins={pins} />} />
        </Route> */}

      </Routes>
    </BrowserRouter >

  );
}

export default App;
