import TeamBookmarks from 'team-bookmarks';

export default TeamBookmarks({
  title: "Test", 
  bookmarks: [
    {
      name: 'Bookmarks',
      color: 'green',
      children: [
        {
          name: 'Google',
          url: 'https://google.com',
        },
        {
          name: 'Example Folder',
          children: [
            {
              name: 'Amazon',
              url: 'https://smile.amazon.com',
            },
          ],
        },
      ],
    },
  ],
});
