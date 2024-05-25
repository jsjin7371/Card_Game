import "./CustomButtonStyle"
import { Button, Primary, Text } from "./CustomButtonStyle"
import { useNavigate } from "react-router-dom";


const CustomButton = ({text, width, routePage = ""}) => {
/**
 * @param {string} routePage 이동 페이지
 * NULL->MainPage, calculate -> CalculatePage, statistics -> StatisticsPage
 */

    const movePage = useNavigate();
    const onButtonClick = () =>{
        return movePage("/"+routePage)
    }

    return(
        <Button style={{width: width}} onClick={onButtonClick}>
            <Primary>
                <Text>{text}</Text>
            </Primary> 
        </Button>

    )
}

export default CustomButton