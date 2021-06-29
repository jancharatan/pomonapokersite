import '../App.css'
import HomeIcon from '@material-ui/icons/Home';

const Header = () => (
    <div>
        <div style={{ height: '75px', background: '#14375c', width: '100%', boxShadow: '0px 1px 3px 3px #14375c'}}>
            <div className="navbar-width" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '14px 0', marginLeft: '4vw'}}>
                <a className="navbar-text" href='/#/'>
                    <HomeIcon className="icon-header" />
                </a>
                <a className="navbar-text" href='/#/about'>About</a>
                <a className="navbar-text" href='/#/team'>Team</a>
                <a className="navbar-text" href='/#/sponsors'>Sponsors</a>
            </div>
        </div>
    </div>
    
)

export default Header;