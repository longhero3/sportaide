json.courses do
  json.array!(@top_courses) do |viewed_course|
    json.id viewed_course.course.id
    json.course_name viewed_course.course.name
    json.start_date viewed_course.created_at.strftime("%d/%m/%Y")
    json.progress viewed_course.progress
    json.completed viewed_course.completed
  end
end