import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Display from '../components/display';

describe('Calculator', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Display />);
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('/')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });
});

test('should change symbol when the "+/-" button is clicked', () => {
  const { getByText } = render(<Display />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('+/-'));
  expect(getByText('-9')).toBeInTheDocument();
});
