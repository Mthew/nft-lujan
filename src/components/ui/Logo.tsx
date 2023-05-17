import { FC } from "react";
import NextLink from "next/link";

interface Props {}

const Logo: FC<Props> = () => {
  return (
    <NextLink href={"/"}>
      <img className="h-8 w-auto" src="/LOGO-NFT.png" alt="" />
    </NextLink>
  );
};

export default Logo;
