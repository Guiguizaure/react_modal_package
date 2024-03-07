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

### customizable CSS elements

- **modal-backdrop**: The backdrop of the modal.
- **modal**: The modal itself.
- **children**: It could be a `<p>`, a title like `<h2>`, or more. It's the content of the modal.
- **modal-close**: The close button inside the modal.

## API Reference

### Modal Props

- **isOpen**: Boolean indicating if the modal is open or closed.
- **onClose**: Function to be called when the modal needs to be closed.
- **children**: Content to be displayed within the modal.

### Contributing

Contributions are always welcome! If you're interested in helping improve npm-react-ts-modal, please feel free to submit pull requests or open issues to discuss potential features or fixes.
