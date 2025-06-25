import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import './App.css';

// Layout component that includes Navbar
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <div><hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} /></div>
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    />
  );
}

export default App;