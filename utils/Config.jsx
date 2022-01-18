const SITE_URL = "http://localhost:3000";

export const Config = {
  menuLinks: [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "Blog",
      path: "/blog",
    },
    {
      displayName: "Contact Me",
      path: `/contact`,
	  dropdownId: 'dropdown-contact',
      levelTwoLinks: [
        {
          displayName: "Here",
          path: "/contact",
        },
        {
          displayName: "Or Here",
          path: "/contact?me=2"
        }
	  ]
    },
    {
      displayName: "Teams",
      path: `/team`,
	  dropdownId: 'dropdown-team',
      levelTwoLinks: [
        {
          displayName: "Team 1",
          path: "/team/1",
        },
        {
          displayName: "Team 2",
          path: "/team/2",
        },
        {
          displayName: "Team 3",
          path: `/team/3`,
        },
      ],
    },
  ],
};
