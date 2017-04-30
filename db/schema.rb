# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170430011720) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admins_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree
  end

  create_table "authors", force: :cascade do |t|
    t.string   "fullname"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "author_image_file_name"
    t.string   "author_image_content_type"
    t.integer  "author_image_file_size"
    t.datetime "author_image_updated_at"
  end

  create_table "chapters", force: :cascade do |t|
    t.string   "title"
    t.text     "overview"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_chapters_on_course_id", using: :btree
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.string   "data_fingerprint"
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["type"], name: "index_ckeditor_assets_on_type", using: :btree
  end

  create_table "clubs", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "address"
    t.string   "suburb"
    t.string   "postcode"
    t.string   "state"
    t.string   "business_category"
    t.string   "lga"
    t.string   "region"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.decimal  "lng",               default: "0.0"
    t.decimal  "lat",               default: "0.0"
    t.integer  "club_type",         default: 1
    t.string   "indoor_outdoor",    default: "outdoor"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name",                                                    null: false
    t.text     "overview",                                                null: false
    t.datetime "release_date",            default: '2017-03-28 05:31:22'
    t.integer  "duration",                default: 0
    t.integer  "view",                    default: 0
    t.datetime "created_at",                                              null: false
    t.datetime "updated_at",                                              null: false
    t.string   "course_img_file_name"
    t.string   "course_img_content_type"
    t.integer  "course_img_file_size"
    t.datetime "course_img_updated_at"
    t.integer  "author_id"
    t.integer  "likes",                   default: 0
    t.integer  "order",                   default: 1
    t.index ["author_id"], name: "index_courses_on_author_id", using: :btree
  end

  create_table "lessons", force: :cascade do |t|
    t.string   "title"
    t.string   "vod_file_name"
    t.string   "vod_content_type"
    t.integer  "vod_file_size"
    t.datetime "vod_updated_at"
    t.text     "transcript"
    t.integer  "chapter_id"
    t.datetime "created_at",                                                             null: false
    t.datetime "updated_at",                                                             null: false
    t.string   "preferred_url",    default: "https://www.youtube.com/embed/XMZYZcoAcU0", null: false
    t.string   "lesson_type",      default: "normal"
    t.index ["chapter_id"], name: "index_lessons_on_chapter_id", using: :btree
  end

  create_table "quizzes", force: :cascade do |t|
    t.integer  "lesson_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lesson_id"], name: "index_quizzes_on_lesson_id", using: :btree
  end

  create_table "sports", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "chapters", "courses"
  add_foreign_key "courses", "authors"
  add_foreign_key "lessons", "chapters"
  add_foreign_key "quizzes", "lessons"
end
