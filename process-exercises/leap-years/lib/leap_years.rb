# frozen_string_literal: true

def leap_year?(year)
  if (year % 400).zero?
    true
  elsif (year % 100).zero?
    false
  else
    (year % 4).zero?
  end
end
