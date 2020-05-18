/**
 * GUIDELINES:
 *  - Put any bookmarks that are directly inside a category at the top of that category above any folders (this will soon be enforced with a sort)
 *  - If the default favicon the page finds is not to your liking or it is not found, there are 2 options:
 *    - Add a [domain -> favicon url] key value pair in `FAVICON_MAP` below if the url is common and might be reused
 *    - Otherwise add an icon field to the bookmark object pointing at a favicon url
 *  - Category colors should be a 600 color from Material Design for consistency (go to https://www.materialui.co/colors, and you can click to copy the hex)
 *  - See `types/globals.d.ts` to get an idea of what the structure looks like for this file
 */
const data: BookmarksData = [
  {
    name: 'Expert App',
    color: '#1E88E5',
    children: [
      {
        name: 'Github',
        children: [
          {
            name: 'Repository',
            url: 'https://github.deere.com/service-operations/expert-app',
          },
          {
            name: 'Wiki',
            url: 'https://github.deere.com/service-operations/expert-app/wiki',
          },
          {
            name: 'PRs',
            url: 'https://github.deere.com/service-operations/expert-app/pulls',
          },
          {
            name: 'Ready PRs',
            url:
              'https://github.deere.com/service-operations/expert-app/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+-label%3A%22Not+Ready%22',
          },
          {
            name: 'Releases',
            url: 'https://github.deere.com/service-operations/expert-app/releases',
          },
          {
            name: 'Issues',
            url: 'https://github.deere.com/service-operations/expert-app/issues',
          },
        ],
      },
      {
        name: 'CI/CD',
        children: [
          {
            name: 'Drone',
            url: 'http://expertapp.ci.ic2.deere.com/service-operations/expert-app',
          },
          {
            name: 'SonarQube',
            icon: 'https://www.sonarqube.org/favicon.ico',
            url: 'http://channel:9000',
          },
          {
            name: 'Veracode',
            icon: 'https://www.veracode.com/favicon.ico',
            url: '',
          },
          {
            name: 'BlackDuck',
            icon:
              'https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/512/rubber-duck-icon.png',
            url: '',
          },
          {
            name: 'BlackDuck Test',
            icon:
              'https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/512/rubber-duck-icon.png',
            url: '',
          },
        ],
      },
      {
        name: 'Firebase',
        children: [
          {
            name: 'Dashboard',
            url: 'https://console.firebase.google.com/u/2/project/expert-services-prod/overview',
          },
          {
            name: 'iOS Crashes',
            url:
              'https://console.firebase.google.com/u/2/project/expert-services-prod/crashlytics/app/ios:com.deere.johndeereexpertapp/issues',
          },
          {
            name: 'Android Crashes',
            url:
              'https://console.firebase.google.com/u/2/project/expert-services-prod/crashlytics/app/android:com.deere.expertapp/issues',
          },
        ],
      },
      {
        name: 'Stores',
        children: [
          {
            name: 'Production App',
            url:
              'https://play.google.com/apps/publish/?account=8614362415428139732#AppDashboardPlace:p=com.deere.expertapp&appid=4974822728714153393',
          },
          {
            name: 'Beta App',
            url:
              'https://play.google.com/apps/publish/?account=8614362415428139732#AppDashboardPlace:p=com.deere.expertapp2&appid=4972052064497000830',
          },
          {
            name: 'Production App',
            url:
              'https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1438811895',
          },
          {
            name: 'Beta App',
            url:
              'https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1500466031',
          },
        ],
      },
    ],
  },
  {
    name: 'Execution Microservice',
    color: '#FFB300',
    children: [
      {
        name: 'GitHub',
        children: [
          {
            name: 'Repository',
            url: 'https://github.deere.com/service-operations/execution-microservice',
          },
          {
            name: 'Deploy Instructions',
            url:
              'https://github.deere.com/service-operations/execution-microservice/wiki/Deploy-Instructions',
          },
        ],
      },
      {
        name: 'Akana',
        children: [
          {
            name: 'DEVL',
            url: '',
          },
          {
            name: 'QUAL',
            url: '',
          },
          {
            name: 'CERT',
            url: '',
          },
          {
            name: 'PROD',
            url: '',
          },
        ],
      },
      {
        name: 'Kibana Logs',
        children: [
          {
            name: 'DEVL',
            url: '',
          },
          {
            name: 'QUAL',
            url: 'http://kibana.log.svapqual.ic-esf.deere.com:5601/app/',
          },
          {
            name: 'CERT',
            url: '',
          },
          {
            name: 'PROD',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Expert Services Backend',
    color: '#e53935',
    children: [
      {
        name: 'GitHub',
        url: 'https://github.deere.com/service-operations/expert-services-backend',
      },
    ],
  },
  {
    name: 'Expert App Web',
    color: '#8E24AA',
    children: [],
  },
  {
    name: 'Miscellaneous',
    color: '#757575',
    children: [
      {
        name: 'Rally',
        children: [
          {
            name: 'Team Board',
            url: 'https://rally1.rallydev.com/#/57070232357d/teamboard',
          },
          {
            name: 'Iteration Status',
            url: 'https://rally1.rallydev.com/#/57070232357d/iterationstatus',
          },
          {
            name: 'All User Stories (Backlog)',
            url: 'https://rally1.rallydev.com/#/57070232357d/userstories',
          },
        ],
      },
      {
        name: 'Voice Channels',
        children: [
          {
            name: 'General',
            url:
              'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjllNTQzMDktZGE2ZC00NTFlLTg0OTAtM2Y1NmRjNWViMTU0%40thread.v2/0?context=%7b%22Tid%22%3a%2239b03722-b836-496a-85ec-850f0957ca6b%22%2c%22Oid%22%3a%22cf9e36bd-e617-4f90-8a93-15adabf577c8%22%7d',
          },
          {
            name: 'Pairing Channel 1',
            url:
              'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmNiZjg2NzktYzdlYi00YzA3LWE5MmItNTM5MzVjYWYwYzcx%40thread.v2/0?context=%7b%22Tid%22%3a%2239b03722-b836-496a-85ec-850f0957ca6b%22%2c%22Oid%22%3a%22cf9e36bd-e617-4f90-8a93-15adabf577c8%22%7d',
          },
          {
            name: 'Pairing Channel 2',
            url:
              'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODlmYmI2N2UtMDVmNi00NGRkLWJmZDAtZGM3MmNjNzM3ZmJl%40thread.v2/0?context=%7b%22Tid%22%3a%2239b03722-b836-496a-85ec-850f0957ca6b%22%2c%22Oid%22%3a%22cf9e36bd-e617-4f90-8a93-15adabf577c8%22%7d',
          },
          {
            name: 'Pairing Channel 3',
            url:
              'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTY5NzgxOWMtZWQ3MS00NzI4LTliMjAtNDAxN2ZhMTY5NDM2%40thread.v2/0?context=%7b%22Tid%22%3a%2239b03722-b836-496a-85ec-850f0957ca6b%22%2c%22Oid%22%3a%22cf9e36bd-e617-4f90-8a93-15adabf577c8%22%7d',
          },
          {
            name: 'Pairing Channel 4',
            url:
              'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzhjYjBjYjQtN2NhMC00OTFhLTk0ZjMtMDhlYWRhZTM2YWE4%40thread.v2/0?context=%7b%22Tid%22%3a%2239b03722-b836-496a-85ec-850f0957ca6b%22%2c%22Oid%22%3a%22cf9e36bd-e617-4f90-8a93-15adabf577c8%22%7d',
          },
        ],
      },
      {
        name: 'Office',
        children: [
          {
            name: 'Outlook',
            url: 'https://outlook.office365.com/owa/?realm=johndeere.com',
          },
          {
            name: 'One Drive',
            icon: 'https://onedrive.live.com/favicon.ico',
            url:
              'https://deere-my.sharepoint.com.office.johndeere.myshn.net/personal/godwinnicholasb_johndeere_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgodwinnicholasb%5Fjohndeere%5Fcom%2FDocuments%2FExpert%20App&parent=',
          },
        ],
      },
      {
        name: 'Other Projects',
        children: [
          {
            name: 'Expert App 1.0',
            url: 'https://github.deere.com/service-operations/expert-services-mobile',
          },
          {
            name: 'CSC Backend',
            url: 'https://github.deere.com/cap-it-customer/customer-services',
          },
        ],
      },
    ],
  },
  {
    name: 'Account Management',
    color: '#43A047',
    children: [
      {
        name: 'Change Password',
        icon:
          'https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/520/2018/05/28211921/cropped-john-deere-icon.png',
        url: 'https://changepass.deere.com',
      },
      {
        name: 'Help Desk',
        icon:
          'https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/520/2018/05/28211921/cropped-john-deere-icon.png',
        url: '',
      },
      {
        name: 'Service Now',
        icon:
          'https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/520/2018/05/28211921/cropped-john-deere-icon.png',
        url: 'https://johndeere.service-now.com',
      },
      {
        name: 'Okta',
        icon: 'https://www.okta.com/favicon.ico',
        url: 'https://johndeere.okta.com',
      },
      {
        name: 'Okta Preview',
        icon: 'https://www.okta.com/favicon.ico',
        url: 'https://johndeere.oktapreview.com',
      },
    ],
  },
];

export const FAVICON_MAP: { [hostname: string]: string } = {
  'github.deere.com': 'https://github.deere.com/fluidicon.png',
  'console.firebase.google.com':
    'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
  'expertapp.ci.ic2.deere.com':
    'https://pbs.twimg.com/profile_images/1106628286107381761/R_wMcCqN_400x400.png',
  'appstoreconnect.apple.com': 'https://www.apple.com/favicon.ico',
  'play.google.com': 'https://play.google.com/apps/publish/gwt/favicon.ico',
};

export default data;
