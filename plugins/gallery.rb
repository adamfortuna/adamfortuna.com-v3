module Jekyll
  class Gallery < Liquid::Block
    attr_accessor :name

    def initialize(tagname, name, tokens)
      @gallery = name.strip
      super
    end

    def render(context)
      content = super
      lines = content.strip.split("\n").compact.map(&:strip)
      root_url = "http://s.adamfortuna.com"

      dimensions = {
        'col-3' => { width: 244, height: 293, small: 'col-sm-3 col-xs-12' },
        'col-4' => { width: 390, height: 293, small: 'col-sm-4 col-xs-12' },
        'col-5' => { width: 487, height: 293, small: 'col-sm-5 col-xs-12' },
        'col-6' => { width: 585, height: 350, small: 'col-sm-6 col-xs-12' },
        'col-6-tall' => { width: 975, small: 'col-sm-6 col-xs-12' },
        'col-9' => { height: 293, width: 878, small: 'col-sm-9 col-xs-12' },
        'col-12' => { width: 1170, small: 'col-sm-12 col-xs-12' },
        'resized' => { width: 1170, small: 'col-sm-12 col-xs-12' }
      }

      images = lines.collect do |line|
        if /(?<filename>[^\[\]:]+)(?:\[(?<className>\S*)\])?(?:\((?<version>\S*)\))?(?::(?<title>.*))?/ =~ line
          version ||= 'resized'

          "<li class='#{className} #{dimensions[version][:small]} lazy'><a href='#{root_url}/images/galleries/#{@gallery}/#{filename}' data-gallery='#{@gallery}' title='#{title.strip}'><img data-src='#{root_url}/images/galleries/#{@gallery}/#{version}/#{filename}' /></a></li>"
        end
      end

      "<ul class='gallery row clearfix'>" + images.join("") + "</ul>"
    end
  end
end

Liquid::Template.register_tag('gallery', Jekyll::Gallery)
