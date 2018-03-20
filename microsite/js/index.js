
jQuery(document).ready(function($){
 
  //detect if we support scroll snap or not (not the best but should work)
  var scrollSnap = false;
  scrollSnap = 'webkitScrollSnapType' in document.documentElement.style;
  scrollSnap = 'scrollSnapType' in document.documentElement.style;
  
  if(scrollSnap === true){
      $('#supports').append('<h3 class="success">It looks like your browser does support scroll snap!</h3>');
  }else{
      $('#supports').append('<h3 class="failure">It looks like your browser might not support scroll snap properties</h3>');
  }
});