require "option_parser"
require "./src/vesta.cr"

input : String? = nil
output : String? = nil

OptionParser.parse do |parser|
  parser.banner = "Usage: vestacli [arguments]"
  parser.on("-i INPUT", "--input=INPUT", "Where the input files are") { |name| input = name }
  parser.on("-o OUTPUT", "--output=OUTPUT", "Where the output files are") { |name| output = name }
  parser.on("-h", "--help", "Show this help") { puts parser }
  parser.invalid_option do |flag|
    STDERR.puts "ERROR: #{flag} is not a valid option."
    STDERR.puts parser
    exit(1)
  end
end

if input && output
  source = File.read(input.to_s)
  renderer = Vesta::Renderer.new(source)
  markdown = renderer.render
  File.write(output.to_s, markdown)
end
