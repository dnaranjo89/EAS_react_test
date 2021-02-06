import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import I18nProvider from 'next-translate/I18nProvider';
import ParticipantsWithEmailSection from './ParticipantsWithEmailSection.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import translations from '../../../locales/en-GB/DrawSecretSanta.json';

const mockOnSubmit = jest.fn();

const participantDavid = { name: 'David', email: 'dnaranjo@gmail.com', exclusions: [] };
const participantPedro = { name: 'Pedro', email: 'pedro@gmail.com', exclusions: [] };

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

describe('ParticipantsWithEmailSection', () => {
  it('should add participants', async () => {
    const onParticipantsChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[]}
          onParticipantsChange={onParticipantsChangeMock}
        />
      </ValidationProvider>,
      { wrapper: WrapperProviders },
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'David');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onParticipantsChangeMock).toHaveBeenCalledWith([
      { name: 'David', email: 'dnaranjo89@gmail.com', exclusions: [] },
    ]);
  });
  it('should show an error when an email already exists in the list of participants', async () => {
    const onParticipantsChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[participantDavid]}
          onParticipantsChange={onParticipantsChangeMock}
        />
      </ValidationProvider>,
      { wrapper: WrapperProviders },
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'Pepito');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onParticipantsChangeMock).not.toHaveBeenCalled();
    expect(
      screen.getByText(/This email is already included in the list of participants/),
    ).toBeInTheDocument();
  });

  it('should show an error when a name already exists in the list of participants', async () => {
    const onParticipantsChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[participantDavid]}
          onParticipantsChange={onParticipantsChangeMock}
        />
      </ValidationProvider>,
      { wrapper: WrapperProviders },
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'David');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo892@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onParticipantsChangeMock).not.toHaveBeenCalled();
    expect(
      screen.getByText(/This name is already included in the list of participants/),
    ).toBeInTheDocument();
  });

  it('should show the list of already added participants', async () => {
    const onParticipantsChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[participantDavid, participantPedro]}
          onParticipantsChange={onParticipantsChangeMock}
        />
      </ValidationProvider>,
      { wrapper: WrapperProviders },
    );

    expect(screen.getByText('David (dnaranjo@gmail.com)')).toBeInTheDocument();
    expect(screen.getByText('Pedro (pedro@gmail.com)')).toBeInTheDocument();
  });

  it('should remove participants', async () => {
    const onParticipantsChangeMock = jest.fn();

    render(
      <ParticipantsWithEmailSection
        participants={[participantDavid, participantPedro]}
        onParticipantsChange={onParticipantsChangeMock}
      />,
      { wrapper: WrapperProviders },
    );

    userEvent.click(screen.getByRole('button', { name: /remove david/i }));
    expect(onParticipantsChangeMock).toHaveBeenCalledWith([participantPedro]);
  });
});
