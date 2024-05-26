import "./CalculatePageStyle.css";

import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Monster from "../../components/Monster/Monster";
import Player from "../../components/Player/Player";



function CalculatePage() {
    const movePage = useNavigate();
    const [monsterHealth, setMonsterHealth] = useState(100);
    const [playerHealth, setPlayerHealth] = useState(100);
    const [playerShake, setPlayerShake] = useState(false);
    const [monsterShake, setMonsterShake] = useState(false);

    useEffect(() => {
        if(monsterHealth === 0){
            return movePage("/result");
        }
    }, [monsterHealth, movePage]);

    const handleAttack = (damage) => {
        //플레이어 공격
        setMonsterShake(true);
        setMonsterHealth((prevHealth) => Math.max(prevHealth - damage, 0));

        //몬스터 공격
        setTimeout(() => {
            setMonsterShake(false);
            const monsterDamage = Math.floor(Math.random() * 20) + 10;
            setPlayerShake(true);
            setPlayerHealth((prevHealth) => Math.max(prevHealth - monsterDamage, 0));
        }, 500);
    
        setTimeout(() => setPlayerShake(false), 1000);
    };
    

    return (
        <div className="CalculatePage">
            
            <Monster health={monsterHealth} shake={monsterShake}/>

            <Player health={playerHealth} onAttack={handleAttack} shake={playerShake}/>

        </div>
    );
}

export default CalculatePage;