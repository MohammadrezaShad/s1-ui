'use client';

import {useEffect, useRef, useState} from 'react';

import {Form, Input, Label, Wrapper} from './pin-input.styled';

const PinInput: React.FC = () => {
  const [codes, setCodes] = useState<string[]>(Array(5).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusNextInput = (el: HTMLInputElement, prevId: number | null, nextId: number | null) => {
    if (el.value.length === 0) {
      if (prevId !== null && inputRefs.current[prevId]) {
        inputRefs.current[prevId]?.focus();
      }
    } else if (nextId !== null && inputRefs.current[nextId]) {
      inputRefs.current[nextId]?.focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleSubmit = () => {
    const pin = codes.join('');
    // TODO: Add form submission logic here
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      const pasteData = e.clipboardData?.getData('text') || '';
      if (pasteData.length <= 5) {
        const newCodes = Array(5).fill('');
        Array.from(pasteData).forEach((d: any, i: number) => {
          newCodes[i] = d;
        });
        setCodes(newCodes);

        newCodes.forEach((code, index) => {
          if (inputRefs.current[index]) {
            inputRefs.current[index]!.value = code;
          }
        });
      }
    };

    inputRefs.current.forEach((input, index) => {
      if (input) {
        input.addEventListener('paste', handlePaste);
        input.addEventListener('keyup', () => {
          const prevId = index > 0 ? index - 1 : null;
          const nextId = index < inputRefs.current.length - 1 ? index + 1 : null;
          focusNextInput(input, prevId, nextId);
        });
      }
    });

    return () => {
      inputRefs.current.forEach(input => {
        if (input) {
          input.removeEventListener('paste', handlePaste);
          input.removeEventListener('keyup', () => {});
        }
      });
    };
  }, []);

  useEffect(() => {
    if (codes.every(code => code.length === 1)) {
      handleSubmit();
    }
  }, [codes]);

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Wrapper>
        {[...Array(5)].map((_, i) => (
          <div key={_ + 1}>
            <Label htmlFor={`code-${i + 1}`}>{`Code ${i + 1}`}</Label>
            <Input
              type='text'
              id={`code-${i + 1}`}
              maxLength={1}
              ref={el => {
                if (el) {
                  inputRefs.current[i] = el;
                }
              }}
              value={codes[i]}
              onChange={e => handleChange(i, e.target.value)}
              required
            />
          </div>
        ))}
      </Wrapper>
    </Form>
  );
};

export default PinInput;
