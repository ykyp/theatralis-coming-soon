import React from 'react';
import Header from '../src/components/Header';
import Signup from '../src/components/Signup';
import { MainContainer, Container, Flex, ContactImg, Main, RightSection} from '../src/global.js';
import imgtest from '../static/images/group2.svg';



class Index extends React.Component {

    render() {
        return (
            <MainContainer>
                 <Header/>
                 <Main>
                    <Container>
                        <Flex className="align-center ">
                            <ContactImg>
                            <img src={imgtest}/>
                            </ContactImg>
                            <RightSection>
                                <h1>Website Under Construction</h1>
                                <p>
                                We are working on Awesome Website very hard to give you the best experience with this product. Please subscribe to be notified for futher information.
                                </p>
                                <Signup />
                                <Flex className="timer">
                                    <div>
                                        <h3>20</h3>
                                          <p>Days</p>
                                    </div>
                                    <div>
                                        <h3>15</h3>
                                          <p>Hours</p>
                                    </div>
                                    <div>
                                        <h3>10</h3>
                                          <p>Minutes</p>
                                    </div>
                                    <div>
                                        <h3>05</h3>
                                          <p>Seconds</p>
                                    </div>
                                </Flex>
                            </RightSection>

                        </Flex>
                    </Container>
            </Main>
            </MainContainer>
        );
    }
}


export default Index;