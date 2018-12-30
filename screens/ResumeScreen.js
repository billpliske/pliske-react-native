//import libraries
import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Header, Left, Icon } from "native-base";
import styled from "styled-components";

// create a component
class ResumeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon
                type="Entypo"
                name="text-document-inverted"
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
                <ContentWrapper>
                    <InnerWrapper>
                        <Title>Resume</Title>
                        <Where>
                            <Item>
                                <Strong>email: </Strong>
                                bpliske@gmail.com
                            </Item>
                            <Item>
                                <Strong>web: </Strong>www.billpliske.com
                            </Item>
                        </Where>

                        <View>
                            <Category>EXPERIENCE</Category>

                            <Position>Front-End Development Manager</Position>
                            <Place>Gannett (Product Division)</Place>
                            <Time>Janaury 2018 - present</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Lead a remote team of front-end
                                    developers/designers across Phoenix, Des
                                    Moines and Cincinnati.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Create workflow for front-end devs to better
                                    work with designers (and other developers)
                                    in creating products for 100+ Gannett
                                    locations.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Train staff to keep on top of the latest
                                    relevent technology to make us faster at our
                                    jobs.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Work strategically with product managers,
                                    other stakeholders, and team members across
                                    the organization.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Frequently communicate with managers and
                                    developers across the division — and country
                                    — to achieve product goals.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Consistently tweak our process to streamline
                                    efforts — having designers do front-end work
                                    has saved the company considerable time by
                                    elimating a lengthy 'design QA' phase.
                                </Item>
                            </Did>

                            <Position>Design Director</Position>
                            <Place>
                                Gannett / Local Digital Solutions Network
                            </Place>
                            <Time>June 2014 - December 2017</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Hands-on leader of user experiences — UI
                                    designs, wireframes, prototypes, etc. — For
                                    iOS, Android and web-based apps in a
                                    fast-paced, Agile development environment.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Create the workflow in which designers work
                                    with developers in creating products for 80+
                                    Gannett locations.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Also led a team of front-end developers, who
                                    put together niche web sites for some of the
                                    100+ Gannett properties. This mostly
                                    consisted of HTML, CSS and JS.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Work with the product managers and owners to
                                    develop a shared vision of a product and
                                    then lead a process to define the experience
                                    and the design, delivering on the product’s
                                    objectives.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Responsible for the creation of effective UI
                                    designs based on business requirements,
                                    delivering end-to-end user experience
                                    solutions for multiple products and
                                    platforms.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Work strategically with other stakeholders
                                    and team members across the organization.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Drive the development and communication of
                                    design guidelines, trends, patterns and
                                    libraries.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Frequently communicate with managers and
                                    developers across the division — and country
                                    — to achieve product goals.
                                </Item>
                            </Did>

                            <Position>Digital Presentation Editor</Position>
                            <Place>Gannett / azcentral.com</Place>
                            <Time>Feb 2009 - June 2014</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Directed the creation of interactive news
                                    graphics in coordination with stakeholders'
                                    needs.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Created a syllabus and taught a staff of
                                    beginners the fundamentals of HTML and CSS.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Formulated graphic workflows and processes
                                    from scratch in order to achieve tight
                                    newsroom deadlines.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Effectively worked cross-departmentally to
                                    achieve goals of major projects (Super Bowl,
                                    immigration, elections)
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Led the presentation of information through
                                    the use of innovative video, quizzes, maps
                                    and (back then) Flash.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Frequently put in charge of presenting the
                                    big stories that mattered most: immigration,
                                    Giffords shooting, elections, Pulitzer
                                    entries and others.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Created annual budget for equipment,
                                    software and training.
                                </Item>
                            </Did>

                            <Position>News Design Director</Position>
                            <Place>Gannett / The Arizona Republic</Place>
                            <Time>Feb. 2006 - Feb. 2009</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Directed a staff of 30+ designers, graphics
                                    artists and illustrators across multiple
                                    locations and shifts.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Critiqued staff work daily via a
                                    self-created website, complementing work
                                    (and why it was good) and creating
                                    before/after examples with work that needed
                                    help.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Responsible for establishing industry
                                    contacts to help search for quality
                                    candidates.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Advanced the visibility of staff design
                                    through promotion and contests.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Attended daily budget meetings to suggest
                                    items needed for the next day's edition and
                                    website.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Heavily involved in creating annual budget
                                    related to equipment, software and training
                                    needs.
                                </Item>
                            </Did>

                            <Position>Associate Editor/Graphics</Position>
                            <Place>Pittsburgh Post-Gazette</Place>
                            <Time>March 2000 - Feb. 2006</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Directed, scheduled and critiqued a staff of
                                    world-class illustrators, designers and
                                    graphics artists.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Proactively trained staff on cutting-edge
                                    Web technologies.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Designed and contributed to the editing of
                                    Pulitzer-winning special section "Trek of
                                    Tears."
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Led a talented staff who won many state,
                                    national and international awards.
                                </Item>
                            </Did>

                            <Position>Marketing & Media Director</Position>
                            <Place>Society for News Design</Place>
                            <Time>2002-2003</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Directed the efforts to promote organization
                                    through events, posters and training.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Responsible for attending and contributing
                                    to biannual corporate meetings, annual
                                    conferences and awards banquets.
                                </Item>
                            </Did>

                            <Position>Deputy Graphics Editor</Position>
                            <Place>Pittsburgh Post-Gazette</Place>
                            <Time>Aug. 1994 - March 2000</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Pioneered post-gazette.com by teaching
                                    myself HTML, and then creating the very
                                    first prototype.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}Learned and taught Flash to
                                    the staff.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Garnered many state, national and
                                    international awards.
                                </Item>
                            </Did>

                            <Position>Graphics Editor</Position>
                            <Place>The Victoria (Texas) Advocate</Place>
                            <Time>March 1993 - Aug. 1994</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Was the first designer hired there, and
                                    happy to say that design inspiration is
                                    still valued there to this day.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}Won several APME state
                                    design awards
                                </Item>
                            </Did>

                            <Position>Graphics Editor</Position>
                            <Place>
                                The Pasadena Citizen (Houston) / The Citizen
                            </Place>
                            <Time>Dec. 1988 - March 1993</Time>
                            <Did>
                                <Item>
                                    {"\u2022" + " "}
                                    Taught myself QuarkXPress right after it
                                    came to market.
                                </Item>
                                <Item>
                                    {"\u2022" + " "}
                                    Dug in, and learned all about the newspaper
                                    production process.
                                </Item>
                            </Did>
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

export default ResumeScreen;
