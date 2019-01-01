//import libraries
import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import styled from "styled-components";
import { Icon } from "native-base";

// create a component
class SharedModal extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { toggleModal } = this.props;
        return (
            <StyledModal
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <ModalView>
                    <InnerView>
                        <CloseIcon
                            name="close-circle"
                            type="MaterialCommunityIcons"
                            onPress={toggleModal}
                        />
                        <TextWrapperView>
                            <ModalSubhead>Libraries used</ModalSubhead>

                            <ModalItem>
                                {"\u2022" + " "}
                                styled-components
                            </ModalItem>

                            <ModalItem>
                                {"\u2022" + " "}
                                native-base
                            </ModalItem>

                            <ModalItem>
                                {"\u2022" + " "}
                                react-navigation
                            </ModalItem>

                            <ModalItem>
                                {"\u2022" + " "}
                                react-native-vector-icons
                            </ModalItem>
                        </TextWrapperView>
                    </InnerView>
                </ModalView>
            </StyledModal>
        );
    }
}

// define your styles
const StyledModal = styled.Modal`
    flex: 1;
    background-color: black;
`;

const ModalView = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);
`;

const InnerView = styled.View`
    position: relative;
    width: 290px;
    margin: 80px auto;
    background-color: #6d76ff;
    padding: 15px 25px;
    border-width: 4px;
    border-color: #fff;
    border-radius: 5px;
`;

const TextWrapperView = styled.View`
    padding-bottom: 15px;
`;

const ModalText = styled.Text`
    color: #fff;
`;

const ModalItem = styled.Text`
    font-size: 16px;
    line-height: 21px;
    color: #fff;
    padding-bottom: 8px;
`;

const ModalSubhead = styled.Text`
    font-family: "raleway-bolditalic";
    font-weight: normal;
    font-size: 25px;
    padding: 20px 0 15px 0;
    color: #fff;
`;

const CloseIcon = styled(Icon)`
    position: absolute;
    color: #ffffff;
    right: 10px;
    top: 10px;
    font-size: 28px;
`;

export default SharedModal;
