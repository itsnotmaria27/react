import { Routes, Route } from 'react-router-dom';
import React, {Suspense} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SupabaseContext from './components/SupabaseContext';
import supabase from './components/SupabaseClient';
import { CartProvider } from './components/cartContext';
import FeedbackForm from './pages/FeedbackForm';
import { ThemeProvider } from './components/themeContext';

const Catalog = React.lazy(() => import('./pages/Catalog'));
const CategoryProduct = React.lazy(() => import('./pages/CategoryProduct'));


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
                  <Route
                    path="/Catalog"
                    element={
                      <Suspense fallback={<div>Загрузка...</div>}>
                        <Catalog />
                      </Suspense>
                    }
                  />
                  <Route path="/category/:id" element={
                      <Suspense fallback={<div>Загрузка...</div>}>
                        <CategoryProduct />
                      </Suspense>
                    } />
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