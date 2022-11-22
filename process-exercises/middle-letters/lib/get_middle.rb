# frozen_string_literal: true

def get_middle(string)
  raise 'Input should be non-empty string.' if string == '' || string.nil?

  length = string.length
  characters_to_return = length.even? ? 2 : 1

  return string.slice(length / 2, characters_to_return) if length.odd?
  return string.slice(length / 2 - 1, characters_to_return) if length.even?
end
