$ ->
  $('.sportaide_search').search(
    type: 'category'
    apiSettings:
      url: '/sports/search_sports?term={query}'
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
      console.log(result.id)
  )