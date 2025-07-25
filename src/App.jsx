import { useState } from 'react';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  // };

  return (
    <div className="App">
        <Portfolio  />
      {/* {isAuthenticated ? (
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
    </div>
  );
}

export default App;