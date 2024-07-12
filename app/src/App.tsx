import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Tech";
import BottomNav from "./components/BottomNav";
import Collections from "./components/Collections";

function App() {

  return (
    <>
      <div>
        <section className='min-h-screen mx-8'>
          <Nav />
          <Home />
          <Services />
          <Collections />
          <BottomNav />
        </section>
      </div>
    </>
  )
}

export default App;