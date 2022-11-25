# frozen_string_literal: true

def ten_minute_walk?(walk)
  return false if walk.length != 10

  position = { x: 0, y: 0 }
  walk.each do |direction|
    position = update_position(position, direction)
  end
  position[:x].zero? && position[:y].zero?
end

def update_position(position, direction)
  position[:y] += 1 if direction == 'n'
  position[:y] -= 1 if direction == 's'
  position[:x] -= 1 if direction == 'w'
  position[:x] += 1 if direction == 'e'
  position
end
