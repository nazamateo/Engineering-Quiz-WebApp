import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Score from "./Pages/Score";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/quiz" element={<Quiz />}>
            <Route path="" element={<Score />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
