import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        hi, Rvfi here. <br />
        I make things sometimes.
      </SectionTitle>
      <SectionText>
      I'm a software engineer and artist based in California. 
      I have great interest in full-stack development, 
      artificial intelligence, human-computer interactions, and everything in between.
      </SectionText>
      <Button onClick={() => window.location.href = 'mailto:1726rafi@gmail.com'}>Say hi!</Button>
    </LeftSection>
  </section>
);

export default Hero;