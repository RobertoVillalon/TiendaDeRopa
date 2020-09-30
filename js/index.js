
function FuncionalidadModal(){
    $('#exampleModal').on('shown.bs.modal',function(e){
        console.log("El modal se esta mostrando");
      });

      $('#exampleModal').on('show.bs.modal',function(e){
        console.log("El modal se mostro");
        $('#btnModal').removeClass('btn-outline-info');
        $('#btnModal').addClass('btn-info');
        $('#btnModal').prop('disabled',true);
      });

      $('#exampleModal').on('hidden.bs.modal',function(e){
        console.log("El modal se esta ocultando");
      });

      $('#exampleModal').on('hide.bs.modal',function(e){
        console.log("El modal se oculto");
        $('#btnModal').addClass('btn-outline-info');
        $('#btnModal').removeClass('btn-info');
        $('#btnModal').prop('disabled',false);
      });
}

function FuncionalidadCarrusel(){
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('.carousel').carousel({
    interval: 1000
  });
}