import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { InnerWrapper, Input, InputErrorMessage, InputWrapper, Label } from './index.styled';
import { InputProps } from './interface';
import { usePasswordEye } from './usePasswordEye';

export const TextInput = React.forwardRef((props: InputProps, ref) => {
  const {
    name = '',
    variant = 'primary',
    type = 'text',
    label,
    className = '',
    optional = true,
    optionalText = '',
    placeholder = '',
    isValid,
    errorText,
    hasFocus = false,
    onBlur,
    onChange,
    onKeyUp,
    autoComplete = 'off',
    disabled,
    id,
    tabIndex,
    isRequired,
    isReadOnly,
    width,
    height,
    textCenter,
    labelClass
  } = props;

  const theme = useContext(ThemeContext);

  const { PasswordEye, isPasswordEyeOpen } = usePasswordEye();

  // const inputRef = useRef<HTMLInputElement>(null);

  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current?.focus();
  //   }
  // }));

  const hasError = isValid === false;

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  return (
    <InputWrapper {...(width ? { width } : {})}>
      <div style={{ position: 'relative' }}>
        {label !== undefined && (
          // onClick={() => inputRef.current?.focus()}
          <Label className={labelClass} variant={variant} htmlFor={id}>
            {label}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {isRequired && <span>*</span>}
          </Label>
        )}
        <InnerWrapper>
          <Input
            className={className}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type={type}
            name={name}
            placeholder={placeholder + (optional ? optionalText : '')}
            isValid={isValid}
            {...(hasFocus ? { autoFocus: true } : {})}
            {...(onChange ? { onChange } : {})}
            {...(autoComplete ? { autoComplete } : {})}
            {...(disabled ? { disabled } : {})}
            {...(id ? { id } : {})}
            {...(tabIndex ? { tabIndex } : {})}
            {...(isRequired ? { required: true } : {})}
            {...(isReadOnly ? { isReadOnly } : {})}
            {...(height ? { height } : {})}
            {...(textCenter ? { textCenter } : {})}
            onBlur={handleOnBlur}
            onKeyUp={onKeyUp}
            ref={ref as any}
            {...props}
            {...(type === 'password' ? { type: isPasswordEyeOpen ? 'text' : 'password' } : {})}
          />
          {type === 'password' && <PasswordEye />}
        </InnerWrapper>
      </div>
      {hasError && <InputErrorMessage className="error_text">{errorText}</InputErrorMessage>}
    </InputWrapper>
  );
});

TextInput.displayName = 'TextInput';
