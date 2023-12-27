import React, { useEffect } from 'react';

import Button from '../Button';

import styled from 'styled-components';
import toastImage from '../../../assets/toast.png';
import Toast from '../Toast';
import { ToastVariant, VARIANT_OPTIONS } from '../../types';


const CustomWrapper = styled.div`
  padding: 64px 32px;
  max-width: 800px;
  margin: 0 auto;
`;

const CustomHeader = styled.header`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 64px;
  min-height: 300px;
`;

const CustomImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  width: 250px;
`;

const CustomHeaderH1 = styled.h1`
  position: relative;
  font-size: 4.25rem;
  line-height: 1.1;
  padding-bottom: 32px;
  color: white;
  text-shadow:
    0px 0px 10px hsl(250deg 40% 16% / 0.5),
    0px 0px 20px hsl(250deg 40% 16% / 0.5),
    0px 0px 40px hsl(250deg 40% 16% / 0.5);
`;

const ControlsWrapper = styled.div`
  color-scheme: light;
  outline: 2px dashed hsl(250deg 80% 80% / 0.6);
  outline-offset: 4px;
  border-radius: 4px;
  background: white;
  color: black;
  padding: 16px;
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  /*
    This is the height when a row contains a text input.
    We specify it to prevent a layout shift when dismiss-after
    is toggled on/off.
  */
  min-height: 3rem;
`;

const Label = styled.label`
  flex-basis: 160px;
  text-align: right;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const MessageInput = styled.textarea`
  display: block;
  width: 100%;
  height: 4rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  flex: 1;
`;

const RadioWrapperLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100px;
`;


function ToastPlayground(): React.ReactElement {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState<ToastVariant>(VARIANT_OPTIONS[0]);

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVariant(event.target.value as ToastVariant);
  }

  useEffect(() => {
    console.log(`variant changed to ${variant}`)
  }, [variant])

  useEffect(() => {
    console.log(`message set to ${message}`)
  }, [message])

  return (
    <CustomWrapper>
      <CustomHeader>
        <CustomImage alt="Cute toast mascot" src={toastImage}/>
        <CustomHeaderH1>Toast Playground</CustomHeaderH1>
      </CustomHeader>
      <Toast message={message} variant={variant} />
      <ControlsWrapper>
        <Row>
          <Label
            htmlFor="message"
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </Label>
          <InputWrapper>
            <MessageInput id="message" value={message} onChange={handleMessageChange}/>
          </InputWrapper>
        </Row>

        <Row>
          <Label>Variant</Label>
          {
            VARIANT_OPTIONS.map((v) => (
              <RadioWrapper key={v}>
                <RadioWrapperLabel htmlFor={`variant-${v}`}>
                  <input
                    id={`variant-${v}`}
                    type="radio"
                    name="variant"
                    checked={v === variant}
                    value={v}
                    onChange={handleVariantChange}
                  />
                  {v}
                </RadioWrapperLabel>
              </RadioWrapper>
            ))
          }
        </Row>

        <Row>
          <Label />
          <RadioWrapper>
            <Button>Pop Toast!</Button>
          </RadioWrapper>
        </Row>
      </ControlsWrapper>
    </CustomWrapper>
  );
}

export default ToastPlayground;
