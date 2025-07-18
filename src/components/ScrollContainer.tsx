import { PropsWithChildren } from "react";

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  return <div className="max-h-full overflow-y-auto">{children}</div>;
};
