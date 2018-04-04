
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
//配信中番組情報取得
/*var nowstreaming_kyokumei
var nowstreaming_bangumi_title
var nowstreaming_bangumi_naiyou
var nowstreaming_bangumi_time*/



/*function getCSVFile() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "WI_GET_PROGRAM_NUM.html", true);
    xhr.send(null);
}
getCSVFile();
 
function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 
function createArray(csvData) {
    var tempArray = csvData.split("\r\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
    csvArray[i] = tempArray[i].split(",");
    }
    console.log(csvArray);
}*/

//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "WI_GET_PROGRAM_NUM.html", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

var Streaminfo = [];

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
   // var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\r\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        Streaminfo[i] = tmp[i].split(',');
    }

    console.log(Streaminfo[0][7]);

    


getCSV(); //最初に実行される

alert(Streaminfo[0][8]);
document.write(Streaminfo[0][8]);
var ViewTV1_streaminfo = document.getElementById('ViewTV1_Streaminfo1')
ViewTV1_streaminfo1.insertAdjacentHTML("beforeend", "<p>" + Streaminfo[0][3] + " " + Streaminfo[0][1] + " " + Streaminfo[0][5] + "~" + Streaminfo[0][6] + "</p><p>" +
Streaminfo[0][7] + "</p>" + Streaminfo[0][8],false);</script></p>


}
//document.addEventListener("DOMContentLoaded",function(eve){}