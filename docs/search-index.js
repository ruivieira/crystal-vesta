crystal_doc_search_index_callback({"repository_name":"vesta","body":"[![tests](https://github.com/ruivieira/crystal-vesta/actions/workflows/main.yml/badge.svg)](https://github.com/ruivieira/crystal-vesta/actions/workflows/main.yml) [![builds.sr.ht status](https://builds.sr.ht/~ruivieira/crystal-vesta/commits/.build.yml.svg)](https://builds.sr.ht/~ruivieira/crystal-vesta/commits/.build.yml?)\n\n# crystal-vesta\n\nCrystal executable Markdown.\n\n## installation\n\nAdd the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  holst:\n    github: ruivieira/crystal-vesta\n```\n\nand run `shards install`.\n\n## examples\n\nGiven a Markdown file with `crystal` code block, _e.g._\n\n    # Title\n\n    This is a test, and with\n    a code block (`Crystal`)\n\n    ```crystal\n    a = [1, 2, 3]\n    b = a.map{ |x| x*2 }\n    b\n    ```\n\n    Let's try with another one\n\n    ```crystal\n    c = 4\n    c\n    ```\n\n    And ... the end.\n\n`vesta` will execute the code block and add the result after the block:\n\n```crystal\nrequire \"vesta\"\n\nvesta = Vesta::Renderer.new(\"test_file.md\")\nresult = vesta.render\n```\n\nwill result in:\n\n    # Title\n\n    This is a test, and with a code block (`Crystal`)\n\n    ``` crystal\n    a = [1, 2, 3]\n    b = a.map{ |x| x*2 }\n    b\n    ```\n\n        [2, 4, 6]\n\n    Let's try with another one\n\n    ``` crystal\n    c = 4\n    c\n    ```\n\n    ```\n    4\n    ```\n\n    And ... the end.\n\n## documentation\n\nAPI documentation is available [here](https://ruivieira.github.io/crystal-vesta/).\n\nA git mirror is available at [https://git.sr.ht/~ruivieira/crystal-vesta](https://git.sr.ht/~ruivieira/crystal-vesta).\n\n## mailing lists\n\n- Announcements: [https://lists.sr.ht/~ruivieira/crystal-announce](https://lists.sr.ht/~ruivieira/crystal-announce)\n- Discussion: [https://lists.sr.ht/~ruivieira/crystal-discuss](https://lists.sr.ht/~ruivieira/crystal-discuss)\n- Development: [https://lists.sr.ht/~ruivieira/crystal-devel](https://lists.sr.ht/~ruivieira/crystal-devel)\n","program":{"html_id":"vesta/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"vesta","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"vesta/Vesta","path":"Vesta.html","kind":"module","full_name":"Vesta","name":"Vesta","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/vesta.cr","line_number":4,"url":null}],"repository_name":"vesta","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"vesta/Vesta/Renderer","path":"Vesta/Renderer.html","kind":"class","full_name":"Vesta::Renderer","name":"Renderer","abstract":false,"superclass":{"html_id":"vesta/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"vesta/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"vesta/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/vesta.cr","line_number":5,"url":null}],"repository_name":"vesta","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"vesta/Vesta","kind":"module","full_name":"Vesta","name":"Vesta"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(file_path:String)-class-method","html_id":"new(file_path:String)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"file_path","doc":null,"default_value":"","external_name":"file_path","restriction":"String"}],"args_string":"(file_path : String)","args_html":"(file_path : String)","location":{"filename":"src/vesta.cr","line_number":8,"url":null},"def":{"name":"new","args":[{"name":"file_path","doc":null,"default_value":"","external_name":"file_path","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(file_path)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"options:Cmark::Option-instance-method","html_id":"options:Cmark::Option-instance-method","name":"options","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Cmark::Option","args_html":" : Cmark::Option","location":{"filename":"src/vesta.cr","line_number":6,"url":null},"def":{"name":"options","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Cmark::Option","visibility":"Public","body":"@options"}},{"id":"options=(options:Cmark::Option)-instance-method","html_id":"options=(options:Cmark::Option)-instance-method","name":"options=","doc":null,"summary":null,"abstract":false,"args":[{"name":"options","doc":null,"default_value":"","external_name":"options","restriction":"Cmark::Option"}],"args_string":"(options : Cmark::Option)","args_html":"(options : Cmark::Option)","location":{"filename":"src/vesta.cr","line_number":6,"url":null},"def":{"name":"options=","args":[{"name":"options","doc":null,"default_value":"","external_name":"options","restriction":"Cmark::Option"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@options = options"}},{"id":"render:String-instance-method","html_id":"render:String-instance-method","name":"render","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String","args_html":" : String","location":{"filename":"src/vesta.cr","line_number":32,"url":null},"def":{"name":"render","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"rendered = @root.render_commonmark(@options)\nreturn rendered\n"}}],"macros":[],"types":[]}]}]}})