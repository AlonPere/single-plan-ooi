import { storykit, Meta } from '@wix/yoshi-flow-editor/storybook';

import Settings from './index';

export const { Story: BasicRender } = storykit.getSettings(Settings);

export default {
  title: 'Widget-Settings/Multiplan',
} as Meta;
