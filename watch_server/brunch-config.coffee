exports.config =
# See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'compiled_components.js'
      order:
        before: [
          '../app-src/react-jsx-components/api/course_api.js.jsx',

          '../app-src/react-jsx-components/actions/nav_actions.js.jsx',
          '../app-src/react-jsx-components/actions/course_actions.js.jsx',

          '../app-src/react-jsx-components/lessons/course_block.js.jsx',
          '../app-src/react-jsx-components/lessons/lessons_view.js.jsx',
          '../app-src/react-jsx-components/lessons/visible_lessons_view.js.jsx',
          '../app-src/react-jsx-components/newsfeed/newsfeeds_view.js.jsx',

          '../app-src/react-jsx-components/reducers/todos.js.jsx',
          '../app-src/react-jsx-components/reducers/nav_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/courses_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/todo_app.js.jsx',

          '../app-src/react-jsx-components/navbar.js.jsx',
          '../app-src/react-jsx-components/footer.js.jsx',
          '../app-src/react-jsx-components/main_view.js.jsx',

          '../app-src/react-jsx-components/containers/nav_link.js.jsx',


          '../app-src/react-jsx-components/root.js.jsx',
          '../app-src/react-jsx-components/index.js.jsx',
        ]
    stylesheets:
      joinTo: 'components.css'
    templates:
      joinTo: 'components.js'
  modules:
    wrapper: 'amd'
    definition: 'amd'

  paths:
    watched: ["../app-src/react-jsx-components"]

    public: "../app/assets/javascripts/react-components/"

  plugins:
    babel:
      presets: ['es2015','react']
      ignore: [
        /^(bower_components|vendor)/
        'app/legacyES5Code/**/*'
      ]
      pattern: /\.(es6|jsx)$/

  npm:
    enabled: false