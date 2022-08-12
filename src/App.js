import React, { Component } from 'react';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';


function Header() {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div>
         <Header />
         <MenuUtama />
         <MenuProduct />
         <MenuKontak />
         <MenuTentangKami />
         <Footer />
      </div>
    );
  }
}


export default App;
