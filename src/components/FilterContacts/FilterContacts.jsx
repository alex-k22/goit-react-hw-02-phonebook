import PropTypes from 'prop-types';
import css from '../Form/Form.module.css';

const FilterContacts = ({value, onChange}) => (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        type="text"
        name="filter"
        title="Write you request here"
        required
        onChange={onChange}
      />
    </>
  );

  FilterContacts.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  export default FilterContacts;