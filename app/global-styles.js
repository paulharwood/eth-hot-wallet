import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    font-weight:300 !important;
  }

  a, a:visited, a:active {
    color:#ff0265;
  }
  .ant-btn-primary {
    background-color:#ff0265 !important;
    border-color:#ff0265 !important;
  }

  .ant-btn-default {
    background-color:#EFF1F3 !important;
    border-color:#EFF1F3 !important;
  }
  .ant-spin-blur:after {
    opacity:0 !important;
  }
  button.ant-btn {
    width: 90%;
    border-radius: 50px;
    margin-bottom: 6px;
    padding: 8px;
    min-height: 47px !important;

}
button.ant-btn.ant-btn-default {
    background-color: transparent !important;
    border-color: rgba(150,150,150,0.7) !important;
    color: #444;
}

.ant-modal-mask {
    background-color: #ffffff !important;
    background-color: rgba(255,255,255, 0.65) !important;
}
  html,
  body {

    background: rgb(255,255,255);
  }

  html{
  margin:0;
  padding:0;
  overflow: hidden;

  }
  body{
  position: absolute;
  width:100%;
  height:100%;
  overflow: auto;
  }

  body {
    font-family: Lato, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family:  Lato, Roboto,  Helvetica, Arial, sans-serif;
  }

  #app {
    background: rgb(255,255,255);
    min-height: 100%;
    min-width: 100%;
    color:#EFF1F3;
  }

  h1, h2, h3, h4, h5, h6 {
    color:#EFF1F3;
  }
  p,
  label {
    line-height: 1.5em;
  }

  body {
    text-align: center;
  }
  hr {
    width: 200px;
    text-align:center !important;
    margin: 0 auto !important;
  }
`;
