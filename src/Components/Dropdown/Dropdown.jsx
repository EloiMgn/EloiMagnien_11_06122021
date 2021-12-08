import React from 'react';
import './Dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="dropdown">
        <div
          className="dropdown__title"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex="0"
        >
          <h2 className="dropdown__title__text">{this.props.title}</h2>
          <i
            id="dropdown__title__arrow"
            className={this.state.isToggleOn ? 'dropdown_title_arrow fas fa-chevron-up' : 'dropdown_title_arrow fas fa-chevron-down'}
          ></i>
        </div>
        <div className={this.state.isToggleOn ? 'dropdown__description' : 'dropdown__description hidden'}>
          <div className="dropdown__description__text">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
