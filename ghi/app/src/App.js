import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import HatList from './HatList'
import HatForm from './HatForm';
import Nav from './Nav';

function App(props) {

  const [hats, setHats] = useState(props.hats)

  useEffect(() => {
    setHats(props.hats)
  },[props])

  async function deleteHat(hat) {
    console.log(hat)
    const hatUrl = `http://localhost:8090${hat.href}`;
    const fetchConfig = {
      method: "delete",
    }

    await fetch(hatUrl, fetchConfig);
    console.log("delete success?")

    const idx = hats.indexOf(hat)
    const updated_hats = [...hats]
    updated_hats.splice(idx, 1)
    setHats(updated_hats)
  }
  if (props.hats === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hats" element={<HatList hats={hats} deleteHat={deleteHat} />} />
          <Route path="/hats/new" element={<HatForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
