# frozen_string_literal: true

require 'valid_years'

RSpec.describe '#valid_years?' do
  it 'raises error if the argument is not an integer' do
    expect { valid_years?('2000') }.to raise_error 'Year should be an integer'
  end

  it 'raises error if any argument is a float' do
    expect { valid_years?(2000.2) }.to raise_error 'Year should be an integer'
  end

  it 'raises error if any argument is not an integer' do
    expect { valid_years?(2000, '2004') }.to raise_error 'Year should be an integer'
  end
end
