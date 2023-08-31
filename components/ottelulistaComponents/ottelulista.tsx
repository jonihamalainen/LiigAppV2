import { Ottelulistaus } from "../../types";

import { View } from "react-native";
import { styled } from "nativewind";
import OtteluActive from "./otteluActive";

interface Props {
  ottelu: Ottelulistaus;
}


const StyledView = styled(View);

function OtteluLista({ ottelu }: Props): React.ReactElement {
  
  return (
    <StyledView className="flex items-center justify-center mt-5 bg-slate-400 rounded-lg p-4 shadow-mdw-screen w-screen">
      {!ottelu.ended ? <OtteluActive ottelu={ottelu} /> : null}
    </StyledView>
  );
}

export default OtteluLista;
