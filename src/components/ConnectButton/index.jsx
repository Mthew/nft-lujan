import { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect, useContractRead } from "wagmi";
import { useRouter } from "next/router";

import { Button } from "../ui";

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
          "0x066716c1088F92cc25DC1dF0911F3eF28667D0F1", //NEO
          "0xf52f201C8Ab4866643b3C42058c29Dc6Ef24ce49", //ANGELO
          "0xbf8bF09Ddf2568715080AC1eAfE432aC0dF0566f", //RICKY
          "0x02705Eb378F277BfFeDA4421656a6da3F65DFb34", //FABIAN
          "0x534597Bd4B6864B0fF64ccC73d6790b60E9813Ff", //LAIDY
          "0x907C7Cf8C23B69a5f6D8D662480e2a17367d014F", //PAJARERO
          "0xE22150dC5aae2247a08Aa02CE6C1DA568F92D44b", //ALGUIEN
          "0x7958f00d6013E84d5BDD56741AD36847c60012a0", //MARIA
          "0xf01B2EC95a3eDaD94379a11E00172E6218DdA2f5", //OTRO ALGUIEN
          "0xf3252F88EB9882C3b87848055257581506ca2D41", //LUJANS CLUB
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
  const label = isConnected ? "Disconnect" : "Validar Beneficios";

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
    <Button onClick={onClick} loading={loading}>
      {loading ? "Loading..." : label}
    </Button>
  );
}
