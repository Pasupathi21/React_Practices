
import { RouterProvider as AppRouter } from "react-router-dom";
import { MainRoute } from "./routes/app-routes";

function App() {
  return (
    <>
      <main className="h-screen w-[50%] flex justify-center items-center">
        <AppRouter router={MainRoute} />
      </main>
    </>
  );
}

export default App;
