//import libraries
import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image,
    Linking
} from "react-native";
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
                            over the years from designer to director, my{" "}
                            <LinkText
                                onPress={() =>
                                    Linking.openURL(
                                        "https://www.sixfiveagency.com"
                                    )
                                }
                            >
                                side business
                            </LinkText>{" "}
                            was a nice way to keep up with technology trends in
                            a field that's constantly moving.
                        </AboutText>

                        <Subhead>About this app</Subhead>
                        <AboutText>
                            I built this React Native version of my website over
                            a weekend, and picked up some interesting tidbits of
                            knowledge along the way. The first obvious thing:
                            This framework is constantly evolving. Its big
                            sister, React, is much more mature, with a larger
                            ecosystem and array of libraries to choose from.
                            That said, here are a few bullet points from this
                            experience:
                        </AboutText>

                        <Item>
                            {"\u2022" + " "}
                            Expo might get you on your feet quicker, but the
                            Native approach gives you more control.
                        </Item>
                        <Item>
                            {"\u2022" + " "}
                            Set aside some time to get Android Studio up to
                            date, especially if your laptop isn't a gazelle.
                            Mine was still going on throughout the length of a
                            Sunday NFL game.
                        </Item>
                        <Item>
                            {"\u2022" + " "}
                            Convert any custom fonts to TTFs. While WOFF, and
                            WOFF2 fonts are smaller in file size, there were
                            just too many issues.
                        </Item>
                        <Item>
                            {"\u2022" + " "}
                            With Android, unless you <Strong>also</Strong> add a
                            font-weight to your CSS, you'll continue to see
                            Roboto instead of your custom font. Strange, but
                            true.
                        </Item>
                        <Item>
                            {"\u2022" + " "}
                            The bottom virtual "home" bar in Android might cover
                            up some of your lowest content. If so, you'll need
                            to add an extra View container — throw your
                            padding-bottom in that one. Problem solved.
                        </Item>
                        <Item>
                            {"\u2022" + " "}
                            <Strong> Libraries I used: </Strong>{" "}
                            styled-components, native-base, react-navigation,
                            and react-native-vector-icons (awesome).
                        </Item>
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

const Item = styled.Text`
    padding: 0 0 20px 20px;
    font-size: 16px;
    line-height: 21px;
`;

const Subhead = styled.Text`
    font-family: "raleway-bold";
    font-size: 17px;
    padding: 20px 0 5px 0;
`;

const LinkText = styled.Text`
    text-decoration: underline;
    color: #6d76ff;
`;

export default HomeScreen;
