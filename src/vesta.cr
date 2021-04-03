require "cmark"
require "icr"
require "json"
require "string_scanner"

module Vesta
  class Renderer
    property options : Cmark::Option

    def initialize(@file_path : String, @image_dest : String = "images", @image_prefix : String = "image")
      @options = Cmark::Option.flags(Nobreaks, ValidateUTF8) # deafult is Option::None
      extensions = Cmark::Extension.flags(Table, Tasklist)   # default is Extension::None
      @image_counter = 1

      @md = File.read(file_path)

      @root = Cmark.parse_document(@md, options, extensions)

      iterator = Cmark::EventIterator.new(@root)

      iterator.each do |event|
        node = event.node
        if node.type == Cmark::NodeType::CodeBlock
          command = Icr::CommandStack.new
          command.push node.literal
          executer = Icr::Executer.new command
          result = executer.execute
          value = result.value.to_s
          if is_png?(value)
            image_path = "#{@image_dest}/#{@image_prefix}-#{@image_counter}.png"
            save_png_data(image_path, value)
            image_link = Cmark::NodeMaker.image(image_path, "#{@image_prefix}-#{@image_counter}")
            next_node = node.next.not_nil!
            next_node.prepend_child(Cmark::NodeMaker.linebreak)
            next_node.prepend_child(image_link)
            @image_counter += 1
          else
            output = Cmark::NodeMaker.code_block(value)
            node.insert_after(output)
          end
        end
      end
    end

    def save_png_data(image_path : String, data : String)
      command = Icr::CommandStack.new
      command.push "File.write(\"#{image_path}\", " + data + ")"
      @image_counter += 1
      executer = Icr::Executer.new command
      executer.execute
    end

    def is_png?(data : String)
      return data[1..7] == "\\x89PNG"
    end

    def render : String
      rendered = @root.render_commonmark(@options)
      return rendered
    end
  end
end
