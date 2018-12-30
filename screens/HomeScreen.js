//import libraries
import React, { Component } from "react";
import { ScrollView, View, Text, ImageBackground, Image } from "react-native";
import { Header, Left, Icon } from "native-base";
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
                        <Title>
                            <TopHeaderText>Pliske, native.</TopHeaderText>
                        </Title>
                    </StyledLeft>
                </StyledHeader>
                <StyledScrollView>
                    <BackgroundContainer>
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
                    </BackgroundContainer>
                    <Caption>
                        <Strong> Above: </Strong> Dale Chihuly glass exhibit
                        from my 2014 wedding ceremony. Photo by Pat Shannahan
                    </Caption>
                    <AboutView>
                        <Title>About</Title>
                        <AboutText>
                            I’m an upbeat, hands-on manager who has led design
                            teams to international awards, as well as directed
                            front-end dev teams in a fast-paced Agile
                            environment. My experience ranges from print design
                            to front-end development, including teaching myself
                            Java to create apps for the Android platform and
                            working with React and GraphQL.
                        </AboutText>

                        <AboutText>
                            With the ability to manage both dev and design, I
                            bring the potential to save your organization money
                            by hiring one person, instead of two. The same can
                            be said for doing the hands-on work of those two
                            very different jobs. Having experience in both those
                            areas makes me a strong product management candidate
                            as well.
                        </AboutText>

                        <AboutText>
                            Beyond my technical skills with the keyboard, I have
                            <Strong> years of experience </Strong> coaching my
                            staff, finding their strengths and honing their
                            abilities to best serve the company’s goals while
                            helping them fulfill their personal potential.
                        </AboutText>
                        <AboutText>
                            <Strong>I’m a geek.</Strong> When I get home from
                            work, I’m constantly learning new things on my own
                            time, because it’s, well … fun! In 2018, I’ve
                            dabbled in tutorials and messed with projects
                            related to React Native, GraphQL, Next.js, Meteor,
                            Gatsby, Prisma, and more. Love listening to
                            podcasts, especially Syntax, the React Podcast, Shop
                            Talk, Agents of Change — but also my old standbys,
                            like the Tech Guy, TWIT, Tim Ferris and GaryVee.
                        </AboutText>
                        <AboutText>
                            In addition to the jobs below, I've also run a
                            freelance design business. As my day job transformed
                            over the years from designer to director, my side
                            business was a nice way to keep up with technology
                            trends in a field that's constantly moving.
                        </AboutText>
                    </AboutView>
                </StyledScrollView>
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

const StyledScrollView = styled.ScrollView`
    position: relative;
`;

const BackgroundContainer = styled.View`
    position: relative;
    height: 300px;
`;

const StyledBackground = styled.ImageBackground`
    width: 100%;
    height: 300px;
    position: absolute;
    text-align: center;
`;

const Caption = styled.Text`
    font-size: 14px;
    padding: 10px 20px;
`;

const Box = styled.View`
    background-color: rgba(0, 0, 0, 0.3);
    flex: 1;
`;

const Logo = styled.Image`
    width: 90%;
    max-width: 360px;
    height: 90px;
    margin: 105px auto 0 auto;
`;

const AboutView = styled.View`
    padding: 30px 20px 20px 20px;
`;

const Title = styled.Text`
    font-family: "raleway-extralight";
    font-weight: 100;
    font-size: 60px;
    margin-bottom: 5px;
    color: #6d76ff;
`;

const AboutText = styled.Text`
    padding: 0 0 20px 0;
    font-size: 16px;
    line-height: 20px;
`;

const Strong = styled.Text`
    font-weight: bold;
`;

export default HomeScreen;
