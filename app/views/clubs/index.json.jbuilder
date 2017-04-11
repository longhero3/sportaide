json.clubs do
  json.array!(@clubs) do |club|
    json.extract! club, :id, :name, :description, :address, :suburb, :postcode, :state, :type
  end
end
