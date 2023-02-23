import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Countdown from "./Countdown";

function App() {
    return (
        <div className="App">
            <main className="main">
                <section className="firstSection">
                    <h1 className="title">We're launching soon</h1>
                    <section className="centered">
                        <Countdown />
                    </section>
                </section>

                <footer className="footer">
                    <div className="smLinks">
                        <FontAwesomeIcon
                            className="smLink"
                            fontSize={32}
                            color="rgba(191, 191, 191, 0.5)"
                            icon={faFacebook}
                        />
                        <FontAwesomeIcon
                            className="mdlIcon smLink"
                            fontSize={32}
                            color="rgba(191, 191, 191, 0.5)"
                            icon={faPinterest}
                        />
                        <FontAwesomeIcon
                            fontSize={32}
                            className="smLink"
                            color="rgba(191, 191, 191, 0.5)"
                            icon={faInstagram}
                        />
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
