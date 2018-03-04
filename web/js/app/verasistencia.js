

    $('#botonCargar').click(function () {
        $.ajax({
            type: 'GET',
            url: "VerListaAsistenciaS",
            //force to handle it as text
            data: {
                'opcion': "0"
                

            },
            dataType: "text",
            success: function (data) {
                var selectForm = $('#cursosProfesor');
                selectForm.empty();
                selectForm.append('<option selected  value="" disabled>Seleccione una curso</option>');
                var json = $.parseJSON(data);
                console.log(json);
                for (var i = 0; i < json.length; ++i)
                {
                    var opcion = "<option value=\"" + json[i].idCurso+ "\">" + json[i].nombre + "</option>";
                    selectForm.append(opcion);
                }
                selectForm.attr('required', false);
            },
            async: false
        });
    });




$('#cursosProfesor').on('change', function () {
    $.ajax({
        type: 'GET',
        url: "VerListaAsistenciaS",
        //force to handle it as text
        data: {
            'opcion': "1",
        
        },
        dataType: "text",
        success: function (data) {

            var selectForm = $('#fechas');
            selectForm.empty();
            selectForm.append('<option selected  value="" disabled>Seleccione una fecha</option>');
            var json = $.parseJSON(data);
            for (var i = 0; i < json.length; ++i)
            {
                var opcion = "<option value=\"" + json[i].idFecha + "\">" + json[i].fecha + "</option>";
                selectForm.append(opcion);
            }
            selectForm.attr('required', false);
        },
        async: false
    });
});

$('#fechas').on('change', function () {
    $.ajax({
        type: 'GET',
        url: "VerListaAsistenciaS",
        //force to handle it as text
        
        data: {
            'opcion': "2",
            'curso':$('#cursosProfesor').val(),
            'fecha':$('#fechas').val()            
        },
        dataType: "text",
        success: function (data) {
            var selectForm = $('#tabla');
            selectForm.empty();
            selectForm.append('<tr><td style="color:red" >Nombre</td><td style="color:red" >Asistencia</td> </tr>');
            var json = $.parseJSON(data);
            for (var i = 0; i < json.length; ++i)
            {
                var opcion = "<tr><td style=\"color:red\" >" + json[i].nombre + "</td><td style=\"color:red\" >" + json[i].vino + "</td> </tr>";
                selectForm.append(opcion);
            }
        },
        async: false
    });
});


