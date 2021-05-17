import React from 'react'
import Link from "next/link";
import Logo from '../../../static/images/logo.svg';
import { Container, Flex } from '../../global.js';
import { HeaderDiv } from './header.js';


class Index extends React.Component {

    render() {
        return (
            <HeaderDiv>
                <Container>
                    <Flex className="justify-content-between flex-direction-row">
                        <Link href="/"><a><img src={Logo} /></a></Link>
                        <div>
                           <button><Link href="/"><a>Conatct us</a></Link></button> 
                        </div>

                    </Flex>
                </Container>
            </HeaderDiv>
        );
    }
}


export default Index;