import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import './App.css';

// Layout component that includes Navbar and nested routes
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <div><hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} /></div>
      <Outlet />
    </div>
  );
}

// React Router v6.10+ router config
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

// App component with Redux Provider wrapping the RouterProvider
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
