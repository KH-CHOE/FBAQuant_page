import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import OrderManagement from "./pages/order-management";
import Dashboard1 from "./pages/dashboard1";
import Template5SignUp from "./pages/template5-sign-up";
import Template5Login from "./pages/template5-login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/order-management":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/template-5sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/template-5login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/order-management" element={<OrderManagement />} />
      <Route path="/dashboard" element={<Dashboard1 />} />
      <Route path="/template-5sign-up" element={<Template5SignUp />} />
      <Route path="/template-5login" element={<Template5Login />} />
    </Routes>
  );
}
export default App;
