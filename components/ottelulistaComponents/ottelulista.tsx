import { Ottelulistaus } from "../../types";

import { View } from "react-native";
import { styled } from "nativewind";
import OtteluActive from "./otteluActive";
import OtteluEnded from "./otteluEnded";
import OtteluNotStarted from "./otteluNotStarted";
import { Link } from "expo-router";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { haePeli } from "../../redux/yksiPeliSlice";

interface Props {
  ottelu: Ottelulistaus;
}
const StyledView = styled(View);

function OtteluLista({ ottelu }: Props): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const peliHaku = (id: number) => {
    dispatch(haePeli(id.toString()));
  };
  let componentToRender: React.ReactElement | null = null;

  if (!ottelu.started) {
    componentToRender = <OtteluNotStarted ottelu={ottelu} />;
  } else if (ottelu.started && !ottelu.ended) {
    componentToRender = <OtteluActive ottelu={ottelu} />;
  } else if (ottelu.ended) {
    componentToRender = <OtteluEnded ottelu={ottelu} />;
  }

  return (
    <Link
      href={`/ottelu/${ottelu.id}`}
      className="flex mt-5 bg-slate-400 rounded-lg shadow-mdw-screen w-screen border-2"
      style={{ backgroundColor: "#ffcb74" }}
      onPress={() => peliHaku(ottelu.id)}
    >
      <StyledView className="flex p-4 w-screen">{componentToRender}</StyledView>
    </Link>
  );
}

export default OtteluLista;
