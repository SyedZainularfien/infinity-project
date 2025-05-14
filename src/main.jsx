//IMPORTS
import { createRoot } from "react-dom/client";
// import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";
// import "./styles/globals.css";
import "aos/dist/aos.css";
import "./global.css";
// -------------------------------------------------
//Rainbow Kit Imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { StrictMode } from "react";
import ThemeWrapper from "./theme-provider/ThemeProvider";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, sepolia],
  [
    alchemyProvider({ apiKey: "nkC6NPSTnUnZ33vTfEuLQw9yUDrJh-Jf" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "web3app_using_rainbowkit",
  projectId: "4bc9b634d82ae5283750f69f0623db5f",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          coolMode
          // avatar={() => (
          //   <img
          //     src="/assets/images/bobbie.png"
          //     alt="logo"
          //     width={200}
          //     height={200}
          //   />
          // )}
          modalSize="compact"
          theme={darkTheme()}
          chains={chains}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeWrapper>
                <App />
              </ThemeWrapper>
            </PersistGate>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </StrictMode>
);
