export default {
  widgets: [
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
                  buildHookId: '603e63ce821f8405b3b5101d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8mdtff7v',
                  apiId: 'a30df805-9a7d-4c49-b641-b545786e0aed'
                },
                {
                  buildHookId: '603e63cef3d7bc06e525e56a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rh1ih6v2',
                  apiId: 'f4c37330-2f50-4f3b-9392-6d2fe7e64119'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tamjankowska/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rh1ih6v2.netlify.app', category: 'apps'}
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
