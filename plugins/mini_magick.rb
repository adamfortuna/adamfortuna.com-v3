require 'mini_magick'

module Jekyll
  module JekyllMinimagick
    class GeneratedImageFile < Jekyll::StaticFile
      # Initialize a new GeneratedImage.
      #   +site+ is the Site
      #   +base+ is the String path to the <source>
      #   +dir+ is the String path between <source> and the file
      #   +name+ is the String filename of the file
      #   +preset+ is the Preset hash from the config.
      #
      # Returns <GeneratedImageFile>
      def initialize(site, base, dir, name, preset)
        @site = site
        @base = base
        @dir  = dir
        @name = name
        @dst_dir = preset.delete('destination')
        @src_dir = preset.delete('source')
        @format = preset.delete('format')
        @commands = preset
      end
   
      # Obtains source file path by substituting the preset's source directory
      # for the destination directory.
      #
      # Returns source file path.
      def path
        File.join(@base, @name)
      end
   
      # Use MiniMagick to create a derivative image at the destination
      # specified (if the original is modified).
      #   +dest+ is the String path to the destination dir
      #
      # Returns false if the file was not modified since last time (no-op).
      def write(dest)
        dest_path = File.join(@dst_dir, @name)
        
        puts "#{dest_path}"
   
        return false if File.exist? dest_path and !modified?
   
        @@mtimes[path] = mtime
   
        FileUtils.mkdir_p(File.dirname(dest_path))
        image = ::MiniMagick::Image.open(path)
   
        @commands.each_pair do |command, arg|
          image.combine_options do |c|
             arg.each do |option|
                 option.each {|command, value| c.send command,value}
             end
          end
        end

        image.format(@format, 1) if @format
        image.write dest_path
        puts "Writing to #{dest_path}"
        true
      end
     end

    class MiniMagickGenerator < Generator
      safe true

      # Find all image files in the source directories of the presets specified
      # in the site config.  Add a GeneratedImageFile to the static_files stack
      # for later processing.
      def generate(site)
        return unless site.config['mini_magick'] && site.config['mini_magick_enabled']
        versions = site.config['mini_magick']['versions']

        site.config['mini_magick']['galleries'].each do |gallery|
          path = "/Users/adam/Dropbox/code/blogs/adamfortuna.com-images/images/galleries/#{gallery}"

          # Loop through all images in this gallery
          Dir.glob(File.join(path, "*.{png,jpg,jpeg,gif,JPG}")) do |source|
            versions.each_pair do |version, options|
              settings = options.clone
              settings['source'] = path
              settings['destination'] = File.join(path, version)

              if site.config['mini_magick_regererate'] || !File.exists?(File.join(path, version, File.basename(source)))
                site.static_files << GeneratedImageFile.new(site, path, settings['destination'], File.basename(source), settings)
              end
            end
          end
        end
      end
    end
  end
end