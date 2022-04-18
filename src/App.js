import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import {Link} from "react-router-dom";
import {Logo, Nav} from "./components/_styled";
import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Nav>
       <Link to={"/"}>
       <GiKnifeFork />
         <Logo to={"/"}>delicacy</Logo>
       </Link>
        </Nav>
        <Search  />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
