import "./CalculatePageStyle.css";

import Card from "../../components/Card/Card";


function CalculatePage() {
    return (
        <div className="CalculatePage">

            <div className="CardTable">
                <Card 
                    title="Card Title 1" 
                    content="This is some card content." 
                    image="/tmp.jpg"/>

                <Card 
                    title="Card Title 2" 
                    content="This is some card content." 
                    image="/tmp.jpg"/>

                <Card 
                    title="Card Title 3" 
                    content="This is some card content." 
                    image="/tmp.jpg"/>
            </div>

            
        </div>
    );
}

export default CalculatePage;