# frozen_string_literal: true

def leap_year?(year)
  if (year % 400).zero?
    return true
  elsif (year % 100).zero?
    return false
  end
end
