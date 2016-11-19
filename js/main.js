$(function(){

  var container = $( "#main" );

  $(document).on( "click", ".link", function( event ){

    event.preventDefault();
    var url = $(this).attr('href');

    history.pushState( null, null, url );
    loadContent(url);

  });

  function loadContent(page){

    if( page !== './' ){
      $('html, body').scrollTop(0);
      container.load(page + ' #wrap', function(){
        $('#wrap').addClass('active');
      });
    } else{
      container.load('index #wrap', function(){
        $('#wrap').addClass('active');
      });
    }

  }
  loadContent();

  $(window).on('popstate', function(){

    link = location.pathname.replace(/^.*[\\/]/, ""); 
    loadContent(link);

  });

});




