json.array!(@courses) do |cost_type|
  json.extract! cost_type, :name, :overview, :release_date, :duration, :view
  json.url cost_type_url(cost_type, format: :json)
end
