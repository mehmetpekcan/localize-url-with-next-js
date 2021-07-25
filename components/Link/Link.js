import NextLink from "next/Link";
import { getRouteSource } from "../../getRouteSource";

const Link = ({ name, children, ...props }) => (
  <NextLink {...props} href={getRouteSource(name)}>
    {children}
  </NextLink>
);

export default Link;
