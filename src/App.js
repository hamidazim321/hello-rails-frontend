import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Greet from './components/Greet';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <h1>Hello Rails</h1>
            <Link to="/greetings/random">See Greetings</Link>
          </div>
      )}
      />
      <Route path="/greetings/random" element={<Greet />} />
    </Routes>
  );
}

export default App;
