//import libraries
import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
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
                <View>
                    <StyledBackground
                        source={{
                            uri:
                                "https://res.cloudinary.com/billpliske/image/upload/w_600/blue-chihuly.jpg"
                        }}
                    >
                        <Box>
                            <Logo
                                source={{
                                    uri:
                                        "https://res.cloudinary.com/billpliske/image/upload/w_500/bill-logo.png"
                                }}
                            />
                        </Box>
                    </StyledBackground>
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

const StyledBackground = styled.ImageBackground`
    width: 100%;
    height: 200px;
    position: absolute;
    text-align: center;
`;

const Box = styled.View`
    background-color: rgba(0, 0, 0, 0.3);
    flex: 1;
`;

const Logo = styled.Image`
    width: 330px;
    height: 80px;
    margin: 60px auto 0 auto;
`;

export default HomeScreen;
