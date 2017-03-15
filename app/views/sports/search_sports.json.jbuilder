json.results do
  json.category1 do
    json.name "Sport"
    json.results do
      json.array!(@sports) do |sport|
        json.extract! sport, :id
        json.title sport.name
        json.description sport.description
      end
    end
  end

  json.category2 do
    json.name "Injuries"
    json.results do
      json.array!(Sport.take(3)) do |sport|
        json.extract! sport, :id
        json.title sport.name
        json.description sport.description
      end
    end
  end
end
