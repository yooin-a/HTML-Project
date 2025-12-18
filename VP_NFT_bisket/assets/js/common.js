$(document).ready(function () {
  // 작품 설명 더보기 버튼 로직
  $('.box').each(function () {
    var content = $(this).children('.explanation .con');
    var content_txt = content.text();
    var content_txt_short = content_txt.substring(0, 80) + "...";
    var btn_more = $('<a href="javascript:void(0)" class="more"><span class="hidden">더보기</span></a>');

    $(this).append(btn_more);

    if (content_txt.length >= 100) {
      content.html(content_txt_short)

    } else {
      btn_more.hide()
    }

    btn_more.click(toggle_content);

    function toggle_content() {
      if ($(this).hasClass('short')) {
        content.html(content_txt_short)
        $(this).removeClass('short');
      } else {
        content.html(content_txt);
        $(this).addClass('short');

      }
    }
  });

  // 약관동의 > 체크박스
  $('.chkbox_group').on('click', '#chk_all', function () {
    console.log(this);
    const checked = $(this).is(':checked');

    if (checked) {
      $(this).parents('.chkbox_group').find('input').prop('checked', true);
    } else {
      $(this).parents('.chkbox_group').find('input').prop('checked', false);
    }
  });

  $('.chkbox_group').on('click', '.chk', function () {
    let is_checked = true;

    $('.chkbox_group .chk').each(function () {
      is_checked = is_checked && $(this).is(':checked');
    });

    $('#chk_all').prop('checked', is_checked);
  });

  // 약관동의 > iframe
  $('.view_more').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.iframe-wrap').slideToggle(0);
  });
});