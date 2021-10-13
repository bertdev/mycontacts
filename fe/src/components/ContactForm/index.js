import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';

import { Form, ButtonContainer } from './styles';

import Input from '../input';
import Select from '../select';
import Button from '../button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>

      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup error="Este e-mail não é válido">
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select placeholder="Categoria">
          <option value="123" selected>Categoria</option>
          <option value="321">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
