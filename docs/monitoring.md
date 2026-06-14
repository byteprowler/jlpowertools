# Frontend Monitoring

PostHog, Microsoft Clarity, and Sentry are initialized globally from environment variables. Missing values disable the matching tool without crashing local development.

## Verify PostHog

Set `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`, then visit a few pages locally or in production. In PostHog, check Live Events for `$pageview` events.

## Verify Microsoft Clarity

Set `NEXT_PUBLIC_CLARITY_PROJECT_ID`, load the site, and confirm the Clarity dashboard receives a new session. Clarity recordings can take a short time to appear.

## Verify Sentry

Set `NEXT_PUBLIC_SENTRY_DSN`, then temporarily run this in the browser console on a non-production environment:

```js
throw new Error("Sentry frontend verification");
```

Check the Sentry Issues stream for the event. Source map upload requires `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, and `SENTRY_PROJECT`.
