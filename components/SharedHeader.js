//import libraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Header, Left, Right, Icon } from "native-base";

// create a component
class SharedHeader extends Component {
    render() {
        const { openMyDrawer, toggleModal } = this.props;
        return (
            <StyledHeader>
                <StyledLeft>
                    <StyledIcon name="menu" onPress={openMyDrawer} />
                    <Title>
                        <TopHeaderText>Pliske, native.</TopHeaderText>
                    </Title>
                </StyledLeft>
                <StyledRight>
                    <StyledRightIcon
                        name="info-circle"
                        type="FontAwesome5"
                        onPress={toggleModal}
                    />
                </StyledRight>
            </StyledHeader>
        );
    }
}

// define your styles
const StyledHeader = styled(Header)`
    padding: 0px;
    margin: 0;
`;

const StyledLeft = styled(Left)`
    flex: 1;
    padding-left: 20px;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 5px;
`;

const StyledRight = styled(Right)`
    flex: 1;
    padding-right: 20px;
    flex-direction: row;
    align-items: flex-end;
`;

const StyledRightIcon = styled(Icon)`
    color: #ffffff;
    margin-right: 10px;
    opacity: 0.5;
`;

const StyledIcon = styled(Icon)`
    color: #ffffff;
    margin-right: 10px;
`;

const Title = styled.Text`
    font-family: "raleway-extralight";
    font-weight: 100;
    /* font-size: 60px; */
    margin-bottom: 5px;
    color: #6d76ff;
`;

const TopHeaderText = styled.Text`
    font-size: 24px;
    padding-top: 4px;
    font-weight: normal;
    font-family: "raleway-bold";
    opacity: 0.3;
`;

export default SharedHeader;
