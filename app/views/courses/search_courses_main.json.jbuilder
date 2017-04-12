json.results do
  json.category1 do
    json.name "Courses"
    json.results do
      json.array!(@courses) do |course|
        json.extract! course, :id
        json.title course.name
        json.description course.overview
        json.url "/dashboard/lessons/#{course.id}"
      end
    end
  end
end
