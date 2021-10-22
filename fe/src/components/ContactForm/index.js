import PropTypes from 'prop-types';

import { useState } from 'react';
import FormGroup from '../FormGroup';

import { Form, ButtonContainer } from './styles';

import Input from '../input';
import Select from '../select';
import Button from '../button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Input
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup error="Este e-mail não é válido">
        <Input
          placeholder="E-mail"
          error
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="123">Categoria</option>
          <option value="321">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
