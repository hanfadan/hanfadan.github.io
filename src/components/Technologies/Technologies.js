import React from 'react';
import { DiMysql, DiZend, DiUnitySmall } from 'react-icons/di';
import { SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop  } from 'react-icons/si';
import { BsMap  } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Usually using Programming tools for college assignment and design tools for freelance
      </SectionText>
      <List>
        <ListItem>
          <SiAdobexd size="2rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with tools <br />
              Adobe XD and Visio
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiMysql size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with tools <br />
              MySQL, phpMyAdmin and PostgreSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiUnitySmall size="3rem" />
          <ListContainer>
            <ListTitle>Game Dev</ListTitle>
            <ListParagraph>
              Experience with Game engine <br />
              Unity
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiAdobeaftereffects size="3rem" />
          <ListContainer>
            <ListTitle>Video Editing</ListTitle>
            <ListParagraph>
              Experience with video editor <br />
              Adobe Premiere, Adobe After Effect, Davinci Resolve
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiAdobephotoshop size="3rem" />
          <ListContainer>
            <ListTitle>Graphics Editing</ListTitle>
            <ListParagraph>
              Experience with graphic editor <br />
              Adobe Photoshop, GIMP, Inkscape
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BsMap size="3rem" />
          <ListContainer>
            <ListTitle>GIS</ListTitle>
            <ListParagraph>
              Experience with mapping <br />
              ArcGIS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
);

export default Technologies;
