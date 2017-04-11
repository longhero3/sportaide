json.clubs do
  json.array!(@clubs) do |club|
    json.extract! club, :id, :name, :description, :address, :suburb, :postcode, :state
    json.type club.club_type
  end
end
