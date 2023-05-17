import { FC, ReactNode } from "react";
import NextLink from "next/link";
import { Link as UiLink } from "@nextui-org/react";

interface Props {
  href: string;
  children: ReactNode;  
}

const Link: FC<Props> = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <UiLink {...props}>{children}</UiLink>
  </NextLink>
);

export default Link;
