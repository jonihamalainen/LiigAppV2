import { View, FlatList, Text } from "react-native";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { haePelit } from "../redux/pelitSlice";
import { Ottelulistaus } from "../types";
import OtteluLista from "../components/ottelulista";
import { styled } from "nativewind";
import { ActivityIndicator } from "react-native-paper";
import CustomDialog from "../components/dialog";

const StyledView = styled(View);
const StyledText= styled(Text);

export default function Page(): React.ReactElement {

  const dispatch: AppDispatch = useDispatch();

  const pelit: Ottelulistaus[] = useSelector(
    (state: RootState) => state.pelit.peliData
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.pelit.loading
  );

  const error: boolean = useSelector(
    (state: RootState) => state.pelit.error
  );

  const haettu: React.MutableRefObject<boolean> = useRef<boolean>(false);


  useEffect(() => {
    if (!haettu.current) {
      dispatch(haePelit());
    }

    return () => {
      haettu.current = true;
    };
  }, [dispatch]);

  return (
    <StyledView className="flex-1 items-center justify-center w-max">
      {!error
      ? !loading ? (
        <>
          <FlatList
            data={pelit}
            renderItem={({ item }) => <OtteluLista ottelu={item} />}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
          />
        </>
      ) : (
        <>
          <ActivityIndicator animating={true} size={"large"} />
        </>
      )
      : <><StyledText>Hae uudestaan</StyledText><CustomDialog title="Virhe" viesti="Pelien haku epäonnistui, tarkista verkkoyhteys ja yritä uudestaan" /></>
      }
      
    </StyledView>
  );
}
