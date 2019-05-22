import { configure } from '@storybook/react';
// import { configureViewport } from '@storybook/addon-viewport';
// import { withKnobs } from '@storybook/addon-knobs';

// addDecorator( withKnobs );

// automatically import all files ending in *.stories.js
const req = require.context('../packages/aws-amplify-react/__stories__', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// configureViewport({
//   defaultViewport: 'iphone6'
// });
