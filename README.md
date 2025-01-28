# Demo for using doloc.io with react-intl / Format.JS

This is a simple demo for using [doloc.io](https://doloc.io) with react-intl.

It is recommended to follow our dedicated guide for [react-intl](https://doloc.io/getting-started/frameworks/react-intl-format-js/) to get started.


## Pre-requisites

Install dependencies:

```bash
npm install
```

To update the translations, you need to set the `API_TOKEN` environment variable to your doloc.io API token.
You can get a free API token by signing up at [doloc.io](https://doloc.io/account).

```bash
export API_TOKEN=YOUR_API_TOKEN
```

## Running the demo

To run the demo, execute:

```bash
npm run dev
```

This will start a development server at [localhost:5173](http://localhost:5173).

There you can see the demo in action. Switch between languages to see the translations change.

## Adding translations

Add a new text to `src/App.tsx` - e.g.

```tsx
<FormattedMessage
    id="yourId"
    defaultMessage="This is a new message"
    description="This is just for testing"/>
```

After adding the new message, you need to extract the new message and translate it.

To extract and translate the new text, there are two alternative ways to do it:
- Local workflow
- Using the CI workflow

### Local workflow

Run the following command to extract the new message:

```bash
export API_TOKEN=YOUR_API_TOKEN
npm run update-i18n
```

Observe that the new message is added to the `src/lang/en.json` file and
the new message is added to `src/lang/fr.json` and already translated!

Additionally, the compiled messages are updated in `src/compiled-lang/en.json` and `src/compiled-lang/fr.json`.

### CI workflow

If you are using the CI workflow, you can simply push your changes to the repository.
Check out the workflow definition in `.github/workflows/localization.yml` to see how the translations are updated.

When your change is merged into the main branch, the translations will be updated automatically and a new commit will be created with the updated translations.

**Note:** This workflow expects the `DOLOC_API_TOKEN` to be set as a [secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) in your repository.