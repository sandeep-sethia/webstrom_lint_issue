
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { ModuleTestA/componentTestOneComponent } from './module-test-a/component-test-one.component';
import { ModuleTestA/componentTestOneModule } from './module-test-a/component-test-one.module';

export default {
  title: 'ModuleTestA/componentTestOne',
  component: ModuleTestA/componentTestOneComponent,
  decorators: [
    moduleMetadata({
      imports: [ModuleTestA/componentTestOneModule],
    }),
  ],
} as Meta;

export const Overview: Story = (args: ModuleTestA/componentTestOneComponent) => ({
  props: args
})