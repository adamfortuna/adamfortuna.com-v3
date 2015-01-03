require 'pry'

module Jekyll
  class Ygallery < Liquid::Tag
    attr_accessor :name

    def initialize(tagname, name, tokens)
      @gallery = name.strip
      super
    end

    def render(context)
      require 'pry'
      content = super
      return if content.include?('&lsquo;')

      gallery_path = "source/_galleries/#{@gallery}.yml"

      gallery = YAML.load(IO.read(gallery_path)) rescue "Could not load #{content}"

      #root_url = "http://s.adamfortuna.com"
      root_url = "http://localhost:4001"

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

      images = []
      columns = 0
      gallery.each_pair do |image, options|
        image_columns = options['columns'].to_i
        if image_columns == 12
          version = 'resized'
        else
          version = "col-#{options['columns']}"
        end
        columns = columns + image_columns
        clearfix = if columns > 12
          columns = image_columns
          'clearfix'
        end
        col_classes = dimensions[version][:small]
        width, height = options[version].split('x') rescue binding.pry

        images << <<-IMAGE
          <li class='#{col_classes} #{clearfix} lazy'>
            <a href='#{root_url}/images/galleries/#{@gallery}/#{image}' data-gallery='#{@gallery}' title='#{options['title'].strip}'>
              <img src='/images/placeholder.gif' height='#{height}' width='#{width}'
                data-src='#{root_url}/images/galleries/#{@gallery}/#{version}/#{image}'
                data-large='#{options['compressed']}'
                data-large-src='#{root_url}/images/galleries/#{@gallery}/compressed/#{image}'
                data-medium='#{options['resized']}'
                data-medium-src='#{root_url}/images/galleries/#{@gallery}/resized/#{image}'
                data-original='#{options[version]}'
              />
            </a>
          </li>
        IMAGE
      end

      "<ul class='gallery row clearfix'>" + images.join("") + "</ul>"
    end
  end
end

Liquid::Template.register_tag('ygallery', Jekyll::Ygallery)
