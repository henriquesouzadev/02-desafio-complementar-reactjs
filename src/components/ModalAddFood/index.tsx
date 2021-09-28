import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface AddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModalFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food:AddFood) => void;
}

export default function ModalAddFood({isOpen, setIsOpen, handleAddFood}:ModalFoodProps) {
  const formRef = React.useRef(null);

  const handleSubmit = async (data:AddFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};