import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/Root";
import FindWork from "./pages/FindWork";
import FindTalent from "./pages/FindTalent";
import Articles from "./pages/Articles";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import LearnMore from "./pages/LearnMore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/find-work" element={<FindWork />} />
      <Route path="/find-talent" element={<FindTalent />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/learn-more" element={<LearnMore />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
