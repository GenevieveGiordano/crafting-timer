import Banner from './Banner';
import Updates from './Updates';

import HeaderStyle from '../styles/Header.module.scss';

const Header = () => {

return (
<div className={HeaderStyle['header']}>
    <Banner/>
    <Updates/>

    <div className={HeaderStyle['title']}>
        <div>Fantasy Online 2 Crafting Timers</div>
    </div>
</div>


);
};
export default Header;