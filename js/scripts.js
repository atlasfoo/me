$(function(){
    $('.galeria .cont-img').on('click', function(){
        $('#modal').modal;
        var path=($(this).find('img').attr('src'));
        $('#img-modal').attr('src', path);
    });
    $('#modal').on('click', function(){
        $('#modal').modal('hide');
    });
})