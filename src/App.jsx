
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home"
import SearchResult from './components/SearchResult'
function App() {
    return (

       
     <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/" exact element={<SearchResult/>} />
        </Routes>
     </BrowserRouter>

    );
}

export default App;