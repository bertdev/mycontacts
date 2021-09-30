import { Container } from './styles';

import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="My contacts" />

    </Container>
  );
}
