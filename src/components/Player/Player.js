import "./PlayerStyle.css"

import Card from "../Card/Card";

const Player = ({ health, onAttack }) => {
    return (
        <div className="Player">
            <div>
                <h2>Player</h2>
                <p>Health: {health}</p>
            </div>

            <div className="CardTable">

                <Card 
                    title="Attack 1" 
                    content="This is some card content." 
                    image="/tmp.jpg"
                    onClick={() => onAttack(10)} />
                
                <Card 
                    title="Attack 2"
                    content="This is some card content." 
                    image="/tmp.jpg"
                    onClick={() => onAttack(20)} />
                
                <Card 
                    title="Attack 3" 
                    content="This is some card content." 
                    image="/tmp.jpg"
                    onClick={() => onAttack(30)} />

            </div>
        </div>
    );
};

export default Player;
