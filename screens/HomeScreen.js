//import libraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import styled from "styled-components";

// create a component
class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon
                type="FontAwesome"
                name="home"
                style={{ fontSize: 24, color: tintColor }}
            />
        )
    };
    render() {
        return (
            <StyledView>
                <StyledHeader>
                    <StyledLeft>
                        <StyledIcon
                            name="menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </StyledLeft>
                </StyledHeader>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>HomeScreen</Text>
                </View>
            </StyledView>
        );
    }
}

// define your styles
const StyledView = styled.View`
    flex: 1;
`;

const StyledLeft = styled(Left)`
    flex: 1;
    padding-left: 20px;
`;

const StyledIcon = styled(Icon)`
    color: #ffffff;
`;

const StyledHeader = styled(Header)`
    padding: 0px;
    margin: 0;
`;

const Styledleft = styled(Left)`
    align-items: flex-start;
`;

export default HomeScreen;
