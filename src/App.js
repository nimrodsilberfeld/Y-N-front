import Main from "./components/Main";
import PollContextProvider from "./context/pollsContext";


function App() {
  return (
    <PollContextProvider>
      <Main />
    </PollContextProvider>
  );
}

export default App;
