import React, { useContext, useEffect, useState, Suspense } from "react";
import SupabaseContext from "../components/SupabaseContext";
import { CartContext } from "../components/cartContext";
import { useParams } from "react-router-dom";
import "./style.css";

const ProductCard = React.lazy(() => import("../components/ProductCart"));
const ThemeToggle = React.lazy(() => import("../components/ThemeToggle"));
const LoadingSkeleton = React.lazy(() => import("../components/LoadingSkeleton"));

const CategoryProducts = () => {
  const { id } = useParams();
  const supabase = useContext(SupabaseContext);
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: fetchError } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", id);

        if (fetchError) throw fetchError;

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [id, supabase]);

  if (loading) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingSkeleton />
      </Suspense>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found in this category.</div>;
  }

  return (
    <div className="page-container">
      <div className="product-grid">
        {products.map((product) => (
          <Suspense key={product.id} fallback={<div>Loading...</div>}>
            <ProductCard product={product} addToCart={addToCart} />
          </Suspense>
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeToggle />
      </Suspense>
    </div>
  );
};

export default CategoryProducts;