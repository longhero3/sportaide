json.courses do
  json.array!(@courses) do |course|
    json.extract! course, :id, :name, :overview, :release_date, :duration, :view
    json.author course.author.try(:fullname)
    json.thumbnail course.course_img.url(:thumb)
  end
end
json.keywords @keywords
json.results_found @courses.length
