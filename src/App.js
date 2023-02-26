import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navber from "./components/Navber";
import TodoList from "./components/TodoList";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store }>

    <div
    className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
>
    {/* <!-- navbar --> */}
   <Navber />

    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header />
      
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <TodoList />
     

        <hr className="mt-4" />

        {/* <!-- footer --> */}
       <Footer />
    </div>
</div>
</Provider>
  );
}

export default App;
