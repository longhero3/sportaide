exports.config =
# See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'compiled_components.js'
      order:
        before: [
          '../app-src/react-jsx-components/api/course_api.js.jsx',
          '../app-src/react-jsx-components/api/club_api.js.jsx',
          '../app-src/react-jsx-components/api/weather_api.js.jsx',

          '../app-src/react-jsx-components/actions/nav_actions.js.jsx',
          '../app-src/react-jsx-components/actions/course_details_actions.js.jsx',
          '../app-src/react-jsx-components/actions/course_actions.js.jsx',
          '../app-src/react-jsx-components/actions/club_actions.js.jsx',
          '../app-src/react-jsx-components/actions/weather_actions.js.jsx',
          '../app-src/react-jsx-components/actions/progress_actions.js.jsx',

          '../app-src/react-jsx-components/lessons/course_block.js.jsx',
          '../app-src/react-jsx-components/lessons/lessons_view.js.jsx',
          '../app-src/react-jsx-components/lessons/visible_lessons_view.js.jsx',
          '../app-src/react-jsx-components/newsfeed/newsfeeds_view.js.jsx',

          '../app-src/react-jsx-components/course/course_nav.js.jsx',
          '../app-src/react-jsx-components/course/visible_course_nav.js.jsx',
          '../app-src/react-jsx-components/course/course_tabs.js.jsx',
          '../app-src/react-jsx-components/course/visible_course_tabs.js.jsx',
          '../app-src/react-jsx-components/course/course_view.js.jsx',
          '../app-src/react-jsx-components/course/visible_course_view.js.jsx',

          '../app-src/react-jsx-components/club_view/club_map.js.jsx',

          '../app-src/react-jsx-components/club_view/helpers/balloon_pos.js.jsx',
          '../app-src/react-jsx-components/club_view/helpers/calc_markers_visibility.js.jsx',
          '../app-src/react-jsx-components/club_view/helpers/custom_distance.js.jsx',
          '../app-src/react-jsx-components/club_view/helpers/marker_styles.js.jsx',

          '../app-src/react-jsx-components/club_view/constants/marker_descriptions.js.jsx',

          '../app-src/react-jsx-components/club_view/marker_example.js.jsx',
          '../app-src/react-jsx-components/club_view/main_map_block.js.jsx',
          '../app-src/react-jsx-components/club_view/club_map_main.js.jsx',
          '../app-src/react-jsx-components/club_view/club_details_map.js.jsx',
          '../app-src/react-jsx-components/club_view/visible_club_details_map.js.jsx',
          '../app-src/react-jsx-components/club_view/club_row.js.jsx',
          '../app-src/react-jsx-components/club_view/marker_table.js.jsx',
          '../app-src/react-jsx-components/club_view/visible_marker_table.js.jsx',
          '../app-src/react-jsx-components/club_view/club_details.js.jsx',
          '../app-src/react-jsx-components/club_view/visible_club_details.js.jsx',
          '../app-src/react-jsx-components/club_view/club_details_page.js.jsx',
          '../app-src/react-jsx-components/club_view/club_main_page.js.jsx',


          '../app-src/react-jsx-components/dashboard/progress_course_row.js.jsx',
          '../app-src/react-jsx-components/dashboard/dashboard.js.jsx',

          '../app-src/react-jsx-components/reducers/todos.js.jsx',
          '../app-src/react-jsx-components/reducers/nav_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/courses_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/course_details_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/weather_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/clubs_reducer.js.jsx',
          '../app-src/react-jsx-components/reducers/progress_reducer.js.jsx',
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