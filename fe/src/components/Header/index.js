import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="My contacts" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}
