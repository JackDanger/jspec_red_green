// Make the jspec just barely readable
// Code largely ported from RedGreen

// Johnson has trouble reading escape characters
// from the Javascript end
Ruby.require(Ruby.File.dirname(__FILE__)+'/ruby_escape')

color = function(hue, fn, binding){
  COLORS = {clear: 0, red: 31, green: 32, yellow: 33}

  var change = function(to){
    Ruby.print(Ruby.String.escape()+"["+COLORS[to]+'m')
  }

  return function(){
              change(hue)
    try     { ret = fn.apply(binding, arguments) }
    finally { change('clear') }
    return ret
  }
}

// This assumes that console is a top-level object defined
// by jspec.  Newer versions may require "jspec.console"
console.warn  = color('yellow', console.warn, console)
console.error = color('red',    console.error, console)
