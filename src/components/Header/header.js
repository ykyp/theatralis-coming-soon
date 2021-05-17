import styled, { css } from 'styled-components';
import { smFont, textWhite, btnSm} from '../../global.js';


export const HeaderDiv = styled.div`
position:relative;
z-index:9;
button{
background: transparent linear-gradient(78deg, #7D57D1 0%, #D768D9 100%) 0% 0% no-repeat padding-box;
border-radius: 18px;
color:${textWhite};
font-size: ${smFont};
padding:${btnSm};
a{
    text-decoration:none;
    color:${textWhite};
}


}
img{
    height:32px;
}

`;