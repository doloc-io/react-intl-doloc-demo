import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FormattedMessage, IntlProvider} from "react-intl";
import messagesFr from "./compiled-lang/fr.json";
import messagesEn from "./compiled-lang/en.json";
import {useState} from "react";

const messages = {
    fr: messagesFr,
    en: messagesEn,
};

function App() {
    const [locale, setLocale] = useState(navigator.language.startsWith('fr') ? 'fr' as const : 'en' as const);
    return (
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
            <h1>doloc showcase for react-intl / Format.JS</h1>
            <div className="select-locale">
                <label htmlFor="locale-select">Select language: </label>
                <select id="locale-select" value={locale} onChange={e =>setLocale(e.target.value as 'en' | 'fr')}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>
            <table>
                <thead>
                <tr>
                    <td>Key</td>
                    <td>Text</td>
                    <td>Notes</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>simpleMessage</td>
                    <td>
                        <FormattedMessage id="simpleMessage" defaultMessage="Simple message"/>
                    </td>
                    <td>Message referenced by id</td>
                </tr>
                <tr>
                    <td>messageExtractedFromTemplate</td>
                    <td>
                        <FormattedMessage
                            id="messageExtractedFromTemplate"
                            defaultMessage="This message was initially defined in App.tsx"
                            description="This is some test message"/>
                    </td>
                    <td>Extracted via `formatjs extract`</td>
                </tr>
                <tr>
                    <td>messageWithParameters</td>
                    <td>
                        <FormattedMessage
                            id="messageWithParameters"
                            defaultMessage="Hello {name}!"
                            description="a message with personalization"
                            values={{name: 'you'}} />
                    </td>
                    <td>Extracted via `formatjs extract`</td>
                </tr>
                <tr>
                    <td>messageWithFormattedParameter</td>
                    <td>
                        <FormattedMessage
                            id="messageWithFormattedParameter"
                            defaultMessage="Today: {date, date}"
                            description="a message with formatted parameter"
                            values={{date: Date.now()}} />
                    </td>
                    <td>Extracted via `formatjs extract`</td>
                </tr>
                <tr>
                    <td>newMessageExtractedOnCI</td>
                    <td>
                        <FormattedMessage
                            id="newMessageExtractedOnCI"
                            defaultMessage="Hello from CI/CD"
                            description="this message is expected to be extracted and translated in CI pipeline" />
                    </td>
                    <td>Extracted via CI / Github Action</td>
                </tr>
                {/* useIntl()/intl can only be used in child-/sub-components of the component declaring IntlProvider
                <tr>
                    <td>messageImperative</td>
                    <td>
                        {useIntl().formatMessage({
                            id: 'messageImperative',
                            defaultMessage: 'Message via intl.formatMessage(..)',
                            description: 'this message is declared via imperative api',
                        }, {}, {ignoreTag: true})}
                    </td>
                    <td>Extracted via `formatjs extract`</td>
                </tr>
                */}
                </tbody>
            </table>

            <hr/>

            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
        </IntlProvider>
    )
}

export default App
