$ ->
  $('.sportaide_search').search(
    type: 'category'
    apiSettings:
      url: '/courses/search_courses_main?term={query}'
    fields:
      results: 'results',
      categoryName: 'name',
      categoryResults: 'results',
      title: 'title',
      id: 'id'
      description: 'description'
    errors:
      noResults: ''
    onSelect: (result, response) ->
      window.location.pathname = result.url
  )
  $('.sportaide_search input').on 'keyup', (event) =>
    if event.keyCode == 13
      window.location.pathname = "/dashboard/lessons/search/#{event.target.value}"

  $('.postcode-search input').on 'keyup', (event) =>
    if event.keyCode == 13
      window.location.pathname = "/dashboard/clubs/club_map/search/#{event.target.value}"

  $('.ui.checkbox').checkbox()