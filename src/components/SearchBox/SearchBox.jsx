import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/phoneBook/actions';
import s from './SearchBox.module.css';

const SearchBox = () => {  
  
  const dispatch = useDispatch();

  const handleChange = e => {    
    dispatch(setSearchQuery(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
       <span className={s.span}>Find contacts by name</span>
        <input
        className={s.input}        
        type='text'
        onChange={handleChange}
        />
        </label>
    </div>
  );
};

export default SearchBox;