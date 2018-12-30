import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image
} from "react-native";
import styled from "styled-components/native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

// const { width } = Dimensions.get("window");
class App extends React.Component {
    render() {
        return <AppDrawerNavigator />;
    }
}

// COMPONENTS HERE

const CustomDrawerComponent = props => (
    <Wrapper>
        <MenuHeader>
            <Icon source={require("./assets/billcartoon_400x400.jpg")} />
        </MenuHeader>
        <ScrollView>
            <Title>billpliske.com</Title>
            <StyledDrawerItems {...props} />
        </ScrollView>
    </Wrapper>
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Resume: ResumeScreen,
        Projects: ProjectsScreen
    },
    {
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: "#ffffff",
            labelStyle: {
                fontSize: 20
            }
        }
    }
);

// STYLES HERE

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #6d76ff;
`;

const MenuHeader = styled.View`
    height: 150px;
    background-color: #6d76ff;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-family: raleway-bolditalic;
    font-size: 28px;
    color: #ffffff;
    padding: 0 0 18px 0px;
    text-align: center;
`;

const Icon = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;

const StyledDrawerItems = styled(DrawerItems)`
    font-size: 25px;
`;

// const Title = styled.Text`
//     color: #6d76ff;
//     font-size: 50px;
//     line-height: 50px;
//     text-align: center;
//     font-family: "raleway-black";
//     letter-spacing: -2px;
// `;

export default App;
