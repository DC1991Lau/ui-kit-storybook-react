import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
    --background: #FFFFFF;
    --primary: #61C877;
    --secondary: #2E384D
    
    --green: #33CC95;
    --orange: #FF754C
    --white: #FFFFFF;
    --red: #E62E4D;
    --dark: #242731
  }

  body,
input,
textarea,
select,
button {
  font: 400 1rem "Poppins", sans-serif;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

img,
fieldset,
a img {
  border: none;
}

input,
button {
  margin: 0;
  padding: 0;
  border: 0;
}

div,
input,
textarea,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
a:focus {
  outline: none;
}

button{
  background:none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}

a {
cursor: pointer;
}

`;
