import { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect, useContractRead } from "wagmi";

import { useRouter } from "next/router";

// import esqueletronABI from "../../lib/abi/esqueleton";

export default function ConnectButton() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const router = useRouter();

  // const contractRead = useContractRead({
  //   address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
  //   abi: esqueletronABI,
  //   functionName: "getSleep",
  // });

  const { isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
      if (
        [
          "0xf52f201C8Ab4866643b3C42058c29Dc6Ef24ce49",
          "0x066716c1088F92cc25DC1dF0911F3eF28667D0F1",
          "0x534597Bd4B6864B0fF64ccC73d6790b60E9813Ff",
          "0x02705Eb378F277BfFeDA4421656a6da3F65DFb34",
        ].indexOf(address) >= 0
      ) {
        router.push("/success");
      } else {
        router.push("/notHasNFT");
      }
    },
    onDisconnect() {
      console.log("Disconnected");
    },
  });

  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : label}
    </button>
  );
}
