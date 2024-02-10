import SiteLayout from "./components/site-loyout";
import Home from "./pages/home";
import Flights from "./pages/flights";
import useAppInitialization from "./hooks/useAppInitialization";
import { Route, Routes } from "react-router-dom";
import routes from "./lib/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";
import Loader from "./components/loader/Loader";

function App() {

  const {
    data: {
      loading
    }
  } = useAppInitialization();

  return (
    <div className="app" >

      <SiteLayout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.flights} element={<Flights />} />
          <Route path="*" element={<NotFound text={"No Page Found"} className='not-found-page' />} />
        </Routes>
      </SiteLayout>
      <ToastContainer
        autoClose={false}
        theme="colored"
      />
      {loading && <Loader />}
    </div >
  );
}

export default App;
