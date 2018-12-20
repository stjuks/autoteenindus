import React, { Component } from 'react';

import { 
    SectionStyled, 
    TitleStyled, 
    ContentStyled, 
    TitleTextStyled, 
    ExpandIconStyled
} from './styles';

class Section extends Component {
    state = {
        isOpened: false
    }

    render() {
        const { 
            children,
            title,
            color
        } = this.props;

        const {
            isOpened
        } = this.state;

        return (
            <SectionStyled>
                <TitleStyled color={color} onClick={() => this.setState({ isOpened: !isOpened })}>
                    <TitleTextStyled>
                        {title}
                    </TitleTextStyled>
                    <img src="chevron-down.svg" alt="expand" />
                </TitleStyled>
                <ContentStyled isOpened={isOpened}>
                    {children}
                </ContentStyled>
            </SectionStyled>
        );
    }
}

export default Section;
