
import { CardMod } from "../components/card/card";
import { Provider } from "@/src/components/ui/provider"

export const App = () => {
  return (
     <Provider>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <CardMod />
      </div>
    </Provider>
  );
};

export default App;
