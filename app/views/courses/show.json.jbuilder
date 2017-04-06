json.extract! @course, :id, :name, :overview, :duration, :view
json.author @course.author.try(:fullname)
json.release_date @course.release_date.strftime("%d/%m/%Y")
json.chapters do
  json.array!(@course.chapters) do |chapter|
    json.extract! chapter, :id, :title, :overview
    json.lessons do
      json.array!(chapter.lessons) do |lesson|
        json.extract! lesson, :title, :transcript, :preferred_url
      end
    end
  end
end
