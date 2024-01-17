import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export const UserContext = createContext({});

export default function App({ Component, pageProps }: AppProps) {
  const [dialogState, setDialogState] = useState({ open: false, type: "" });
  // console.log(dialogState)
  return (
    <>
      <UserContext.Provider value={{ setDialogState, dialogState }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}
