module RubyEscape
  def escape
    "\e"
  end
end

String.extend(RubyEscape)