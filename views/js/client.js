$('#characterGen').click(function(event){
    $.ajax({
        type: 'GET',
        url: '/api/character',
        success: function(data){
            document.getElementById('characterGen').style.display = 'none';
            var jsonObj = JSON.parse(data);
            document.getElementById('name').textContent = 'Name: ' + jsonObj.name;
            document.getElementById('race').textContent = 'Race: ' + jsonObj.race;
            document.getElementById('profession').textContent = 'Profession: ' + jsonObj.profession;
            document.getElementById('str').textContent = 'Strength: ' + jsonObj.str;
            document.getElementById('dex').textContent = 'Dexterity: ' + jsonObj.dex;
            document.getElementById('int').textContent = 'Intelligence: ' + jsonObj.int;
            document.getElementById('spt').textContent = 'Spirit: ' + jsonObj.spt;
            document.getElementById('skills').textContent = 'Skills: ' + jsonObj.skill1 + ', ' + jsonObj.skill2;
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('There has been a problem with your get operation: ' + jqXHR.responseText + ' ' + textStatus + ' ' + errorThrown);
        }
    });
});

$('#characterGen').click(function(event){
    $.ajax({
        type: 'GET',
        url: '/api/map',
        success: function(data){
            var jsonObj = JSON.parse(data);
            document.getElementById('map').style.display = 'unset';
            document.getElementById('map').textContent = data;
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('There has been a problem with your get operation: ' + jqXHR.responseText + ' ' + textStatus + ' ' + errorThrown);
        }
    });
});

$('#enemySubmit').click(function(event){

    var name = $('#name').val();
    var str = $('#str').val();
    var int = $('#int').val();
    var spt = $('#spt').val();
    var dex = $('#dex').val();
    var level = $('#level').val();
    var race = $('#race').val();

    var postString = 'name=' + name + '&str=' + str + '&int=' + int + '&spt=' + spt + '&dex=' + dex + '&level=' + level + '&race=' + race;

    if(name==''||str==''||dex==''||int==''||spt=='') {
        alert("Please Fill All Fields");
    } else {
        $.ajax({
            type: 'POST',
            url: '/api/enemy',
            data: postString,
            contentType : "application/x-www-form-urlencoded",
            success: function(data){
                document.getElementById('createEnemy').style.display = 'none';
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('There has been a problem with submitting a form');
                console.log('There has been a problem with your post operation: ' + jqXHR.responseText + ' ' + textStatus + ' ' + errorThrown);
            }
        });
    };
});

