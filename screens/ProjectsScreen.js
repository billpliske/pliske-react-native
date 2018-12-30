//import libraries
import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Header, Left, Icon } from "native-base";
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
                    <StyledLeft>
                        <StyledIcon
                            name="menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                        <Title>
                            <TopHeaderText>Pliske, native.</TopHeaderText>
                        </Title>
                    </StyledLeft>
                </StyledHeader>
                <ContentWrapper>
                    <InnerWrapper>
                        <Title>Projects</Title>
                        <Where>
                            <Item>
                                I've done a variety of work over the years.
                                Print design, as a starting point; learning
                                early HTML by creating the first online
                                prototype of post-gazette.com; training my staff
                                on Flash back in the day; and then picking up
                                more skills as technologies came into my view,
                                like{" "}
                                <Strong>
                                    PHP, Javascript, Node, Java for Android
                                    development, React, React Native, Prisma,
                                    SASS, CSS Grid, Meteor, PostGres, Mongo, and
                                    learning GraphQL.
                                </Strong>
                            </Item>
                            <Item>
                                I can provide some other links, depending on the
                                type of work required (ex: React).
                            </Item>
                        </Where>

                        <View>
                            <Category>EXPERIENCE</Category>

                            <Position>Front-End Development Manager</Position>
                        </View>
                    </InnerWrapper>
                </ContentWrapper>
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
    flex-direction: row;
    align-items: flex-start;
`;

const StyledIcon = styled(Icon)`
    color: #ffffff;
    margin-right: 10px;
`;

const TopHeaderText = styled.Text`
    font-size: 24px;
    padding-top: 4px;
    font-weight: normal;
    font-family: "raleway-bold";
    opacity: 0.3;
`;

const StyledHeader = styled(Header)`
    padding: 0px;
    margin: 0;
`;

const ContentWrapper = styled.ScrollView`
    position: relative;
    margin: 0 auto 0 auto;
    padding: 40px 20px 20px 20px;
`;

const InnerWrapper = styled.View`
    padding: 0 0 30px 0;
`;

const Title = styled.Text`
    font-family: "raleway-extralight";
    font-weight: 100;
    font-size: 60px;
    margin-bottom: 5px;
    color: #6d76ff;
`;

const Item = styled.Text`
    margin: 0 0 10px 0;
    font-size: 16px;
    line-height: 21px;
`;

const Where = styled.View`
    margin: 0px 0 10px 0;
`;

const Category = styled.Text`
    margin: 30px 0 0 0;
    font-size: 17px;
    letter-spacing: 14px;
    color: #555555;
    font-family: "raleway-black";
`;

const Position = styled.Text`
    font-size: 28px;
    line-height: 31px;
    letter-spacing: -1px;
    margin: 30px 0 7px 0;
    color: #6d76ff;
    font-weight: 300;
    font-family: "raleway-bolditalic";
`;

const Place = styled.Text`
    font-size: 20px;
    line-height: 22px;
    margin: 2px 0;
`;

const Time = styled.Text`
    font-style: italic;
    margin: 0 0 20px 0;
`;

const Did = styled.View`
    margin: -10px 0 20px 30px;
`;

const Strong = styled.Text`
    font-weight: bold;
`;

export default ProjectsScreen;
