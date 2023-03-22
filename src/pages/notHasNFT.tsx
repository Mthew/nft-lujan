import { Web3Button } from "@web3modal/react";
export default function Success() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          background: "red",
        }}
      >
        <h1>Actualmente no posee un NFT de nuestra coleccion</h1>
        <Web3Button icon="show" label="Connect Wallet" balance="show" />
      </div>
    );
  }