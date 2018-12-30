//import libraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import styled from "styled-components";

// create a component
class ProjectsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon
                type="FontAwesome5"
                name="laptop-code"
                style={{ fontSize: 20, color: tintColor }}
            />
        )
    };
    render() {
        return (
            <StyledView>
                <StyledHeader>
                    <Left>
                        <Icon
                            name="menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                </StyledHeader>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>ProjectsScreen</Text>
                </View>
            </StyledView>
        );
    }
}

// define your styles
const StyledView = styled.View`
    flex: 1;
`;

const StyledHeader = styled(Header)`
    padding: 0px;
    margin: 0;
`;

const Styledleft = styled(Left)`
    align-items: flex-start;
`;

export default ProjectsScreen;
