import '../src/global.js';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
            const sheet = new ServerStyleSheet();
            const page = ctx.renderPage(App => props => sheet.collectStyles( < App {...props }
                    />));
                    const styleTags = sheet.getStyleElement();
                    const initialProps = await Document.getInitialProps(ctx);
                    return {...initialProps, ...page, styleTags };
                }
                render() {
                    return ( <
                        html >
                        <
                        head >
                        <
                        link rel = "shortcut icon"
                        href = "../static/images/favicon.png"
                        type = "image/x-icon" / >
                        <
                        title > Coming Soon < /title> { this.props.styleTags } < /
                        head > <
                        Head / >
                        <
                        body style = {
                            { margin: 0 }
                        } >
                        <
                        Main / >
                        <
                        NextScript / >
                        <
                        /body> < /
                        html >
                    )
                }
            }