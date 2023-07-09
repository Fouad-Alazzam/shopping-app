// import "@/styles/globals.css";
// import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
// import { createWrapper } from "next-redux-wrapper";
// import store from "../store";

// import Footer from "../components/Footer";

// function App({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Provider store={store}>
//         <Footer>
//           <Component {...pageProps} />
//         </Footer>
//       </Provider>
//     </SessionProvider>
//   );
// }

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

// export default wrapper.withRedux(App);
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { createWrapper } from "next-redux-wrapper";
import store from "../store";

import Footer from "../components/Footer";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Footer>
          <Component {...pageProps} />
        </Footer>
      </Provider>
    </SessionProvider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
