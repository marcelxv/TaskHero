import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test todo list starts empty
test('renders todo list', () => {
  render(<App />);
  expect(screen.getByTestId('todo-list')).toBeInTheDocument();
}
);

// test todo list add new item

