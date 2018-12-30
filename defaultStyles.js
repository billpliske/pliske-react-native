import { injectGlobal } from "styled-components";

injectGlobal`
@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 100;
    src: url(/fonts/raleway-thin-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 100;
    src: url(/fonts/raleway-thinitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 200;
    src: url(/fonts/raleway-extralight-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 200;
    src: url(/fonts/raleway-extralightitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/raleway-light-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 300;
    src: url(/fonts/raleway-lightitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/raleway-regular-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 500;
    src: url(/fonts/raleway-italic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 600;
    src: url(/fonts/raleway-bold-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 600;
    src: url(/fonts/raleway-bolditalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/raleway-extrabold-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 700;
    src: url(/fonts/raleway-extrabolditalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 800;
    src: url(/fonts/raleway-black-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 800;
    src: url(/fonts/raleway-blackitalic-webfont.woff2) format("woff2");
}



html, body {
    height: 100%;
}

body > #root {
    height: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a:-webkit-any-link {
    text-decoration: none;
    color: var(--text-link);
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}

:root {
    /**** MAIN ****/
    --very-dark-blue: #201E2E;
    --cornflower: #6D76FF;

    /**** COLORS ****/
    --light-purple: #AB73F4;
    --greenish-teal: #35C5A4;
}`;
