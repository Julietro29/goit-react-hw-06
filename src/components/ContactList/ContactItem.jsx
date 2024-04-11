import styles from './ContactItem.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import { CustomButton } from '../CustomButton/CustomButton';
import { CAPTION_DELETE } from '../../auxiliary/constants';

export const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <CustomButton onClick={() => onDeleteContact(id)} typeBtn={'button'}>
        {CAPTION_DELETE}
      </CustomButton>
    </>
  );
};

