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
