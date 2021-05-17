import styled, { css } from 'styled-components';
import { smFont, textWhite, btnSm} from '../../global.js';


export const SignUpContainer = styled.div`
input{
   border:1px solid #DBDBDB; 
   padding: 14px 5px;
   flex:1;
   font-size:16px;
}

`;
export const SignupButton = styled.div`
button{
background: transparent linear-gradient(71deg, #7D57D1 0%, #D768D9 100%) 0% 0% no-repeat padding-box;
border-radius:0px 4px 4px 0px;
color:${textWhite};
font-size: ${smFont};
padding: 16px 5px;
width:97px;
}

`;
