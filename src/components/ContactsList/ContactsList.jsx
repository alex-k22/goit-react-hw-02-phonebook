import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ visibleContacts, onDeleteContact }) => (
  <ul className={css.list}>
    {visibleContacts.map(({ id, name, number }) => {
      return (
        <li key={name} className={css.item}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.delBtn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
