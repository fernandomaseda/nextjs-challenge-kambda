import React, { forwardRef, memo, ReactNode } from 'react';
import styled from 'styled-components';
import Box from '@components/Box';
import Text from '@components/Text';
import type { InputProps } from '@components/Input/Input';
import Input from '@components/Input/';
import { SpaceProps, DisplayProps, LayoutProps, StylesProps } from 'styled-system';

const HintText = styled(Text)`
  font-weight: regular;
  margin-top: 1.25rem;
  color: ${({ theme: { colors } }) => colors.n_60};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  @media (min-width: 711px) {
    margin-top: 0.25rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  }
`;

// Returns form inputs validation status based on schema
export const statusInput = ({ succesComponet, errorComponet, name, allFields, errors }) => {
  const value = allFields[name];
  const errorForm = errors[name];
  if (value && !errorForm) {
    return succesComponet;
  }
  if (errorForm) {
    return errorComponet;
  }
  return null;
};

export interface FormInputProps {
  id: string;
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  hint?: string;
  containerProps?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// A HOC to wrap form controlled inputs
export const fromInputWrapper = <T extends InputProps>(
  InputComponent: React.ForwardRefExoticComponent<InputProps | T>
) =>
  memo(
    forwardRef<HTMLInputElement, FormInputProps & Omit<T, 'formInputProps'>>(
      (
        {
          id,
          name,
          placeholder,
          value,
          checked,
          onChange,
          onFocus,
          onBlur,
          required,
          disabled,
          label,
          hint,
          containerProps = {},
          ...rest
        },
        ref
      ) => (
        <Box width="100%" display="flex" flexDirection="column" {...containerProps}>
          {label && (
            <Text
              fontSize="xs"
              fontWeight="semi_bold"
              mb="0.25rem"
              textTransform="uppercase"
              color="n_60"
            >
              {label}
              {required && (
                <Text fontSize="inherit" fontWeight="extra_bold" color="s_50" ml="0.25rem">
                  *
                </Text>
              )}
            </Text>
          )}
          <InputComponent
            formInputProps={{
              id,
              name,
              placeholder,
              value: value === undefined ? checked : value,
              onChange,
              onFocus,
              onBlur,
              required,
              disabled,
            }}
            ref={ref}
            {...rest}
          />
          {hint && <HintText>{hint}</HintText>}
        </Box>
      )
    )
  );
