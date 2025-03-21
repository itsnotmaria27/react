import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { data, useNavigate } from "react-router";
import ThemeContext from '../components/themeContext';
import "./style.css";

const supabaseUrl = 'https://tvqrblbvigswvqvvytad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cXJibGJ2aWdzd3ZxdnZ5dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY2NTksImV4cCI6MjA1NzQzMjY1OX0.nuo-ugqfHbXSI_EfuCEOGCBE6Q-X5uG1ciEt2-pRJE8';
const supabase = createClient(supabaseUrl, supabaseKey);

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.from("users").select("name, password");
    if (error) {
      setError(error.message);
      console.error("Error fetching users:", error);
    } else {
      setUsers(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addUser = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name || !password) return;

      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase.from("users").insert([{ name, password }]).select();
        if (error) {
          setError(error.message);
          console.error("Error adding user:", error);
        } else {
          if (data && data.length > 0) {
            setUsers((prevUsers) => [...prevUsers, data[0]]);
          }
          setName("");
          setPassword("");
          inputRef.current.focus();
          alert("Registration successful!");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error adding user:", err);
      }

      setLoading(false);
    },
    [name, password]
  );

  const handleRegister = () => {
    if (error) {
      setError('Error');
    } else {
      console.log("Success:", data);
      navigate('/');
    }
  };

  return (
    <div className="page-container">
      <h1>Register</h1>
      <form onSubmit={addUser} className="form register-form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="theme-toggle">
        <h2>Current theme: {theme}</h2>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
}

export default Register;