import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import CategoryProduct from './pages/CategoryProduct';
import Auth from './pages/Auth';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SupabaseContext from './components/SupabaseContext';
import supabase from './components/SupabaseClient';
import { CartProvider } from './components/cartContext';
import FeedbackForm from './pages/FeedbackForm';
import { ThemeProvider } from './components/themeContext';

function App() {
  return (
    <>
      <SupabaseContext.Provider value={supabase}>
        <ThemeProvider>
          <CartProvider>
            <div>
              <Header />
              <main>
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/Home" element={<Home />} />
                  <Route index element={<Auth />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Catalog" element={<Catalog />} />
                  <Route path="/category/:id" element={<CategoryProduct />} />
                  <Route path="/Feedback" element={<FeedbackForm />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </SupabaseContext.Provider>
    </>
  );
}

export default App;