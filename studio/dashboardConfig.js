export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb4511819f06201718c1b7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2yo76ge7',
                  apiId: 'e702041b-12e1-4808-b312-b0fea5ef6042'
                },
                {
                  buildHookId: '5eb4511922c48e01ec02ea28',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9sjkh583',
                  apiId: '153f5e65-e017-4a84-80bb-13b4431dd2af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rivkaroadproductions/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9sjkh583.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
