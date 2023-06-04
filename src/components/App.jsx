import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts:   [...prevState.contacts, {id: nanoid(), name, number,}]
      })
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div className={css.main}>
          <h2>Phonebook</h2>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name</label>
            <input
              className={css.input}
              id={this.nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor={this.numberInputId}>Number</label>
            <input
              className={css.input}
              id={this.numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
            <button type="submit" className={css.button}>
              Add contact
            </button>
          </form>
        </div>
        <div className={css.main}>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            className={css.input}
            id={this.nameInputId}
            type="text"
            name="filter"
            title="Write you request here"
            required
            onChange={this.handleFilterChange}
          />
          <ul className={css.list}>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <>
                  <li key={name} className={css.item}>
                    <p>
                      {name}: {number}
                    </p>
                    <button
                      type="button"
                      className={css.delBtn}
                      onClick={() => this.handleDeleteContact(id)}
                    >
                      Delete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
