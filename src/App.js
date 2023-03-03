import { useState } from "react";
import { Provider } from "react-redux";

import Cart from "./compents/Cart";
import Home from "./compents/Home";
import Navbar from "./compents/Navbar";
import store from "./redux/store";


function App() {
  const [navigation, setNavigation] = useState("home");

  const handleNavigation = (route) => {
    setNavigation(route);
  };

  return (
    <Provider store={store}>
      <Navbar handleNavigation={handleNavigation} />
      <main className="py-16">
        {navigation === "home" ? <Home /> : <Cart />}
      </main>
    </Provider>
  );
}

export default App;
