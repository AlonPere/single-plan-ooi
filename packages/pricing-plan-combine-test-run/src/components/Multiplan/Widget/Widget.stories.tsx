import { storykit, Meta } from '@wix/yoshi-flow-editor/storybook';

import Widget from './index';

export const { Story: BasicRender } = storykit.getWidget(Widget);

export default {
  title: 'Widget/Multiplan',
} as Meta;
