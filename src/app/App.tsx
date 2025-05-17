
import { Provider } from "@/src/components/ui/provider"
import { RouterProvider } from "react-router-dom";
import { router } from "../routes";

export const App = () => {
  return (
     <Provider>
      {/* <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div> */}
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
