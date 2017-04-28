class Quiz < ApplicationRecord
  belongs_to :lesson, inverse_of: :quiz
end
