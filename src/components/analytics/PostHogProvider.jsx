"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider as ReactPostHogProvider } from "posthog-js/react";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

function capturePageview() {
  if (typeof window === "undefined") return;

  posthog.capture("$pageview", {
    $current_url: window.location.href,
  });
}

export default function PostHogProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!posthogKey || typeof window === "undefined") return;

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (client) => {
        if (process.env.NODE_ENV === "development") {
          client.debug();
        }
      },
    });

    capturePageview();

    const handleRouteChange = () => capturePageview();
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (!posthogKey) {
    return <>{children}</>;
  }

  return <ReactPostHogProvider client={posthog}>{children}</ReactPostHogProvider>;
}
