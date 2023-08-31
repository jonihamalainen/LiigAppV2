import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dialog, Portal } from "react-native-paper";

interface Props {
  visible: boolean;
  selected: (date: Date) => void;
  hide: () => void;
}

function DateTimePickerDialog({ visible, selected, hide }: Props): React.ReactElement {
  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    if (currentDate) {
      selected(currentDate);
      hide();
    }
  };
console.log(visible)
  if(visible){
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hide}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        </Dialog>
      </Portal>
    );
  }else{
    return <></>
  }
 
}

export default DateTimePickerDialog;
