//import libraries
import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    Linking,
    TouchableOpacity,
    Modal
} from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import styled, { css } from "styled-components";
import portfolio from "../assets/portfolio.js";
import SharedHeader from "../components/SharedHeader";
import SharedModal from "../components/SharedModal";

// create a component
class ProjectsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
        }));
    };

    myOpenDrawer = () => {
        this.props.navigation.openDrawer();
    };

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
                <SharedHeader
                    openMyDrawer={this.myOpenDrawer}
                    toggleModal={this.toggleModal}
                />
                <SharedModal
                    visible={this.state.modalVisible}
                    toggleModal={this.toggleModal}
                />

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

                        <Container>
                            {portfolio.map((item, index) => {
                                return (
                                    <ProjectItem key={item.id}>
                                        <Image
                                            source={{
                                                uri: item.image
                                            }}
                                            alt={item.title}
                                        />

                                        <Project>{item.title}</Project>
                                        <Summary>{item.summary}</Summary>
                                        <Client>
                                            {"\u2022" + " "}
                                            <Strong>Client:</Strong>{" "}
                                            {item.client}
                                        </Client>
                                        <Role>
                                            {"\u2022" + " "}
                                            <Strong>Role:</Strong> {item.role}
                                        </Role>
                                        <Launched>
                                            {"\u2022" + " "}
                                            <Strong>Launched:</Strong>{" "}
                                            {item.launched}
                                        </Launched>
                                        <StyledButton
                                            transparent
                                            title="Visit"
                                            onPress={() =>
                                                Linking.openURL(item.url)
                                            }
                                        >
                                            <VisitText>Visit</VisitText>
                                        </StyledButton>
                                    </ProjectItem>
                                );
                            })}
                        </Container>
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

const Position = styled.Text`
    font-size: 28px;
    line-height: 31px;
    letter-spacing: -1px;
    margin: 30px 0 7px 0;
    color: #6d76ff;
    font-weight: 300;
    font-family: "raleway-bolditalic";
`;

const Strong = styled.Text`
    font-weight: bold;
`;

const Container = styled.View`
    position: relative;
    width: 65%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 30px;
`;

const ProjectItem = styled.View`
    position: relative;
    margin-top: 60px;
`;

const Image = styled.Image`
    padding: 0px;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 110px;
    border-width: 3px;
    border-color: #6d76ff;
`;

const Project = styled.Text`
    position: relative;
    color: #6d76ff;
    font-weight: 400;
    font-size: 32px;
    line-height: 49px;
    margin: 10px 0;
    letter-spacing: -1px;
    font-family: "raleway-blackitalic";
    text-align: center;
`;

const Summary = styled.Text`
    position: relative;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
`;

// -----------------------
// shared styles
// -----------------------

const sharedStyle = css`
    position: relative;
    font-size: 15px;
    line-height: 19px;
    /* border-top: 1px solid #ccc; */
    padding: 7px 0 0 15px;
    margin-top: 10px;
    font-style: italic;
    text-align: center;
`;

const Client = styled.Text`
    ${sharedStyle};
`;

const Role = styled.Text`
    ${sharedStyle};
`;

const Launched = styled.Text`
    ${sharedStyle};
`;

const StyledButton = styled.TouchableOpacity`
    position: relative;
    background-color: #6d76ff;
    padding: 15px 40px;
    margin: 15px auto;
    width: 120px;
`;

const VisitText = styled.Text`
    color: #fff;
    font-family: "raleway-bold";
    text-align: center;
`;

export default ProjectsScreen;
