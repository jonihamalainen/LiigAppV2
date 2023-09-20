import { View, FlatList, Text } from "react-native";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { haePelit } from "../redux/pelitSlice";
import { Ottelulistaus } from "../types";
import OtteluLista from "../components/ottelulistaComponents/ottelulista";
import { styled } from "nativewind";
import { ActivityIndicator } from "react-native-paper";
import CustomDialog from "../components/dialogComponents/dialog";
import { Stack } from "expo-router";
import CustomIcon from "../components/headerComponents/customIcon";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { paivanPelit } from "../utils/pelitUtils";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page(): React.ReactElement {
  const [date, setDate] = useState(new Date());

  const [show, setShow] = useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate: Date | undefined = selectedDate;
    if (currentDate) {
      setShow(false);
      setDate(currentDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const dispatch: AppDispatch = useDispatch();

  const pelit: Ottelulistaus[] = useSelector(
    (state: RootState) => state.pelit.peliData
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.pelit.loading
  );

  const error: boolean = useSelector((state: RootState) => state.pelit.error);

  const haettu: React.MutableRefObject<boolean> = useRef<boolean>(false);

  const paivaPelit: Ottelulistaus[] = paivanPelit(pelit, date);

  useEffect(() => {
    if (!haettu.current) {
      dispatch(haePelit());
    }

    return () => {
      haettu.current = true;
    };
  }, [dispatch]);

  return (
    <StyledView
      className="flex-1 items-center justify-center w-max"
      style={{ backgroundColor: "#087CA7" }}
    >
      <Stack.Screen
        options={{
          headerLeft: (props) => (
            <CustomIcon
              iconType="calendar"
              onIconPress={showDatepicker}
            />
          ),
        }}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {!error ? (
        !loading ? (
          paivaPelit.length > 0 ? (
            <>
              <StyledText className="text-xl mt-1">
                {date.toLocaleDateString("fi-FI")} ottelut
              </StyledText>
              <FlatList
                data={paivaPelit}
                renderItem={({ item }) => <OtteluLista ottelu={item} />}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={10}
              />
            </>
          ) : (
            <StyledText className="text-xl">
              {date.toLocaleDateString("fi-FI")} ei otteluita
            </StyledText>
          )
        ) : (
          <>
            <ActivityIndicator
              animating={true}
              size={"large"}
            />
          </>
        )
      ) : (
        <>
          <StyledText>Hae uudestaan</StyledText>
          <CustomDialog
            title="Virhe"
            viesti="Pelien haku epäonnistui, tarkista verkkoyhteys ja yritä uudestaan"
          />
        </>
      )}
    </StyledView>
  );
}
