import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal <br />
      Portofolio
    </SectionTitle>
    <SectionText>
      Just some college student who has large curiousity and willing to learn new things
    </SectionText>
  </LeftSection>
</Section>
);

export default Hero;