import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
import Login from './components/Login/Login';
import { useStateValue } from "./components/DataLayer/StateProvider";
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ):
      (
        <>
        <Header />

        <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
</div>
        </>
      )}
      
    </div>
  );
}

export default App;
