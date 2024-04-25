import React from 'react';
import Navbar from '../components/Page1/Navbar/Navbar';
import ProductsList from '../components/Page2/ProductsList/productList';
import Contact from '../components/Page1/Contact/Contact';
import Footer from '../components/Page1/Footer/Footer';

export default function Home() {
  return (
      <div>
          <>
              <Navbar />
              <ProductsList />
              <Contact />
              <Footer />
          </>
      </div>
  );
}
