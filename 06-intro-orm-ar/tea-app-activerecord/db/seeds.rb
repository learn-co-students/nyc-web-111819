[
  {name: "Irish Breakfast Tea", description: "Also great all times of the day!"},
  {name: "Lady Grey", description: "TEA-RRIFIC!"},
  {name: "Chamomille", description: "Just boiled grass"},
  {name: "Sleepy Time", description: "More boiled grass"},
  {name: "Mint", description: "Still grass"},
].each do |tea_attributes_hash|
  Tea.create(tea_attributes_hash)
end