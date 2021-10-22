import PropTypes from 'prop-types';
import { useState } from 'react';

import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

import { Form, ButtonContainer } from './styles';

import Input from '../input';
import Select from '../select';
import Button from '../button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setErrors,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  function handleName(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmail(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setErrors({ field: 'email', message: 'Este e-mail não é válido.' });
    } else {
      removeError('email');
    }
  }

  console.log(errors);

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>

      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome"
          error={getErrorMessageByFieldName('name')}
          onChange={handleName}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmail}
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
