# npm-react-ts-modal

`npm-react-ts-modal` is a lightweight, customizable modal component built with React. It's designed for easy integration into any React project, providing a simple API for displaying modals, dialogs, or any pop-up elements. With support for TypeScript, it ensures type safety and seamless integration into TypeScript projects.

## Features

- **Lightweight & Efficient**: Minimally impacts your bundle size.
- **Easy to Use**: Simplified API for quick integration.
- **Customizable**: Style and behavior can be easily customized.
- **TypeScript Support**: Comes with TypeScript type definitions for a better development experience.

## Installation

You can install `npm-react-ts-modal` using npm:

```bash
npm install npm-react-ts-modal
```

## import

```bash
import Modal from "npm-react-ts-modal";
```

## usage

Here's a quick example to get you started:

```jsx
import React, { useState } from "react";
import Modal from "npm-react-ts-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Your modal content here.</p>
      </Modal>
    </div>
  );
}

export default App;
```

## CSS

I chose not to add any css, so that anyone can easily customize their modal, without needing to override already written css.

### Customizable CSS elements

- **modal-backdrop**: The backdrop of the modal.
- **modal**: The modal itself.
- **children**: It could be a `<p>`, a title like `<h2>`, or more. It's the content of the modal.
- **modal-close**: The close button inside the modal.

### Example

```css
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 15px 30px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}
.modal h4 {
  text-align: start;
  font-size: 18px;
  font-weight: 700;
}

.modal-close {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 28px;
  height: 28px;
  border: none;
  background: black;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}
```

## API Reference

### Modal Props

- **isOpen**: Boolean indicating if the modal is open or closed.
- **onClose**: Function to be called when the modal needs to be closed.
- **children**: Content to be displayed within the modal.

### Contributing

Contributions are always welcome! If you're interested in helping improve npm-react-ts-modal, please feel free to submit pull requests or open issues to discuss potential features or fixes.
