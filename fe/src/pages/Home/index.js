import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Herbert</strong>
              <small>Instagram</small>
            </div>
            <span>herbert@seila.com</span>
            <span>(86)99999999</span>
          </div>

          <div className="actions">
            <Link to="/edit/2">
              <img src={edit} alt="edit contact" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete contact" />
            </button>
          </div>
        </Card>

      </ListContainer>

    </Container>
  );
}
