import { useState, useEffect } from "react";

interface HydrationProps {
  children: React.ReactNode;
}

export default function HydrationWrapper({ children }: HydrationProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <>{children}</>;
}
