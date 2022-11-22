require_relative './leap_years'

def leap_years_in_range(start_year, end_year)
  (start_year..end_year).filter do |year|
    leap_year?(year)
  end
end