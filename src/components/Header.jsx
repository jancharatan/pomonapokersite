import { navbarText } from '../data/cssdata';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => (
    <div>
        <div style={{ height: '75px', background: '#14375c', width: '100%', boxShadow: '0px 1px 3px 3px #14375c'}}>
            <div style={{width: '500px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '14px 0', marginLeft: '4vw'}}>
                <a style={navbarText} href='/#/'>
                    <HomeIcon style={{height: '30px', width: '30px'}} />
                </a>
                <a style={navbarText} href='/#/about'>About</a>
                <a style={navbarText} href='/#/team'>Team</a>
                <a style={navbarText} href='/#/sponsors'>Sponsors</a>
            </div>
        </div>
    </div>
    
)

export default Header;