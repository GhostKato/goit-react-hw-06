import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import { selectContacts } from '../../redux/selectors';

function App() {
  const contacts = useSelector(selectContacts)
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
       {contacts.length !== 0 && (
      <SearchBox />
         )}
      <ContactList/>
    </div>
  );
}

export default App;
