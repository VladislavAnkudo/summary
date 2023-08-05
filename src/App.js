import {Route, Routes} from "react-router-dom"
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";
import {Layout} from './layout/Layout'
import './css/style.css';
import './css/normalize.css';
import './css/animation.css';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Resume/>}/>
            <Route path="projects" element={<Projects/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
