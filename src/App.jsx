





import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/authActions';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login after logout
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className="app">
      <header className="bg-primary text-white p-3">
        <div className="container">
          <h1 className="h3">To-Do Application</h1>
          {isAuthenticated ? (
            <div className="d-flex justify-content-between align-items-center">
              <span>Welcome, {user?.name || 'User'}!</span>
              <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>

      <main className="container my-4">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/tasks" replace /> : <Login />} />

          {/* Protected Routes */}
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <div className="row">
                  <div className="col-12">
                    <TaskInput />
                    <TaskList />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Default Redirect */}
          <Route path="*" element={<Navigate to={isAuthenticated ? '/tasks' : '/login'} replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

