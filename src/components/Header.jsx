import '../App.css';
import Chip from '../cecilchip.png';

const Header = () => (
    <div>
        <div className='App-header'>
            <img src={Chip} alt='cecil poker chip' width='65px' height='65px'></img>
            <a href='/#/' className='Header-text'>
                <div> Pomona Poker Club </div>
            </a>
        </div>
        
        <div className="Link-bar">
            <a className='Text-modifier' href='/#/team'>Team</a>
            <a className='Text-modifier' href='/#/sponsors'>Sponsors</a>
            <a className='Text-modifier' href='/#/contact'>Contact</a>
        </div>
        
    </div>
    
)

export default Header;