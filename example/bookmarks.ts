import TeamBookmarks from '../lib';

export default TeamBookmarks({
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
