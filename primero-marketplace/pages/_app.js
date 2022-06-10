/* pages/_app.js */
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/header.css";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import { useState } from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [infuraProvider({ infuraId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "web3rsvp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// const { data: account } = useAccount();
// const { disconnect } = useDisconnect();

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className="border-b p-6 flex justify-between items-center shadow-lg bg-blue-500">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4 ">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-white h-8 w-8 mr-2"
                >
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                <span className="text-xl text-white font-bold uppercase tracking-wide">
                  Primero Courses
                </span>
              </a>
            </Link>
            <button
              className="inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              className={`${
                active ? "" : "hidden"
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    Home
                  </a>
                </Link>
                <Link href="/create-nft">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white ">
                    Upload a Course
                  </a>
                </Link>
                <Link href="/my-nfts">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    My Courses
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    Dashboard
                  </a>
                </Link>
                <ConnectButton />
              </div>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
