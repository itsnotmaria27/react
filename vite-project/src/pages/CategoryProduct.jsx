import React, { useContext, useEffect, useState } from "react";
import SupabaseContext from "../components/SupabaseContext";
import {CartContext } from "../components/cartContext";
import { useParams } from "react-router-dom";
import ThemeContext from "../components/themeContext";
import "./style.css";

function CategoryProducts(){
    const {id} = useParams();
    const supabase = useContext(SupabaseContext);
    const {addToCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() =>{

        async function fetchProducts() {
            try {
                const {data, error} = await supabase
                    .from('products')
                    .select('*')
                    .eq('category_id', id);
                if (error){
                    console.error('error fetching products', error);
                }else{
                    setProducts(data);
                }
            }catch (err){
                console.error('somethng happened:', err);
            } finally{
                setLoading(false);
            }
            }
            fetchProducts().catch((error)=> {
                console.error('Undefined error with loading products:', error);
            });
        }, [id, supabase]);
        if (loading) {
            return(
                <div>
                    <div>
                        <span>Loading... </span>
                    </div>
                </div>
            );
        }
        if (!products || products.length === 0){
            return(
                <div>
                    <h1>Item not found.</h1>
                </div>
            );
        }
        
        return (
            <div className="page-container">
              <h1>Category Products</h1>
              <div>
                {products.map((product) => (
                  <div key={product.id}>
                    <div>
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                      <p>{product.price}</p>
                      <Link to="/Feedback">Отзыв</Link>
                      <div>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="theme-toggle">
                <h2>Current theme: {theme}</h2>
                <button onClick={toggleTheme}>Change theme</button>
              </div>
            </div>
          );
}

export default CategoryProducts;