import '../styles.css';
import Banner from './Banner';
import Updates from './Updates';
const Header = () => {

return (
<div className='header'>
    <div className='title'>
        <h1>Fantasy Online 2 Crafting Timers</h1>
    </div>
    <Updates/>
    <Banner/>
</div>


);
};
export default Header;