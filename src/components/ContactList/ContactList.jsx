import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/actions';
import { selectСontacts, selectSearchQuery } from '../../redux/phoneBook/selectors';

const ContactList = () => {

  const contacts = useSelector(selectСontacts);  
   const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch(); 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery) ||
    contact.number.includes(searchQuery)
  );

   const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <Contact
            deleteContact={() => handleDeleteContact(contact.id)}
            name={contact.name}
            number={contact.number}            
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
