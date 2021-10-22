import PropTypes from 'prop-types';
import { useState } from 'react';

import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

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

  const isFormatValid = (name && errors.length === 0);

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

  function handlePhone(event) {
    setPhone(formatPhone(event.target.value));
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
          value={name}
          placeholder="Nome"
          error={getErrorMessageByFieldName('name')}
          onChange={handleName}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          placeholder="E-mail"
          type="email"
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmail}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          maxLength="15"
          placeholder="Telefone"
          onChange={handlePhone}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="123">Categoria</option>
          <option value="321">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormatValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
