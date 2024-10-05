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
        { path: '/gloverBrothers/home', element: <HomePage /> },
        {
            path: '/gloverBrothers/portofolio/commercials', element:
                <Commercials title="Commercial Projects"/>
        },
        {
            path: '/gloverBrothers/portofolio/residentials', element:
                <ResidentialPage/>
        },
        {
            path: '/gloverBrothers/portofolio/commercials/:id', element:
                <ProductPage/>
        },
        {
            path: '/gloverBrothers/maintenance', element: <MaintenancePage/>
        },
        {
            path: '/gloverBrothers/careers', element: <MaintenancePage />
        },
        {
            path: '/gloverBrothers/service', element: <MaintenancePage />
        },
        { path: '/gloverBrothers/about', element: <MaintenancePage />}
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
