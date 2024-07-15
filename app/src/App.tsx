import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Tech";
import { useSelector } from "react-redux";
import { RootState } from "./library/store";
import BottomNav from "./components/BottomNav";
import Collections from "./components/Projects";

function App() {

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <>
      <div className={darkMode ? 'dark dark:bg-black dark:text-white' : 'bg-white text-black'}>
        <div className="min-h-screen mx-auto">
          <Nav />
          <Home />
          <Services />
          <Collections />
          <BottomNav />
        </div>
      </div>
    </>
  )
}

export default App;