const settings = {
  name: "personal-page",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "my-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://192.168.1.139/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
