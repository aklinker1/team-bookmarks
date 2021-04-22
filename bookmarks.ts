import { defineConfig } from "./src/defineConfig";

export default defineConfig({
  title: "Test Custom Bookmarks",
  repoUrl: "https://github.com/aklinker1/team-bookmarks",
  bookmarks: [
    {
      name: "Example",
      color: "red",
      children: [
        {
          name: "Google",
          url: "https://google.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/aklinker1",
          icon: "https://github.githubassets.com/apple-touch-icon-180x180.png",
        },
        {
          name: "Help",
          children: [
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
            },
          ],
        },
      ],
    },
    {
      name: "Example 2",
      color: "green",
      children: [
        {
          name: "Google",
          url: "https://google.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/aklinker1",
          icon: "https://github.githubassets.com/apple-touch-icon-180x180.png",
        },
        {
          name: "Help",
          children: [
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
            },
          ],
        },
      ],
    },
  ],
});
