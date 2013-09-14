require 'nokogiri'
require 'active_support'

module CustomLiquidFilters
  def lead_line(input)
    line = input.split("\n").first
    Nokogiri::HTML::Document.parse(line).text()
  end

  def beginning(input)
    Nokogiri::HTML::Document.parse(input).text()
  end

  def remove_linenumbers(input)
    input.gsub(/\<td\ class="gutter"\>.+?\<\/td\>/m, ' ')
  end
end

Liquid::Template.register_filter CustomLiquidFilters