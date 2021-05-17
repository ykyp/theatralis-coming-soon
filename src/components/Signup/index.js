import React from 'react'
import { Flex } from '../../global.js';
import { SignUpContainer, SignupButton } from './signup.js';


class Index extends React.Component {

    render() {
        return (
            <SignUpContainer>
                <Flex className="flex-direction-row">
                    <input type="email"/>
                    <SignupButton>
                        <button>Sign up</button>
                    </SignupButton>

                </Flex>
                
            </SignUpContainer>
        );
    }
}


export default Index;