require "spec"
require "../src/vesta.cr"

describe "Vesta" do
  describe "Renderer" do
    it "must render correctly a md file" do
      vesta = Vesta::Renderer.new("#{__DIR__}/assets/test.md")
      result = vesta.render
      target = File.read("#{__DIR__}/assets/result.md")
      result.should eq(target)
    end
  end
end
