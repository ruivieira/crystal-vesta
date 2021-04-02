require "cmark"
require "icr"

module Vesta
  class Renderer
    property options : Cmark::Option

    def initialize(@file_path : String)
      @options = Cmark::Option.flags(Nobreaks, ValidateUTF8) # deafult is Option::None
      extensions = Cmark::Extension.flags(Table, Tasklist)   # default is Extension::None

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
          result = Cmark::NodeMaker.code_block(result.value.to_s)
          node.insert_after(result)
        else
        end
      end
    end

    def render : String
      rendered = @root.render_commonmark(@options)
      return rendered
    end
  end
end
