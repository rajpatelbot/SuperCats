import { BrowserRouter, Routes as ReactRouter, Route } from "react-router-dom";
import Header from "../components/Navbar/Header";
import ViewCatDetails from "../pages/Cats/ViewCatDetails";
import Cats from "../pages/Cats";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <ReactRouter>
        <Route path="/" element={<Cats />} />
        <Route path="/view/breed/:id" element={<ViewCatDetails />} />
      </ReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
