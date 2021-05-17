import styled, { css } from 'styled-components';
import './style.scss';
export const smFont = '13px';
export const textWhite ='#fff';
export const btnSm = "7px 16px;";



export const Flex = styled.div`
  display: -webkit-box;     
  display: -moz-box;         
  display: -ms-flexbox;      
  display: -webkit-flex;  
  display: flex; 
  &.justify-content-between{
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
  }
  &.timer{
    justify-content:space-between;
    padding-right:80px;
    margin-top:30px;
    h3{
      font-size:50px;
      margin:0;
      line-height:40px;
    }
    p{
      margin:0;
    }
    @media screen and (max-width: 1024px) {
      flex-direction:row;
      padding-right:0;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction:column;

  }
  &.flex-direction-row{
    @media screen and (max-width: 1024px) {
      flex-direction:row;
    }

  }
`;

export const Container = styled.div`
  max-width:1200px;
  margin: 0 auto;
  padding: 0 15px;
  
`;
export const MainContainer = styled.div`
padding: 15px 0px;

:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
 background:url(../static/images/top-bg.png);
 background-position:right bottom;
 background-repeat:no-repeat;
    height: 221px;
    width:493px;
    opacity: 1;
}
:before{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
 background:url(../static/images/bottom-bg.png);
 background-position:left bottom;
 background-repeat:no-repeat;
    height: 291px;
    width:650px;
    opacity: 1;
}
@media screen and (max-width: 1024px) {
  :before{
    display:none;
  }
  :after{
    display:none;
  }
}

`;
export const RightSection = styled.div`
  padding:0px 80px;
  @media screen and (max-width: 1024px) {
    padding:0;
  }
  
  h1{
    font-size:32px;
    font-family: 'Conv_Proxima Nova Bold';
    
  }
  p{
    line-height:27px;
    max-width:430px;
  }
  @media screen and (max-width: 1024px) {
    margin-top:80px;
    order:1;
  }
`;
export const ContactImg = styled.div`
padding-top:80px;
 img{
   max-width:500px;
 }
 @media screen and (max-width: 1024px) {
  order:2;
  img{
    max-width:100%;
  }
}
`;


export const Main = styled.div`
  height: calc(100vh - 100px);
  .align-center{
    align-items:center;
  }
  @media screen and (max-width: 1024px) {
    height:100%;
  }
`;