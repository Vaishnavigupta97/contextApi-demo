import Header from "./Component/Header/Header";
// import ContextProvider from "./Store/ContextProvider";
import ShowItem from "./Component/ShowItem/ShowItem";
import { useButtonContext } from "./Store/ContextProvider";

function App() {
  const {showItem } = useButtonContext();
  
  return (
    // <ContextProvider>
      <div className="App">
        <Header />
        {showItem && <ShowItem />}
      </div>
    // </ContextProvider>
  );
}

export default App;
