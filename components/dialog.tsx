import { useState } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

interface ErrorDialogProps {
  title: string;
  viesti: string;
}

function CustomDialog({title, viesti}: ErrorDialogProps): React.ReactElement {
  const [visible, setVisible] = useState(true);
  const hideDialog = () => setVisible(false);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text>{viesti}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Valmis</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default CustomDialog;
