import { Header, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
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
            <a href="/">
              <img src={edit} alt="edit contact" />
            </a>
            <button type="button">
              <img src={trash} alt="delete contact" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="edit contact" />
            </a>
            <button type="button">
              <img src={trash} alt="delete contact" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="edit contact" />
            </a>
            <button type="button">
              <img src={trash} alt="delete contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </>
  );
}
