import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon, } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef} >
        {Array.from(Array(7).keys()).map((n)=> (
          <ChannelMessage
          key={n} 
          author="Yassix"
          date="28/8/2020"
          content="O pinto é careca!"
        />
        ))}
        

        <ChannelMessage 
          author="YassixBot"
          date="28/8/2020"
          content={
            <>
              <Mention>@Pintex</Mention>, vou te arrancar a cabeçç 
            </>
          }
          hasMention
          isBot
        />   
      </Messages>
 
      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;