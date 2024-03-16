
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home"
import Pagination from "./components/Pagination";
import SearchResult from './components/SearchResult'
import { AppContext } from "./utils/ConstantsAPI";
function App() {
    return (
        <AppContext>

     <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/:query/:startIndex" element={<SearchResult/>} />

        </Routes>
     </BrowserRouter>
        </AppContext>
    );  
}

export default App;