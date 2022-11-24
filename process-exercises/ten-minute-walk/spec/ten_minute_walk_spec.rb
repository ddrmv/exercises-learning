require 'ten_minute_walk'

RSpec.describe '#ten_minute_walk?' do
  it 'returns true on input array lenght 10, false on other length' do
    expect(ten_minute_walk?(['n', 's'])).to eq false
    expect(ten_minute_walk?(['n', 'n', 's', 's'])).to eq false
    expect(ten_minute_walk?(['n', 'n', 'n', 's', 's', 's'])).to eq false
    expect(ten_minute_walk?('nnnnssss'.split(""))).to eq false
    expect(ten_minute_walk?('nnnnnsssss'.split(""))).to eq true
  end
end