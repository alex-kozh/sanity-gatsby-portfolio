export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dfd17baee2d9f7f7e0fcdbb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7nh47ska',
                  apiId: 'afa32811-0666-4b19-a074-c22d99ae1182'
                },
                {
                  buildHookId: '5dfd17bae91cba3380f913ad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-17ys2k1j',
                  apiId: '8277e12a-f03d-4796-8e51-fba2e7c28378'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alex-kozh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-17ys2k1j.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
