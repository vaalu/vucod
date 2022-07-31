import ButtonComp from '../../components/ButtonComp.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/ButtonComp',
  component: { ButtonComp },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    name: 'Button Label',
    cls: 'bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800',
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { ButtonComp },
  template: `
    <div class="flex space-x-2 justify-center" style="padding: 5px; width: 200px; background-color: bisque; text-align: center;">
      <ButtonComp v-bind="$props" />
    </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  name: 'Primary',
  cls: 'bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800',
}

export const Secondary = Template.bind({})
Secondary.args = {
  name: 'Secondary',
  cls: 'bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800',
}

export const Success = Template.bind({})
Success.args = {
  name: 'Success',
  cls: 'bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700',
}

export const Danger = Template.bind({})
Danger.args = {
  name: 'Danger',
  cls: 'bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800',
}

export const Warning = Template.bind({})
Warning.args = {
  name: 'Warning',
  cls: 'bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700',
}

export const Info = Template.bind({})
Info.args = {
  name: 'Info',
  cls: 'bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600',
}

export const Light = Template.bind({})
Light.args = {
  name: 'Light',
  cls: 'bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400',
}

export const Dark = Template.bind({})
Dark.args = {
  name: 'Dark',
  cls: 'bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900',
}

export const Link = Template.bind({})
Link.args = {
  name: 'Link',
  cls: 'bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200',
}
