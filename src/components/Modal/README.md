# modal_by_jsw

This React library offers a customizable modal component designed for effortless integration across a variety of React applications. It allows for customization of text and modal behavior through props, making it highly adaptable to any user interface.

## Features

- **Customizable Content**: Supports passing custom text and additional content.
- **Ease of Integration**: Simplifies integration with any React application.
- **No External Dependencies**: Operates independently without the need for external dependencies.
- **Accessibility Features**: Includes keyboard navigation and focus management to enhance accessibility.

## Installation

You can install the modal component using npm or Yarn:

```bash
npm install modal_by_jsw
# or using Yarn
yarn add modal_by_jsw
```

## Prerequisites

This library requires Node.js version 12 or higher.

## Usage

Here is a simple example to help you get started with the `Modal` in your React application:

```jsx
import React, { useState } from 'react';
import Modal from 'modal_by_jsw';
import PropTypes from 'prop-types';

const BurgerMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuItem, setMenuItem] = useState('');

  // Function to open modal with specific menu item description
  const handleMenuItemClick = (item) => {
    setMenuItem(item);
    setModalIsOpen(true);
  };

  return (
    <div>
      <button onClick={() => handleMenuItemClick('Classic Burger')}>Classic Burger</button>
      <button onClick={() => handleMenuItemClick('Cheese Burger')}>Cheese Burger</button>
      <button onClick={() => handleMenuItemClick('Veggie Burger')}>Veggie Burger</button>
      {modalIsOpen && (
        <Modal setModalIsOpen={setModalIsOpen} text={`You selected: ${menuItem}. Enjoy your meal!`} />
      )}
    </div>
  );
};

export default BurgerMenu;
```
