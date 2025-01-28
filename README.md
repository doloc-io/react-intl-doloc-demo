# Demo for using doloc.io with react-intl / Format.JS

This is a simple demo for using [doloc.io](https://doloc.io) with react-intl.

It is recommended to follow our dedicated guide for [react-intl](https://doloc.io/getting-started/frameworks/react-intl-format-js/) to get started.

## Understanding this demo

### Pre-requisites

Install dependencies:

```bash
npm install
```

To update the translations, you need to set the `API_TOKEN` environment variable to your doloc.io API token.
You can get a free API token by signing up at [doloc.io](https://doloc.io/account).

```bash
export API_TOKEN=YOUR_API_TOKEN
```

### Running the demo

To run the demo, execute:

```bash
npm run dev
```

This will start a development server at [localhost:5173](http://localhost:5173).

There you can see the demo in action. Switch between languages to see the translations change.

### Adding translations

Add a new text to `src/App.tsx` - e.g.

```tsx
<FormattedMessage
    id="yourId"
    defaultMessage="This is a new message"
    description="This is just for testing"/>
```

Then run the following command to extract the new message:

```bash
export API_TOKEN=YOUR_API_TOKEN
npm run update-i18n
```

Observe that the new message is added to the `src/lang/en.json` file and
the new message is added to `src/lang/fr.json` and already translated!

Additionally, the compiled messages are updated in `src/compiled-lang/en.json` and `src/compiled-lang/fr.json`.