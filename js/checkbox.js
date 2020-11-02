$('.all-ck input[type="checkbox"]').on('click', function() {
    var tgt= $(this).parent().next().find('input[type="checkbox"]');
    tgt.prop('checked', this.checked);
  });
  var ckBox = $('.ck-list input[type="checkbox"]');
  ckBox.on('click', function() {
    var ckThisCk = $(this).parent().parent().find('input[type="checkbox"]:checked');
    var ckThisDef = $(this).parent().parent().find('input[type="checkbox"]');
    var allCk = $(this).parent().parent().prev().find('input[type="checkbox"]');

    if ($(ckThisCk).length == $(ckThisDef).length){
      allCk.prop('checked', 'checked');
    }else{
      allCk.prop('checked', false);
    }
  });