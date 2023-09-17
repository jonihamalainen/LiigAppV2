import { styled } from "nativewind";
import { Text } from "react-native";
import { Ottelulistaus } from "../../types";

interface Props {
    ottelu: Ottelulistaus
}

const StyledText = styled(Text);

function OtteluEnded({ottelu}: Props): React.ReactElement{
return(
    <>
   <StyledText className="text-2xl font-bold">
        {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
      </StyledText>
    </>
)
}
export default OtteluEnded;