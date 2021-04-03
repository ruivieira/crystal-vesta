require "cmark"
require "json"
require "string_scanner"

module Vesta
  class Renderer
    property options : Cmark::Option

    def initialize(@contents : String, @image_dest : String = "images", @image_prefix : String = "image")
      @options = Cmark::Option.flags(Nobreaks, ValidateUTF8)
      extensions = Cmark::Extension.flags(Table, Tasklist)
      @image_counter = 1

      @root = Cmark.parse_document(@contents, options, extensions)

      iterator = Cmark::EventIterator.new(@root)

      iterator.each do |event|
        node = event.node
        if node.type == Cmark::NodeType::CodeBlock
          # command = Icr::CommandStack.new
          tempfile = File.tempfile(prefix: "crystal-", suffix: ".cr", dir: ".")
          File.write(tempfile.path, node.literal)
          result = `crystal run #{tempfile.path}`
          if is_png?(result)
            image_path = "#{@image_dest}/#{@image_prefix}-#{@image_counter}.png"
            save_png_data(image_path, result)
            image_link = Cmark::NodeMaker.image(image_path, "#{@image_prefix}-#{@image_counter}")
            next_node = node.next.not_nil!
            next_node.prepend_child(Cmark::NodeMaker.linebreak)
            next_node.prepend_child(image_link)
            @image_counter += 1
            tempfile.delete
          else
            output = Cmark::NodeMaker.code_block(result)
            node.insert_after(output)
          end
        end
      end
    end

    def save_png_data(image_path : String, data : String)
      File.write(image_path, data)
    end

    def is_png?(data : String)
      return Base64.encode(data).starts_with?("iVBOR")
    end

    def render : String
      rendered = @root.render_commonmark(@options)
      return rendered
    end
  end
end
