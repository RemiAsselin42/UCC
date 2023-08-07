import TransferList from '../../components/TransferList'
import MicrophoneApp from '../../components/MicrophoneApp'
import Footer from '../../components/Footer';

const username = "Aypierre"
var ban_words = ["Quoicoubeh", "Cucurucho", "Quackity", "Pagar", "Servidor"]
const selectedLanguageCode = ["fr", "en"];

function Dashboard() {
    return (
        <section id="dashboard">
            <div className="welcome theme-box">
                <h2>Welcome, <strong>{username}</strong></h2>
            </div>
            <div>
                <div className="setting theme-box">
                    <h3>Mic setting</h3>
                    <MicrophoneApp />
                </div>
                <div className="languages theme-box">
                    <h3>Languages</h3>
                    <TransferList selectedLanguageCode={selectedLanguageCode} />
                </div>
            </div>
            <div>
                <div className="banned theme-box">
                    <h3>Banned words</h3>
                    <div className='ban_words'>
                        <ul className="scroll-theme">
                            {ban_words.map((word, index) => (
                                <li key={index}><button type="button" className="cross">X</button>{word}</li>
                            ))}
                        </ul>
                    </div>
                    <form>
                        <input className="theme-input" type="text" placeholder="Add your word..." />
                        <button className="theme-btn"><span>Add</span></button>
                    </form>
                </div>
                <div className="api theme-box">
                    <h3>API Connection</h3>
                    <form className='api-form'>
                        <input type="text"  className="theme-input" placeholder="Enter the api key..." />
                        <button className="theme-btn"><span>Send</span></button>
                    </form>
                </div>
                <Footer />
            </div>
        </section>
    )
}

export default Dashboard