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
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
