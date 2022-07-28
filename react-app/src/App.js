import React from "react";
import Header from "./component/Header";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Body from "./component/Body";
import Info from "./component/Info";
import Carlist from "./component/Carlist";
function App() {
  const carlines = [
    {
      "id": 1,
      "name": "Sedan",
    },
    {
      "id": 2,
      "name": "Suv",
    },
    {
      "id": 3,
      "name": "Couples",
    },
    {
      "id": 4,
      "name": "Maybach",
    },
    {
      "id": 5,
      "name": "Sport",
    },
    {
      "id": 6,
      "name": "Convetible",
    },
  ]
  const carlist = carlines.map(carline => (
    <NavDropdown.Item>{carline.name}</NavDropdown.Item>
  ))

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header carlist={carlist} />
      <Body />
      <Info />
      <Carlist />
    </ div>

  );
}

export default App;
