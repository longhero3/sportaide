json.extract! @course, :id, :name, :overview, :duration, :view
json.author @course.author.try(:fullname)
json.author_image @course.author.try(:author_image).try(:url,:thumb)
json.release_date @course.release_date.strftime("%d/%m/%Y")
json.chapters do
  json.array!(@course.chapters.order(:created_at)) do |chapter|
    json.extract! chapter, :id, :title, :overview
    json.lessons do
      json.array!(chapter.lessons.order(:created_at)) do |lesson|
        json.extract! lesson, :title, :transcript, :preferred_url
      end
    end
  end
end
