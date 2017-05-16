json.clubs do
  json.array!(@clubs) do |club|
    json.extract! club, :id, :name, :description, :address, :suburb, :postcode, :state, :lat, :lng, :indoor_outdoor
    json.type club.club_type
  end
end
json.center do
  json.lat @lat
  json.lng @lng
end
json.zoom 12
json.keywords @keywords
json.results_found @clubs.length
