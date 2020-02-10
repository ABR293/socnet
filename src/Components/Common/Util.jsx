function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);

            var widthImg = $('#blah').width();
            console.log("widthImg = " + widthImg);
            var widthContent = 342;
            console.log("widthContent = " + widthContent);

            //если ширина картинки больше, чем наш контент, то добавляем коеффициент сжатия
            if (+widthImg > +widthContent) {
                var koef = +widthImg / +widthContent;

                $("#koef").val(Math.round(koef*1000));
                $('#blah').attr('src', e.target.result).css('width', '100%');
            }
            else {

            }
            //addJCrop(1);
            //jcrop_api.animateTo(getRandom());
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#AddImage").change(function () {
    $('#blah').attr('src', "~/Content/nophoto.png");
    readURL(this);

    //$('input[type="file"]').hide();
    //$('.buttonSubmitImg').show();
    //CropResult.isUpload = true;
});