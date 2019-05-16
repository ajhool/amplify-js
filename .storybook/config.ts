import { configure, addDecorator } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator( withKnobs );

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

configureViewport({
  defaultViewport: 'iphone6'
});
