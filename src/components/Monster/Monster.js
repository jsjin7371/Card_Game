import './MonsterStyle.css';

const Monster = ({ health, shake }) => {
  return (
    <div className={`Monster ${shake ? 'shake' : ''}`}>
      <h2>Monster</h2>
      <img src="/otter-pixilart.png" className="Monster-image"/>
      <p>Health: {health}</p>
    </div>
  );
};

export default Monster;