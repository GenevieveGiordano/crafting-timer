import ItemCard from './ItemCard';
import FormStyles from '../styles/Form.module.scss';
import ButtonStyles from '../styles/Buttons.module.scss';


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
    <div className={FormStyles['form-container']}>
      <form onSubmit={handleSubmit}>

        <div className={FormStyles['label-container']}>

            {/* ItemCard */}
        {item && (
          <div className={FormStyles['item']}>
            <ItemCard
              item={item}
              isActive={false}
              onClick={() => {}}
              timeLeft={''}
              onHold={() => {}}
            />
          </div>
        )}

          <label className={FormStyles['label-group']}>
            <div className={FormStyles['label-title']}>Days:</div>
            <input
                className={FormStyles['form-input']}
                type="number"
                min="0"
                max="99"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
            />
          </label>

          <label className={FormStyles['label-group']}>
            <div className={FormStyles['label-title']}>Hours:</div>
            <input
                className={FormStyles['form-input']}
                type="number"
                min="0"
                max="23"
                value={customHours}
                onChange={(e) => setCustomHours(e.target.value)}
            />
          </label>

          <label className={FormStyles['label-group']}>
            <div className={FormStyles['label-title']}>Minutes:</div>
            <input
                className={FormStyles['form-input']}
                type="number"
                min="0"
                max="59"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
            />
          </label>

          <label className={FormStyles['label-group']}>
            <div className={FormStyles['label-title']}>Seconds:</div>
            <input
                className={FormStyles['form-input']}
                type="number"
                min="0"
                max="59"
                value={customSeconds}
                onChange={(e) => setCustomSeconds(e.target.value)}
            />
          </label>

        </div>


        <div className={FormStyles['label-group']}>
          <button className={ButtonStyles['btn-submit']} type="submit">Submit</button>
          <button className={ButtonStyles['btn-cancel']}type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
