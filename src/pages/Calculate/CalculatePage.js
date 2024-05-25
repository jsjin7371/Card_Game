import "./CalculatePageStyle.css";

import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Monster from "../../components/Monster/Monster";
import Player from "../../components/Player/Player";



function CalculatePage() {
    const movePage = useNavigate();
    const [monsterHealth, setMonsterHealth] = useState(100);
    const [playerHealth, setPlayerHealth] = useState(100);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    useEffect(() => {
        if(monsterHealth === 0){
            return movePage("/result");
        }
    }, [monsterHealth, movePage]);

    useEffect(() => {
        if (!isPlayerTurn && monsterHealth > 0) {
          const monsterAttack = setTimeout(() => {
            const damage = Math.floor(Math.random() * 20) + 5; // 몬스터의 공격력
            setPlayerHealth((prevHealth) => Math.max(prevHealth - damage, 0));
            setIsPlayerTurn(true);
          }, 1000); // 몬스터의 공격 딜레이
    
          return () => clearTimeout(monsterAttack);
        }
    }, [isPlayerTurn, monsterHealth]);

    const handleAttack = (damage) => {
        if (isPlayerTurn) {
            setMonsterHealth((prevHealth) => Math.max(prevHealth - damage, 0));
            setIsPlayerTurn(false);
        }
    };

    return (
        <div className="CalculatePage">
            
            <Monster health={monsterHealth}/>

            <Player health={playerHealth} onAttack={handleAttack} />

        </div>
    );
}

export default CalculatePage;