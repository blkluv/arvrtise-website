const useMainNav = () => {
  const navList: NavLink[] = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "https://ads.arvrtise.com",
      text: "Marketplace",
      externalLink: true,
      externalLinkAlt: "external link for ARVRtise Marketplace"
    },
    {
      url: "https://arvrtise.substack.com/",
      text: "Newsletter",
      externalLink: true,
      externalLinkAlt: "external link for ARVRtise Newsletter"
    },
    {
      url: "/about",
      text: "About"
    },
    {
      url: "/contact",
      text: "Contact Us",
      button: true
    }
  ];

  return navList;
};

export default useMainNav;
