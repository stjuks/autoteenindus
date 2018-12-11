import React, { Component } from 'react';

import { 
    SectionStyled, TitleStyled, ContentStyled 
} from './styles';

class Section extends Component {
    render() {
        const { 
            children,
            title
        } = this.props;

        return (
            <SectionStyled>
                <TitleStyled>
                    {title}
                </TitleStyled>
                <ContentStyled>
                    {children}
                </ContentStyled>
            </SectionStyled>
        );
    }
}

export default Section;
