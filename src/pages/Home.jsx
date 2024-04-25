import React from 'react';
import Navbar from '../components/Page1/Navbar/Navbar';
import Caroesol from '../components/Page1/Caroesal/Caroesal';
import Header from '../components/Page1/Header/Header';
import Product from '../components/Page1/Products/Product';
import Catalog from '../components/Page1/Catalog/Catalog';
import Special from '../components/Page1/Special/Special';
import Install from '../components/Page1/InstallApp/install';
import Contact from '../components/Page1/Contact/Contact';
import Footer from '../components/Page1/Footer/Footer';

export default function Home() {
  return (
      <div>
          <>
              <Navbar />
              <Caroesol />
              <Header />
              <Product />
              <Special />
              <Catalog />
              <Install />
              <Contact />
              <Footer />
          </>
      </div>
  );
}
