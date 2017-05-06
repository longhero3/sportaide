require 'rails_helper'

RSpec.describe User, type: :model do
 describe '#initialise_viewed_course' do
  let!(:user) { User.create(email: 'long@long.com', password: '12345678') }
  let!(:user2) { User.create(email: 'long2@long.com', password: '12345678') }
  let!(:course) { Course.create(:name => "asd", :overview => "asd", :release_date => DateTime.now, :view => 0, :duration => 12) }
  let!(:chapter1) { Chapter.create(:course => course) }
  let!(:chapter2) { Chapter.create(:course => course) }
  let!(:lesson1) { Lesson.create(chapter: chapter1) }
  let!(:lesson2) { Lesson.create(chapter: chapter1)}
  let!(:lesson3) { Lesson.create(chapter: chapter1)}
  let!(:lesson4) { Lesson.create(chapter: chapter2)}
  let!(:lesson5) { Lesson.create(chapter: chapter2)}

  context 'create viewed course and viewed lessons' do
    it 'should create exact amount of lessons and course' do
      user.initialise_viewed_course course
      expect(user.viewed_courses.count).to eq 1
      expect(user.viewed_lessons.count).to eq Lesson.count
    end
  end

   context 'create a duplicate' do
     it 'should not increase the number of records' do
       user.initialise_viewed_course course
       user.initialise_viewed_course course
       expect(user.viewed_courses.count).to eq 1
       expect(user.viewed_lessons.count).to eq Lesson.count
     end
   end

   context 'more users engaged' do
     it 'should produce records for each user' do
       user.initialise_viewed_course course
       user2.initialise_viewed_course course
       expect(user.viewed_courses.count).to eq 1
       expect(user.viewed_lessons.count).to eq 5
       expect(user2.viewed_courses.count).to eq 1
       expect(user2.viewed_lessons.count).to eq 5
       expect(ViewedCourse.count).to eq 2
       expect(ViewedLesson.count).to eq 10
     end
   end
 end

 describe '#update_progress' do
   let!(:user) { User.create(email: 'long@long.com', password: '12345678') }
   let!(:user2) { User.create(email: 'long2@long.com', password: '12345678') }
   let!(:course) { Course.create(:name => "asd", :overview => "asd", :release_date => DateTime.now, :view => 0, :duration => 12) }
   let!(:chapter1) { Chapter.create(:course => course) }
   let!(:chapter2) { Chapter.create(:course => course) }
   let!(:lesson1) { Lesson.create(chapter: chapter1) }
   let!(:lesson2) { Lesson.create(chapter: chapter1)}
   let!(:lesson3) { Lesson.create(chapter: chapter1)}
   let!(:lesson4) { Lesson.create(chapter: chapter2)}
   let!(:lesson5) { Lesson.create(chapter: chapter2)}

   before do
     user.initialise_viewed_course course
     user2.initialise_viewed_course course
   end

   context 'choose one lesson' do
     it 'should update the progress of the viewed course' do
       result = user.update_progress course, lesson1
       result = user.update_progress course, lesson2
       result = user.update_progress course, lesson4

       expect(result[:viewed_course].progress).to eq 60
       expect(result[:viewed_lesson].completed).to eq true
       expect(result[:viewed_course].completed).to eq false
     end
   end

   context 'choose same lesson' do
     it 'should retain same progress' do
       result = user.update_progress course, lesson1
       result = user.update_progress course, lesson1

       expect(result[:viewed_course].progress).to eq 20
       expect(result[:viewed_lesson].completed).to eq true
       expect(result[:viewed_course].completed).to eq false
     end
   end

   context 'choose all the lesson' do
     it 'should complete the course' do
       result = user.update_progress course, lesson1
       result = user.update_progress course, lesson2
       result = user.update_progress course, lesson3
       result = user.update_progress course, lesson4
       result = user.update_progress course, lesson5

       expect(result[:viewed_course].progress).to eq 100
       expect(result[:viewed_lesson].completed).to eq true
       expect(result[:viewed_course].completed).to eq true
     end
   end
 end
end