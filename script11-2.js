//Execute script after page is load
$(document).ready(function () 
{
  $('#divMouseover').on('mousemove', function (e) 
  {
    const posX = e.offsetX;
    const posY = e.offsetY;
    $('#divResult').html('positie X:' + posX + '<br />positie Y: ' + posY);
  });
  $('#divMouseover').on('mouseleave', function (e) 
  {
    const posX = 0;
    const posY = 0;
    $('#divResult').html('positie X:' + posX + '<br />positie Y: ' + posY);
  });
}); // end of the document
