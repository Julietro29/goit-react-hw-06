import styles from './ContactsList.module.css';
import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contacts}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};