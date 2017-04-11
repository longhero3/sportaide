json.courses do
  json.array!(@courses) do |course|
    json.extract! course, :id, :name, :overview, :release_date, :duration, :view
    json.author course.author.try(:fullname)
    json.thumbnail course.course_img.url(:thumb)
    json.author_image course.author.try(:author_image).try(:url,:thumb)
  end
end
