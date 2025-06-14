import '../styles.css';
import ItemCard from './ItemCard';

const Form = ({   
        item,
        customDays,
        setCustomDays,
        customHours,
        setCustomHours,
        customMinutes,
        setCustomMinutes,
        customSeconds,
        setCustomSeconds,
        onSubmit,
        onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    onSubmit();
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>

        <div className='label-container'>

            {/* ItemCard */}
        {item && (
          <div style={{ padding: '10px', textAlign: 'center', justifyItems: 'center', pointerEvents: 'none' }}>
            <ItemCard
              item={item}
              isActive={false}
              onClick={() => {}}
              timeLeft={''}
              onHold={() => {}}
            />
          </div>
        )}

          <label className='label-group'>
            <div className='label-title'>Days:</div>
            <input
                className='form-input'
                type="number"
                min="0"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
            />
          </label>

          <label className='label-group'>
            <div className='label-title'>Hours:</div>
            <input
                className='form-input'
                type="number"
                min="0"
                max="23"
                value={customHours}
                onChange={(e) => setCustomHours(e.target.value)}
            />
          </label>

          <label className='label-group'>
            <div className='label-title'>Minutes:</div>
            <input
                className='form-input'
                type="number"
                min="0"
                max="59"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
            />
          </label>

          <label className='label-group'>
            <div className='label-title'>Seconds:</div>
            <input
                className='form-input'
                type="number"
                min="0"
                max="59"
                value={customSeconds}
                onChange={(e) => setCustomSeconds(e.target.value)}
            />
          </label>

        </div>


        <div className='input-group'>
          <button className='btn-submit' type="submit">Submit</button>
          <button className='btn-cancel' type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
