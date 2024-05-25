import "./LobbyPageStyle.css";

import CustomButton from "../../components/CustomButton/CustomButton";

function LobbyPage() {
    return (
        <div className="LobbyPage">
            
            <CustomButton text="start" width={256} routePage="calculate"/>

        </div>
    );
}

export default LobbyPage;