import React from 'react';
import { Modal, Button, Text, ScrollView, Center, VStack } from 'native-base'; // Supondo que você esteja usando NativeBase

// Definindo uma interface para as props do componente
interface ReturnPolicyModalProps {
  header: string;  // Cabeçalho do modal
  content: string; // Conteúdo do modal
}

// Definindo uma interface para os estados do componente
interface ReturnPolicyModalState {
  modalVisible: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const ReturnPolicyModal: React.FC<ReturnPolicyModalProps> = ({ header, content }) => {
  const [state, setState] = React.useState<ReturnPolicyModalState>({
    modalVisible: false,
    size: 'md',
  });

  const handleSizeClick = (newSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'): void => {
    setState((prevState) => ({
      ...prevState,
      size: newSize,
      modalVisible: !prevState.modalVisible,
    }));
  };

  return (
    <>
      <Modal isOpen={state.modalVisible} onClose={() => setState((prev) => ({ ...prev, modalVisible: false }))} size={state.size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>{header}</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Text>{content}</Text>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
             
              <Button onPress={() => setState((prev) => ({ ...prev, modalVisible: false }))}>
                Fechar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <VStack space={4}>
          {["md"].map((size) => (
            <Button onPress={() => handleSizeClick(size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full')} key={size}>
              {`Open ${size} Modal`}
            </Button>
          ))}
        </VStack>
      </Center>
    </>
  );
};

export default ReturnPolicyModal;