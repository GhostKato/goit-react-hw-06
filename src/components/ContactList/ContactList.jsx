import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/selectors';
import { selectNameFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter); 

  const filteredData = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  ); 

  return (
    <ul className={s.list}>
      {filteredData.map(contact => (
        <li className={s.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}            
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
