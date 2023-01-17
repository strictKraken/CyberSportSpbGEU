import { useEffect } from "react";
import { useRouter } from "next/router";
export default function ToTop() {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      if (Boolean(document)) {
        document.getElementById("top").scrollIntoView();
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, []);

  return "";
}
