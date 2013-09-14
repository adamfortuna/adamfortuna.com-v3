require 'kramdown'

module Jekyll
  class CreditsTag < Liquid::Block
    def initialize(tag_name, params, tokens)
      @params = params
      super
    end

    def render(context)
      output = Kramdown::Document.new(super.strip.chomp).to_html
      "<div class='credits'><h2>Credits</h2>#{output}</div>"
    end
  end
end

Liquid::Template.register_tag('credits', Jekyll::CreditsTag)
