import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/GeneralRoute';

function App() {
  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;