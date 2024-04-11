import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { ContactsList } from './ContactList/ContactsList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

import { getContactsList } from '../auxiliary/localstorage/getContactsList';
import { saveContactsList } from '../auxiliary/localstorage/saveContactsList';

import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';

import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = getContactsList();
    return savedContacts ? savedContacts : [];
  });
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChangeSearch = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    saveContactsList(contacts);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Title>{TITLE}</Title>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleChangeSearch}>
        {SEARCH_LABEL}
      </SearchBox>
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App