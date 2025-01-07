import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FormattedMessage, IntlProvider} from "react-intl";
import messagesFr from "./compiled-lang/fr.json";
import messagesEn from "./compiled-lang/en.json";

const messages = navigator.language === 'fr' ? messagesFr : messagesEn;

function App() {
    return (
        <IntlProvider messages={messages} locale={navigator.language} defaultLocale="en">
            <h1>doloc showcase for react-intl / Format.JS</h1>
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
                        <FormattedMessage id={'simpleMessage'} defaultMessage="Simple message"/>
                    </td>
                    <td>Message referenced by id</td>
                </tr>
                <tr>
                    <td>messageExtractedFromTemplate</td>
                    <td>
                        <FormattedMessage
                            id={'messageExtractedFromTemplate'}
                            defaultMessage="This message was initially defined in App.tsx"
                            description="This is some test message"/>
                    </td>
                    <td>Extracted via `formatjs extract`</td>
                </tr>
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
