import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MultiValueInput from './MultiValueInput.jsx';

jest.mock('@material-ui/core/IconButton', () => {
  const ActualIcon = jest.requireActual('@material-ui/core/IconButton');
  const ActualReact = jest.requireActual('React');
  return ActualReact.forwardRef((props, ref) => (
    <div data-testid="AddValueIcon" {...props} ref={ref}>
      <ActualIcon.default />
    </div>
  ));
});

jest.mock('@material-ui/core/Chip', () => {
  const ActualChip = jest.requireActual('@material-ui/core/Chip');
  return props => (
    <div data-testid="Chip">
      <ActualChip.default {...props} />
    </div>
  );
});

jest.mock('@material-ui/core/Input', () => {
  const ActualInput = jest.requireActual('@material-ui/core/Input');
  return props => (
    <div data-testid="Input">
      <ActualInput.default {...props} inputProps={{ 'data-testid': 'Input__input-field' }} />
    </div>
  );
});

const translations = {
  label: 'Input label',
  messageEmpty: 'No items selected',
  placeholder: 'Add items',
};

describe('MultiValueInput', () => {
  it('Should show placeholder when there are no values', () => {
    const { getByPlaceholderText } = render(
      <MultiValueInput name="field1" onChange={() => {}} {...translations} />,
    );
    expect(getByPlaceholderText(translations.placeholder)).toBeTruthy();
  });

  it('Should correctly render values using chips', () => {
    const { getByText, getAllByTestId } = render(
      <MultiValueInput
        name="field1"
        value={['value 1', 'value 2']}
        onChange={() => {}}
        {...translations}
      />,
    );
    expect(getByText('value 1')).toBeTruthy();
    expect(getByText('value 2')).toBeTruthy();
    expect(getAllByTestId('Chip').length).toEqual(2);
  });

  it('Should add value when it contains a comma', () => {
    const onChangeMock = jest.fn();
    const values = [];
    const { queryByTestId } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: 'Value 1,' } };
    const expectedEvent = { target: { name: 'field1', value: ['Value 1'] } };
    fireEvent.change(queryByTestId('Input__input-field'), event);
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should trim values before adding them', () => {
    const onChangeMock = jest.fn();
    const values = [];
    const { queryByTestId } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: '    Value 1,' } };
    const expectedEvent = { target: { name: 'field1', value: ['Value 1'] } };
    fireEvent.change(queryByTestId('Input__input-field'), event);
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should add value when the ENTER key is hit', () => {
    const onChangeMock = jest.fn();
    const values = [];
    const { queryByTestId } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: 'Value 1' } };
    const expectedEvent = { target: { name: 'field1', value: ['Value 1'] } };
    const input = queryByTestId('Input__input-field');
    fireEvent.change(input, event);
    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should add value on input blur', () => {
    const onChangeMock = jest.fn();
    const values = [];
    const { queryByTestId } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: 'Value 1' } };
    const expectedEvent = { target: { name: 'field1', value: ['Value 1'] } };
    const input = queryByTestId('Input__input-field');
    fireEvent.change(input, event);
    fireEvent.blur(input);
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should not mutate the original value when values are added', () => {
    const onChangeMock = jest.fn();
    const values = [];
    const { queryByTestId } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: 'Value 1,' } };
    fireEvent.change(queryByTestId('Input__input-field'), event);
    expect(values).toEqual([]);
  });

  it('Should process the input when a comma-separated list of values is pasted', () => {
    const onChangeMock = jest.fn();
    const { queryByTestId } = render(
      <MultiValueInput name="field1" onChange={onChangeMock} {...translations} />,
    );

    const event = { target: { name: 'field1', value: ' Value ok 1, Value ok 2   ,   ,,' } };
    fireEvent.change(queryByTestId('Input__input-field'), event);

    const expectedEvent = { target: { name: 'field1', value: ['Value ok 1', 'Value ok 2'] } };
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should be possible to remove items', () => {
    const onChangeMock = jest.fn();
    const values = ['Value 1'];
    const { container } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );
    fireEvent.click(container.querySelector('svg'));
    const expectedEvent = { target: { name: 'field1', value: [] } };
    expect(onChangeMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('Should not mutate the original value when values are removed', () => {
    const onChangeMock = jest.fn();
    const values = ['Value 1'];
    const { container } = render(
      <MultiValueInput name="field1" value={values} onChange={onChangeMock} {...translations} />,
    );
    fireEvent.click(container.querySelector('svg'));
    expect(values).toEqual(['Value 1']);
  });
});
