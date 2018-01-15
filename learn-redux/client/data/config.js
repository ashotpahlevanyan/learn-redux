import Raven from 'raven-js';
//https://30c22f9619264ccca2b65af3b2bc4a5a@sentry.io/
const sentry_key = '30c22f9619264ccca2b65af3b2bc4a5a';
const sentry_app = '271834';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
