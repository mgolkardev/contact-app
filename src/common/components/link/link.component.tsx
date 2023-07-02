import { LinkProperties } from "./link-properties.interface";

export const Link = ({ className, children, href }: LinkProperties) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
