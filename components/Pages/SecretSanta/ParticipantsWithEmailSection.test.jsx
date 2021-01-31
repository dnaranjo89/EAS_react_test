import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ParticipantsWithEmailSection from './ParticipantsWithEmailSection.jsx';

describe('ParticipantsWithEmailSection', () => {
  it('should add participants', async () => {
    const onFieldChangeMock = jest.fn();

    render(<ParticipantsWithEmailSection participants={[]} onFieldChange={onFieldChangeMock} />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'David');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onFieldChangeMock).toHaveBeenCalledWith('participants', [
      { name: 'David', email: 'dnaranjo89@gmail.com' },
    ]);
  });
  it('should show an error when an email already exists in the list of participants', async () => {
    const onFieldChangeMock = jest.fn();

    render(
      <ParticipantsWithEmailSection
        participants={[{ name: 'David', email: 'dnaranjo89@gmail.com' }]}
        onFieldChange={onFieldChangeMock}
      />,
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'Pepito');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onFieldChangeMock).toHaveBeenCalledWith('participants', [
      { name: 'David', email: 'dnaranjo89@gmail.com' },
    ]);
  });
});
