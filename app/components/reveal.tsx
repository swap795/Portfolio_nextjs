import type { ReactNode } from "react";
import { ReplayOnEntry } from "./motion-replay";

export function Reveal({ children }: { children: ReactNode }) {
  return <ReplayOnEntry className="reveal" activeClassName="is-visible" enterThreshold={0.15} exitThreshold={0.05}>{children}</ReplayOnEntry>;
}
