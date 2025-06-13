import '../styles.css';

const Form = () => {

return (
<div className='form-container'>
    <form>
        <label className='label-container'>
            <div className='label-group'>
                <div className='item-card'>Item</div>
                <div className='label-title'>Duration (in seconds): </div>
            </div>

            <div className='input-group'>
            <input className='form-input' type="number" name="name" />
            <button className='btn' type="submit">Submit</button>
            </div>
        </label>   
    </form>
</div>
);
};
export default Form;