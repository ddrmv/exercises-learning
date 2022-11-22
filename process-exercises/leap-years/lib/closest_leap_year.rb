# frozen_string_literal: true

require_relative 'leap_years'

def closest_leap_year(given_year)
  return given_year if leap_year?(given_year)
end