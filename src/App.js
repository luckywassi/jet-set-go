import SiteLayout from "./components/site-loyout";
import Home from "./pages/home";
import Flights from "./pages/flights";
import useAppInitialization from "./hooks/useAppInitialization";
import { Route, Routes } from "react-router-dom";
import routes from "./lib/routes";

function App() {

  useAppInitialization();

  return (
    <div className="app" >
      <SiteLayout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.flights} element={<Flights />} />
        </Routes>
      </SiteLayout>
    </div >
  );
}

export default App;
