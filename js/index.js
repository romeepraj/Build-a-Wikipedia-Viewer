function searchwiki(){
  $('.searchlist').html('');
  var searchtext = $('#searchbox').val();
  var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch='+ searchtext +'&callback=?';
$.getJSON( url, function( data ) {
   $.each(data['query']['search'], function(index, d){ 
     var snippet = '<li>'+ d['snippet'] + '</li>';
     $('.searchlist').append(snippet);
     //console.log(index);
     console.log(d['snippet']);
     
   });
});
 
}

$( document ).ready(function() {
  
  
 

});