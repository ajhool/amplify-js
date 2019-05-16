# Temporary file to help track modifications that aren't captured in git

To add Storybook to the local environment. How do open source repos account for global CLI packages? Should this be "yarn add @storybook/cli@next --dev"? Would "getstorybook" work?

yarn global add @storybook/cli@next
getstorybook

yarn add -D react -W
yarn add -D @storybook/addon-viewport @storybook/addon-knobs @storybook/react -W

## Decision. Where to place storybooks?
I personally prefer colocation (eg. /storage/somecomponent.tsx & /storage/somecomponent.stories/tsx). However, will instead create \__stories\__ folders next to the \__tests\__ folders within each package