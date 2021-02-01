import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExclusionsSection from './ExclusionsSection.jsx';

describe('ExclusionsSection', () => {
  it('should not include the selected participant in the exclusions dropdown', async () => {
    const onModifyExclusionsMock = jest.fn();

    render(
      <ExclusionsSection
        participants={[
          { name: 'David', email: 'dnaranjo@gmail.com', exclusions: [] },
          { name: 'Mario', email: 'mario@gmail.com', exclusions: [] },
          { name: 'Pedro', email: 'pedro@gmail.com', exclusions: ['mario@gmail.com'] },
          { name: 'Antonio', email: 'antonio@gmail.com', exclusions: ['mario@gmail.com'] },
        ]}
        onModifyExclusions={onModifyExclusionsMock}
      />,
    );

    const nameInput = screen.getByRole('textbox', { name: /participant/i });
    await userEvent.type(nameInput, 'Da');
    userEvent.click(screen.getByRole('option', { name: /david/i }));

    userEvent.click(screen.getByRole('button', { name: /open_exclusions_dropdown/i }));
    expect(screen.getByRole('option', { name: /mario/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /pedro/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /antonio/i })).toBeInTheDocument();

    userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Pe');
    userEvent.click(screen.getByRole('option', { name: /pedro/i }));

    userEvent.click(screen.getByRole('button', { name: /open_exclusions_dropdown/i }));
    expect(screen.queryByRole('option', { name: /pedro/i })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: /david/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /mario/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /antonio/i })).toBeInTheDocument();
  });

  it('should add participants with exclusions', async () => {
    const onModifyExclusionsMock = jest.fn();

    render(
      <ExclusionsSection
        participants={[
          { name: 'David', email: 'dnaranjo89@gmail.com', exclusions: [] },
          { name: 'Mario', email: 'mario@gmail.com', exclusions: [] },
        ]}
        onModifyExclusions={onModifyExclusionsMock}
      />,
    );

    const nameInput = screen.getByRole('textbox', { name: /participant/i });
    await userEvent.type(nameInput, 'Da');
    userEvent.click(screen.getByRole('option', { name: /david/i }));

    const exclusionsInput = screen.getByRole('textbox', { name: /exclusions/i });
    await userEvent.type(exclusionsInput, 'Mar');
    userEvent.click(screen.getByRole('option', { name: /mario/i }));

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onModifyExclusionsMock).toHaveBeenCalledWith('dnaranjo89@gmail.com', [
      'mario@gmail.com',
    ]);
  });
  it('should show an error when an email already exists in the list of participants', async () => {
    const onModifyExclusionsMock = jest.fn();

    render(
      <ExclusionsSection
        participants={[{ name: 'David', email: 'dnaranjo89@gmail.com', exclusions: [] }]}
        onModifyExclusions={onModifyExclusionsMock}
      />,
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'Pepito');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onModifyExclusionsMock).toHaveBeenCalledWith('participants', [
      { name: 'David', email: 'dnaranjo89@gmail.com' },
    ]);
  });
});
