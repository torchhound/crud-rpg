$('#characterGen').click(function(event){
    $.ajax({
        type: 'GET',
        url: 'http//:localhost:3000/api/character',
        success: function(data){
            document.getElementById('json').textContent=data;
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('There has been a problem with your get operation: ' + jqXHR.responseText + ' ' + textStatus + ' ' + errorThrown);
        }
    });
});
