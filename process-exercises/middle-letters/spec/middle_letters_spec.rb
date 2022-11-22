# frozen_string_literal: true

require 'middle_letters'

RSpec.describe '#middle_letters' do
  it 'return same letter on one- or two-letter input' do
    expect(middle_letters('A')).to eq 'A'
    expect(middle_letters('of')).to eq 'of'
  end
end
