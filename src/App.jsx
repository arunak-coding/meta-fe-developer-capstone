import { Routes, Route } from "react-router-dom";

import pages from "./utils/pages";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Confirmation from "./pages/Confirmation/Confirmation";

const App = () => (
  <>
    <Layout>
      <Routes>
        <Route path={pages.get("home").path} element={<Home />} />
        <Route path={pages.get("about").path} element={<UnderConstruction />} />
        <Route path={pages.get("menu").path} element={<UnderConstruction />} />
        <Route
          path={pages.get("reservations").path}
          element={<Reservations />}
        />
        <Route path={pages.get("order").path} element={<UnderConstruction />} />
        <Route path={pages.get("login").path} element={<UnderConstruction />} />
        <Route
          path={pages.get("confirmation").path}
          element={<Confirmation />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  </>
);

export default App;
