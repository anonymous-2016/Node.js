# ejs  

http://ejs.co/

```code
Tags
<% 
# 'Scriptlet' tag, for control-flow, no output

<%= 
# Outputs the value into the template (HTML escaped)

<%- 
# Outputs the unescaped value into the template

<%# 
# Comment tag, no execution, no output

<%% 
# Outputs a literal '<%'

%> 
# Plain ending tag

-%> 
# Trim-mode ('newline slurp') tag, trims following newline
``` 

## layout.ejs  (both OK)

<%- defineContent('hero') %>
<%- defineContent('cbody') %>

<%- defineContent('hero') %>
<%- cbody %>
