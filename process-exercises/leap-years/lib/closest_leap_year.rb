# frozen_string_literal: true

require_relative 'leap_years'

def closest_leap_year(given_year)
  valid_years?(given_year)
  
  difference = 0

  loop do
    return given_year + difference if leap_year?(given_year + difference)
    return given_year - difference if leap_year?(given_year - difference)

    difference += 1
  end
end
