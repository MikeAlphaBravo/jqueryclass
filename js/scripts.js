$(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Whaddaaa!</li>");
    $("ul#machine").prepend("<li>Computer hello</li>");
    $("ul#user,ul#machine").children("li").click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Layduh!</li>");
    $("ul#machine").prepend("<li>Computer shutdown</li>");
    $("ul#user,ul#machine").children("li").click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Nah!</li>");
    $("ul#machine").prepend("<li>Computer Computer</li>");
    $("ul#user,ul#machine").children("li").click(function(){
      $(this).remove();
    });
  });
});
