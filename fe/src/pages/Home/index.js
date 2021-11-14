import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const response = await fetch('http://localhost:3001/contacts');
      const contactsList = await response.json();
      setContacts(contactsList);
    }

    loadContacts();
  }, []);

  console.log(contacts);

  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {`${contacts.length} Contatos`}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit contact" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete contact" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
