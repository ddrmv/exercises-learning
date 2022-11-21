# frozen_string_literal: true

def leap_year?(year)
  (year % 400).zero?
end
