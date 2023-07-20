import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import App from "./App"
import { store } from "./app/store"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
)
