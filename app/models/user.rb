class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable, :registerable

  has_many :viewed_courses
  has_many :viewed_lessons

  validates :gender, inclusion: {in: ['Male', 'Female']}

  def initialise_viewed_course course
    temp_course = ViewedCourse.find_or_create_by(user: self, course: course)
    course.lessons.each do |lesson|
      ViewedLesson.find_or_create_by(user: self, lesson: lesson)
    end
  end

  def update_progress course, lesson
    view_course = self.viewed_courses.find_by(course: course)
    view_lesson = self.viewed_lessons.find_by(lesson: lesson)
    if view_lesson.completed?
    else
      temp_progress = view_course.progress
      view_lesson.update(completed: true)
      view_course.update(progress: temp_progress + course.avg_complete_rate)
    end

    view_lessons = ViewedLesson.where(lesson: course.lessons.pluck(:id), user: self, completed: true)

    if view_lessons.count == course.lessons.count
      view_course.update(completed: true, progress: 100)
    end

    {viewed_course: view_course, viewed_lesson: view_lesson}
  end
end
