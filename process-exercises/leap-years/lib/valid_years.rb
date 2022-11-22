# frozen_string_literal: true

def valid_years?(*args)
  args.each do |arg|
    raise 'Year should be an integer' unless arg.is_a? Integer
  end
end
