export const styles = `

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
