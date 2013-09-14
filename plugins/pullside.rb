require 'kramdown'

module Jekyll
  class PullsideTag < Liquid::Block
    def initialize(tag_name, params, tokens)
      @params = params
      super
    end

    def render(context)
      output = Kramdown::Document.new(super.strip.chomp).to_html
      "<div class='pull-#{@params}'>#{output}</div>"
    end
  end
end

Liquid::Template.register_tag('pullside', Jekyll::PullsideTag)
