// @vendors
import React, { memo, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
// @Config
import { fromInputWrapper } from '@utils/formHelper';
// @styles
import { StyledInput, PrefixContainer, SuffixContainer, StyledBox } from './styles';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';
import { FormInputProps } from '@utils/formHelper';

export interface InputProps extends SpaceProps, DisplayProps, LayoutProps {
  formInputProps: FormInputProps;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
  type?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  borderColor?: string;
  autocomplete?: string;
  variant?: 'normal' | 'title';
  isValid?: boolean;
  isError?: boolean;
  size?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      formInputProps: {
        id,
        name,
        value,
        placeholder,
        required,
        disabled,
        onChange,
        onFocus,
        onBlur,
      },
      loading = false,
      width = '100%',
      height = null,
      type = 'text',
      prefix = null,
      suffix = null,
      borderColor = null,
      autocomplete = 'on',
      variant = 'normal',
      isValid = false,
      isError = false,
      ...rest
    },
    ref
  ) => {
    if (loading) {
      return <Skeleton width={width} height={height} />;
    }
    let boxHeight = height;
    if (variant === 'title') {
      boxHeight = '3.625rem';
    }
    return (
      <StyledBox
        display="inline-block"
        position="relative"
        width={width}
        variant={variant}
        isValid={isValid}
        isError={isError}
        height={boxHeight || '2.625rem'}
        {...rest}
      >
        {prefix && <PrefixContainer>{prefix}</PrefixContainer>}
        <StyledInput
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value as string | number}
          required={required}
          disabled={disabled}
          placeholder={placeholder || 'Type a text...'}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          hasPrefix={!!prefix}
          hasSuffix={!!suffix}
          borderColor={borderColor}
          autocomplete={autocomplete}
          variant={variant}
          isValid={isValid}
          isError={isError}
          {...rest}
        />
        {suffix && <SuffixContainer>{suffix}</SuffixContainer>}
      </StyledBox>
    );
  }
);

Input.displayName = 'Input';

export default memo(fromInputWrapper<InputProps>(Input));
