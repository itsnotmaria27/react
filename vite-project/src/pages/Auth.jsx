import React, { useState, useEffect, useCallback, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { data, useNavigate } from "react-router";
import ThemeContext from '../components/themeContext';
import "./style.css";

const supabaseUrl = 'https://tvqrblbvigswvqvvytad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cXJibGJ2aWdzd3ZxdnZ5dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY2NTksImV4cCI6MjA1NzQzMjY1OX0.nuo-ugqfHbXSI_EfuCEOGCBE6Q-X5uG1ciEt2-pRJE8';
const supabase = createClient(supabaseUrl, supabaseKey);

function Auth() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {theme, toggleTheme} = useContext(ThemeContext);

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

    const onFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const user = users.find(user => user.name === name && user.password === password);
        if (user) {
            alert("Authentication successful", user);
        } else {
            setError("Invalid name or password");
        }

        setLoading(false);
    };

    const handleLogin = () =>{
        if (error){
            setError('login or password is unknown');
            navigate('/Register');
        } else {
            console.log("Success:", data);
            navigate('/Home');
        }
    };

    return (
        <div className="page-container">
          <h1>Auth</h1>
          <form onSubmit={onFormSubmit} className="form">
            <input
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
            <button type="submit" onClick={handleLogin}>Enter</button>
          </form>
          <div className="theme-toggle">
            <h2>Current theme: {theme}</h2>
            <button onClick={toggleTheme}>Change theme</button>
          </div>
        </div>
      );
}

export default Auth;
