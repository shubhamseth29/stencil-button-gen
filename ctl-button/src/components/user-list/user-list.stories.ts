export default {
  // this creates a ‘Components’ folder and a UserList subfolder
  title: 'Components/UserList',
};

const Template = args => `<user-list users="${args.userData}"></user-list>`;

export const Example = Template.bind({});
Example.args = {
  userData: [
    {
      role: 'User',
      firstName: 'Shubham',
      lastName: 'Seth',
      avatarUrl: 'https://www.gravatar.com/avatar?d=mp',
    },
    {
      role: 'Admin',
      firstName: 'Centilytics',
      lastName: 'Admin',
      avatarUrl: 'https://www.gravatar.com/avatar?d=mp',
    },
  ],
};
