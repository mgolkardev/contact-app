import { MainLayoutProperties } from "./main-layout-properties.interface";

export const MainLayout = ({ children }: MainLayoutProperties) => {
  return (
    <div className="container max-w-7xl min-w-mobile mx-auto p-10">
      <main>{children}</main>
    </div>
  );
};
