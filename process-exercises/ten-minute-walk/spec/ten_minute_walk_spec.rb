require 'ten_minute_walk'

RSpec.describe '#ten_minute_walk?' do
  it 'returns true on input array lenght 10, false on other length' do
    expect(ten_minute_walk?(['n', 's'])).to eq false
    expect(ten_minute_walk?(['n', 'n', 's', 's'])).to eq false
    expect(ten_minute_walk?(['n', 'n', 'n', 's', 's', 's'])).to eq false
    expect(ten_minute_walk?('nnnnssss'.split(""))).to eq false
    expect(ten_minute_walk?('nnnnnsssss'.split(""))).to eq true
  end

  context 'keeps track of location'
  it 'returns true if start and end location are the same' do
    expect(ten_minute_walk?('nnnwwsssee'.split(""))).to eq true
  end

  it 'returns false if start and end location are different' do
    expect(ten_minute_walk?('nnnwwssses'.split(""))).to eq false
  end
end