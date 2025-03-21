    {/* {/* < div>
        <Register />
      </div>
      <div>
        <Auth />
      </div> */}
    {/*       
        <h1>React Hooks</h1>
      <div className='input-container'>
        <input
          ref={inputRef}
          type="text"
          placeholder='Enter name:'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div> 
      <h2>Users ({userCount}):</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} | {user.password}</li>
        ))}
      </ul>
      <div>
        <h2>Example UseReducer</h2>
        <p>Quantity: {state.count}</p>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
     */}

     //   const [name, setName] = useState("");
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const inputRef = useRef(null);
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   const fetchUsers = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     const { data, error } = await supabase.from("users").select("*");
//     if (error) {
//       setError(error.message);
//       console.error("Error fetching users:", error);
//     } else {
//       setUsers(data);
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchUsers().catch((error) => {
//       setError(error.message);
//       console.error("Error updating user list:", error);
//     });
//   }, [fetchUsers]);

//   const addUser = useCallback(async () => {
//     if (!name) return;

//     try {
//       const { data, error } = await supabase.from("users").insert([{ name }]).select();
//       if (error) {
//         setError(error.message);
//         console.error("Error adding user:", error);
//       } else {
//         if (data && data.length > 0) {
//           setUsers((prevUsers) => [...prevUsers, data[0]]);
//         }
//         setName("");
//         inputRef.current.focus();
//       }
//     } catch (err) {
//       setError(err.message);
//       console.error("Error adding user:", err);
//     }
//   }, [name]);

//   const userCount = useMemo(() => users.length, [users]);


// const supabaseUrl = 'https://tvqrblbvigswvqvvytad.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cXJibGJ2aWdzd3ZxdnZ5dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY2NTksImV4cCI6MjA1NzQzMjY1OX0.nuo-ugqfHbXSI_EfuCEOGCBE6Q-X5uG1ciEt2-pRJE8';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// import { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import Product from './pages/Product';