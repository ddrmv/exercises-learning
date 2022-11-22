# frozen_string_literal: true

require 'get_middle'

RSpec.describe '#get_middle' do
  it 'return same letter on one- or two-letter input' do
    expect(get_middle('A')).to eq 'A'
    expect(get_middle('of')).to eq 'of'
  end

  it 'returns middle letter from odd-length string' do
    expect(get_middle('testing')).to eq 't'
  end

  it 'returns middle two letters from even-length string' do
    expect(get_middle('middle')).to eq 'dd'
  end
end
