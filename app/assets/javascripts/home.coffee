$ ->
  $('.sportaide_search input').on 'keyup', (event) =>
    if event.keyCode == 13
      window.location.pathname = "/dashboard/lessons/search/#{event.target.value}"
