import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.scss";
import store from "./store/store";
import App from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
