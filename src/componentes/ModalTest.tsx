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
     <Modal isOpen={isErrorModalVisible} onClose={() => setErrorModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tente novamente</Modal.Header>
          <Modal.Body>
            <Text>{error}</Text>
            {/* Você pode adicionar componentes adicionais aqui */}
            <Text color="red.500">Por favor, verifique suas credenciais e tente novamente.</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group>
              <Button onPress={() => setErrorModalVisible(false)}>Fechar</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ReturnPolicyModal;