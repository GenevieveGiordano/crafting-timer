import '../styles.css';

const ItemCard = ({ item, isActive, onClick, timeLeft }) => {
  const isReady = timeLeft === 'Ready!';
  const cardClasses = `item-card ${isReady ? 'ready' : isActive ? 'active' : ''}`;

  return (
    <div onClick={onClick} className={cardClasses}>
      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px' }} />
      {isActive && (
        <div className="item-card-overlay">
          {timeLeft}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
