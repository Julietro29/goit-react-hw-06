import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from './Title/Title';
import { ContactsList } from './ContactList/ContactsList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';

import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();
  
  // useEffect(() => {
  // }, []);

  const handleAddContact = newContact => {
    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleChangeSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

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

export default App;