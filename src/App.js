import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Commercials from './pages/Commercial';
import ResidentialPage from './pages/ResidentialPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';
import MaintenancePage from './pages/Maintenance';

function App() {
    const routes = [
        { path: 'home', element: <HomePage /> },
        {
            path: 'commercials', element:
                <Commercials title="Commercial Projects"/>
        },
        {
            path: 'residentials', element:
                <ResidentialPage/>
        },
        {
            path: 'commercials/:id', element:
                <ProductPage/>
        },
        {
            path: 'maintenance', element: <MaintenancePage/>
        },
        {
            path: 'careers', element: <MaintenancePage />
        },
        {
            path: 'service', element: <MaintenancePage />
        },
        { path: 'about', element: <MaintenancePage />}
    ];
  return (
      <div className="App">
          <NavBar />
          <Routes>
              {
                  routes.map((route, index) => {
                      return <Route key={index} path={route.path} element={route.element}/>
                  })
              }
          </Routes>
    </div>
  );
}

export default App;
