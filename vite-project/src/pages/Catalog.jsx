import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SupabaseContext from '../components/SupabaseContext'; 
import ThemeContext from '../components/themeContext';
import "./style.css";

function Catalog() {
  const supabase = useContext(SupabaseContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const {theme, toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*");

        if (error) {
          console.error('Error fetching categories:', error);
        } else {
          setCategories(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories(); 
  }, [supabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <h1>Catalog</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <div className="theme-toggle">
        <h2>Current theme: {theme}</h2>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
}

export default Catalog;