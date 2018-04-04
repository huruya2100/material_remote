//読み込み時の表示
window_load();

//ウィンドウサイズ変更時に更新
window.onresize = window_load;

//サイズの表示
function window_load() {
	document.innerWidth.value = window.innerWidth;
}

function changeSelect(){
				try {
    				var select = document.getElementById('SEL2');
	    			var options = document.getElementById('SEL2').options;
    				var value = options.item(select.selectedIndex).text;
					if (value.indexOf('ＮＨＫ') < 0) {
						document.getElementById('NHKVIEW').style.display = "none";
					} else {
						document.getElementById('NHKVIEW').style.display = "";
					}
				} catch (e) {
				}
			}
			//オンロードさせ、リロード時に選択を保持
			window.onload = changeSelect;

//配信停止の処理
(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#stop_All2');
  var showToastButton = document.querySelector('#stop_All');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: '全配信停止しました'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());


//放送局取得