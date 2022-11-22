# frozen_string_literal: true

require_relative './leap_years'
require_relative './valid_years'

def leap_years_in_range(start_year, end_year)
  valid_years?(start_year, end_year)

  start_year, end_year = end_year, start_year if start_year > end_year

  (start_year..end_year).filter do |year|
    leap_year?(year)
  end
end
