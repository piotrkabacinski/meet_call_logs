# Google Meet Logs

Chromium extension for logging Google Meet calls end times. Tracks call title, joining time and it's end (by clicking on hang up icon ☎️).

<img src="https://i.ibb.co/jyXQhrw/meet-logs.png" width="500" />

To test it, simply load project's `dist` content as browser [extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).

⚠️ Extension depends on Google Meet's Polish internalization 🇵🇱. See `src/consts/config.ts` for used selectors.

## Development

```
npm i
```

```
npm run build
```

Each update requires manual update of the extension in the browser.