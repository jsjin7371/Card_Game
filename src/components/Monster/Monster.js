import './MonsterStyle.css';

const Monster = ({ health }) => {
  return (
    <div className="monster">
      <h2>Monster</h2>
      <img src="/otter-pixilart.png" className="monster-image"/>
      <p>Health: {health}</p>
    </div>
  );
};

export default Monster;