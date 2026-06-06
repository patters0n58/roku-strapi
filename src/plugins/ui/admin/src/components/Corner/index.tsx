import * as React from 'react';
import { TextInput, Field } from '@strapi/design-system';
import { useIntl } from 'react-intl';

// eslint-disable-next-line react/display-name
export const CornerInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const { attribute, disabled, intlLabel, name, onChange, required, value, error } = props;
  const { formatMessage } = useIntl();

  let label = intlLabel?.id ? formatMessage(intlLabel) : '';
  
  if (!label) {
    label = name.split('.').pop() || name;
  }

  const handleChange = (e: any) => {
    onChange({
      target: {
        name,
        type: attribute.type,
        value: e.target.value,
      },
    });
  };

  return (
    <Field.Root name={name} id={name} error={error} required={required}>
      <Field.Label>{label}</Field.Label>
      <TextInput
        ref={ref}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        value={value || ''}
        placeholder="Enter top left, top right, bottom left, bottom right"
        aria-label={label}
      />
      <Field.Hint />
      <Field.Error />
    </Field.Root>
  );
});

export default CornerInput;
