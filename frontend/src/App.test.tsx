import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { noRecordsTestId } from './components/MoodChart';
import { recipientSelectTestId } from './components/RecipientSelect';

test('renders the recipientTestId dropdown', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(recipientSelectTestId);
  expect(linkElement).toBeInTheDocument();
});
test('simulates clicking the uuid dropdown and displaying no items since no fetch occured', () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  fireEvent.change(getByTestId(recipientSelectTestId), { target: { value: "" } })

  let options = getAllByTestId(recipientSelectTestId)
  expect(options.length).toEqual(1)
  expect(options[0].nodeValue).toEqual(null)
});
test('renders no graphs since no uuid selected', () => {
  const { getByTestId } = render(<App />);
  //The value should be the key of the option
  const linkElement = getByTestId(noRecordsTestId);
  expect(linkElement).toBeInTheDocument();
});

