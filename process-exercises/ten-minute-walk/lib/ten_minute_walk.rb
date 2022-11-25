def ten_minute_walk?(walk)
  return false if walk.length != 10
  position = {x: 0, y: 0}
  walk.each do |direction|
    case direction
    when 'n'
      position[:y] += 1
    when 's'
      position[:y] -= 1
    when 'w'
      position[:x] -= 1
    when 'e'
      position[:x] += 1
    end
  end
  return position[:x] == 0 && position[:y] == 0
end