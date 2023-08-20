import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { Layout } from "~/src/features/layout/layout.component";
import store from "./store";
import { Filters } from "./filters";
import { Routing, ROUTES } from "./routing";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout routes={ROUTES}>
          <Routing />
        </Layout>
        <Filters />
      </HashRouter>
    </Provider>
  );
};

export default App;
