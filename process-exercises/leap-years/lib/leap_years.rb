# frozen_string_literal: true

require_relative './valid_years'

def leap_year?(year)
  valid_years?(year)

  if (year % 400).zero?
    true
  elsif (year % 100).zero?
    false
  else
    (year % 4).zero?
  end
end
