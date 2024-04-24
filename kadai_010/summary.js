// 文字色変化ボタンの動作
$('#change-color').click(function() {
    // p要素（id="target"）の文字色を赤に変更
    $('#target').css('color', 'red');
  });
  
  // 文字内容変化ボタンの動作
  $('#change-text').click(function() {
    // p要素（id="target"）の文字内容を「こんにちは、jQuery!」に更新
    $('#target').text('Hello!');
  });
  
  // フェードアウトボタンの動作
  $('#fade-out').click(function() {
    // p要素（id="target"）をフェードアウトさせる（2秒かけて透明化し、非表示にする）
    $('#target').fadeOut(2000);
  });
  
  // フェードインボタンの動作
  $('#fade-in').click(function() {
    // p要素（id="target"）をフェードインさせる（2秒かけて表示させる）
    $('#target').fadeIn(2000);
  });
  