
import { Provider } from "@/src/components/ui/provider"
import { RouterProvider } from "react-router-dom";
import { router } from "../routes";

export const App = () => {
  return (
     <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
