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
        background: "green",
      }}
    >
      <h1>Verificado</h1>
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
    </div>
  );
}
