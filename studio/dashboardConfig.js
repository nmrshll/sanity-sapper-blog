export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d02076681092e37164ab0e2',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-1szrajnw',
                  apiId: '4e8aecf3-8140-4731-ab9a-f406ae419e83'
                },
                {
                  buildHookId: '5d0207663111788d9505e16f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q8pcpm3x',
                  apiId: '56f50d4a-6922-4654-b60e-340cacf14aa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nmrshll/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q8pcpm3x.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
