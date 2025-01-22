// // components/Login.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/authActions';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
    
//     if (email === 'sandhya@gmail.com' && password === 'password123') {
//       const fakeUser = { name: 'sandhya', email: 'sandhya@gmail.com' };
//     dispatch(login(fakeUser));
//       alert('Login successful!');
//     } else {
//       alert('Invalid credentials');
//     }

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="login-form">
//       <h2>Please Log In</h2>
//       <form onSubmit={handleLoginSubmit} className='form-style'>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit" style={{background:"yellow"}}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (email === 'sandhya@gmail.com' && password === 'password123') {
      const fakeUser = { name: 'sandhya', email: 'sandhya@gmail.com' };
      dispatch(login(fakeUser));
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }

    setEmail("");
    setPassword("");
    setError('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center  ">
      <div className="col-12 col-md-6 col-lg-4 p-4 bg-white shadow-lg rounded">
        <h2 className="text-center mb-4">Please Log In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group my-4">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

