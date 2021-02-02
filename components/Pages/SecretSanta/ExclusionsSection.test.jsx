import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PropTypes from 'prop-types';
import I18nProvider from 'next-translate/I18nProvider';
import ExclusionsSection from './ExclusionsSection.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import translations from '../../../locales/en-GB/DrawSecretSanta.json';

const mockOnSubmit = jest.fn();

const participantDavid = { name: 'David', email: 'dnaranjo@gmail.com', exclusions: [] };
const participantPedro = { name: 'Pedro', email: 'pedro@gmail.com', exclusions: ['Mario'] };
const participantMario = { name: 'Mario', email: 'mario@gmail.com', exclusions: [] };
const participantAntonio = { name: 'Antonio', email: 'antonio@gmail.com', exclusions: ['Mario'] };

const WrapperProviders = ({ children }) => (
  <I18nProvider
    lang="es-ES"
    namespaces={{
      DrawSecretSanta: translations,
    }}
  >
    <ValidationProvider onSubmit={mockOnSubmit}>{children}</ValidationProvider>
  </I18nProvider>
);

WrapperProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('ExclusionsSection', () => {
  it('should not include the selected participant in the exclusions dropdown', async () => {
    const onModifyExclusionsMock = jest.fn();

    render(
      <ExclusionsSection
        participants={[participantDavid, participantMario, participantPedro, participantAntonio]}
        onModifyExclusions={onModifyExclusionsMock}
      />,
      { wrapper: WrapperProviders },
    );

    const nameInput = screen.getByRole('textbox', { name: /participant/i });
    await userEvent.type(nameInput, 'Da');
    userEvent.click(screen.getByRole('option', { name: /david/i }));

    userEvent.click(screen.getByRole('button', { name: /Open exclusions list/i }));
    expect(screen.getByRole('option', { name: /mario/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /pedro/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /antonio/i })).toBeInTheDocument();

    userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Ma');
    userEvent.click(screen.getByRole('option', { name: /mario/i }));

    userEvent.click(screen.getByRole('button', { name: /Open exclusions list/i }));
    expect(screen.getByRole('option', { name: /pedro/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /david/i })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: /mario/i })).not.toBeInTheDocument();
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
      { wrapper: WrapperProviders },
    );

    const nameInput = screen.getByRole('textbox', { name: /participant/i });
    await userEvent.type(nameInput, 'Da');
    userEvent.click(screen.getByRole('option', { name: /david/i }));

    const exclusionsInput = screen.getByRole('textbox', { name: /Can't gift to/i });
    await userEvent.type(exclusionsInput, 'Mar');
    userEvent.click(screen.getByRole('option', { name: /mario/i }));

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onModifyExclusionsMock).toHaveBeenCalledWith('David', ['Mario']);
  });

  it('should not include participants in the dropdown if they already have exclusions', async () => {
    const onModifyExclusionsMock = jest.fn();

    render(
      <ExclusionsSection
        participants={[
          { name: 'David', email: 'dnaranjo89@gmail.com', exclusions: ['Mario'] },
          { name: 'Mario', email: 'mario@gmail.com', exclusions: [] },
        ]}
        onModifyExclusions={onModifyExclusionsMock}
      />,
      { wrapper: WrapperProviders },
    );

    userEvent.click(screen.getByRole('button', { name: /Open participants list/i }));
    expect(screen.queryByRole('option', { name: /david/i })).not.toBeInTheDocument();
  });
});
