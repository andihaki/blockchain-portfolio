import { LucideIcon } from "lucide-react";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  open: boolean;
}

export default function Menu({
  icon,
  children,
  open,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex gap-4">
      {icon}
      {open ? children : ""}
    </div>
  );
}
