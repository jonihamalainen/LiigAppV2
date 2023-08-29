import { View, Text, FlatList } from "react-native";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { haePelit } from "../redux/pelitSlice";
import { Ottelulistaus } from "../types";
import OtteluLista from "../components/ottelulista";
import { styled } from "nativewind";

const StyledText = styled(Text)

const StyledView = styled(View);

export default function Page(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const pelit: Ottelulistaus[] = useSelector(
    (state: RootState) => state.pelit.peliData
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.pelit.loading
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
    <StyledView className="flex-1 items-center justify-center my-6 w-max">
      {!loading ? (
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
          <StyledText>Ladataan</StyledText>
        </>
      )}
    </StyledView>
  );
}
