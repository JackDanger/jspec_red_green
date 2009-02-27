# RedGreen for Johnson/jspec

Colorize the Javascript test output in your terminal

A Javascript version of the Ruby gem `redgreen`

Designed to work with the version of `jspec` that ships with [Johnson](http://github.com/jbarnette/johnson/)

## HowTo

  In your test.js file:


    // this code just prevents you from having to type
    //    'johnson -I /path/to/johnson'
    // provided to make this example easily testable
    for (var dir in Ruby["$LOAD_PATH"])
      if(/johnson-[\d-\.]+\/lib$/.test(dir)) break
    dir = dir.split('/'); dir.pop();
    Ruby["$LOAD_PATH"].unshift(dir.join("/"))
    Ruby["$LOAD_PATH"].unshift('.')

    // K, from here on is what you'd normally use
    Johnson.require("test/jspec/helper");
    Johnson.require("test/jspec/jspec");
    Johnson.require('redgreen/redgreen') // <- or wherever you saved it.
  
    Me = {quality: 'awesome'}
    jspec.describe("Let's go testing", function() {
      it("should think I'm awesome", function() {
        expect('awesome').to("==", Me.quality);
      })
      it("should work just fine", function() {
        expect('not going to work').to("==", 'miserable failure');
      })
    })


And run it like so:
  
    $ johnson test.js

<pre>
Let's go testing
- should think I'm awesome
  - awesome should equal awesome (PASS)
- should work just fine
  - not going to work should equal miserable failure (FAIL)<div style="color: red">    - F Expected not going to work. Got miserable failure</div>
</pre>


## Known Bugs

Currently only does red.  I know, I know.  Only two features and they're in
the name of the library.  But it only does red.  Please fork jspec and fix the way it handles successes if you want this fixed.