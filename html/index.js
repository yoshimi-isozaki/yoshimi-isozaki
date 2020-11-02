



/* 福岡・赤坂
let map;
function initMap() {
  var akasaka = { lat: 33.585063, lng:  130.386739},
  map = new google.maps.Map(document.getElementById("map"), {
    center: akasaka,
    zoom: 15
  });
} */
/* 福岡・祇園
function initMap() {
  var gion = { lat: 33.592593, lng:  130.414217};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: gion});
  var marker = new google.maps.Marker({position: gion, map: map});
} */
/*  出来町公園
function initMap() {
  var dekimahci = { lat: 33.593591, lng:  130.416959};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: dekimahci});
  var marker = new google.maps.Marker({position: dekimahci, map: map});
} */
/* 博多駅を中心としたクラスターマーカー付きのマップ
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 33.590146, lng: 130.423539 },
  });
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
//音羽公園
  { lat: 33.586791, lng: 130.421378 },
//明治公園
  { lat: 33.588369, lng: 130.417523 },
  //人参公園
  { lat: 33.585952, lng: 130.418664 },
  //博多駅南公園
  { lat: 33.579939, lng: 130.421758 },
  //中比恵公園
  { lat: 33.587872, lng: 130.426066 },
  //出来町公園
  { lat: 33.593591, lng: 130.416959 },
  //藤田公園
  { lat: 33.590180, lng: 130.413759 },
  //つばめの杜広場
  { lat: 33.589288, lng: 130.419211 },
  //東住吉公園
  { lat: 33.583064, lng: 130.423505 },
  //山王公園
  { lat: 33.582333, lng: 130.431352 },
  //東領公園
  { lat: 33.580725, lng: 130.420297 },
  //天神中央公園
  { lat:  33.590727, lng: 130.402757 },
  //花野公園
  { lat: 33.581211, lng: 130.426136 },
  //春住公園
  { lat: 33.578289, lng: 130.423472 },
  //中春住中公園
  { lat: 33.577817, lng: 130.427755 },
  //冷泉公園
  { lat: 33.594587, lng: 130.408665 },
  //美野島公園
  { lat: 33.577639, lng: 130.420897 },
  //東光１号公園
  { lat: 33.592341, lng: 130.425528 },
  //東公園
  { lat: 33.605087, lng: 130.421339 },
  //山堅粕公園
  { lat: 33.596604, lng:  130.423111 },
  //住吉２号公園
  { lat: 33.587324, lng: 130.413259 },
  //比恵公園
  { lat:  33.586930, lng: 130.430119 },
  //瑞穂公園
  { lat: 33.586019, lng: 130.426455 },
];
 */


/* 博多駅を中心とした「初期値ではないマーカー」のマップ（クラスター表示できない） 
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), 
  {center: new google.maps.LatLng(33.590146, 130.423539), zoom: 15});


var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';



var icons = {
  parking: {
    icon: 'マップピンのアイコン素材 3.png'
  },
  library: {
    icon: 'アサガオの無料アイコン素材 1.png'
  },
  info: {
    icon: iconBase + 'info-i_maps.png'
    }
  };


var features = [
//音羽公園
  {
    position: new google.maps.LatLng(33.586791, 130.421378),
    type: 'info'
  },
//明治公園
  {
    position: new google.maps.LatLng(33.588369, ),
    type: 'info'
  },
  //人参公園
  {
    position: new google.maps.LatLng(33.585952, 130.418664),
    type: 'parking'
  },
  //博多駅南公園
  {
    position: new google.maps.LatLng(33.579939, 130.421758),
    type: 'info'
  },
  //中比恵公園
  {
    position: new google.maps.LatLng(33.587872, 130.426066),
    type: 'parking'
  },
  //出来町公園
  {
    position: new google.maps.LatLng(33.593591, 130.416959),
    type: 'info'
  },
  //藤田公園
  {
    position: new google.maps.LatLng(33.590180, 130.413759),
    type: 'parking'
  },
  //つばめの杜広場
  {
    position: new google.maps.LatLng(33.589288, 130.419211),
    type: 'info'
  },
  //東住吉公園
  {
    position: new google.maps.LatLng(33.583064, 130.423505),
    type: 'parking'
  },
  //山王公園
  {
    position: new google.maps.LatLng(33.582333, 130.431352),
    type: 'info'
  },

  //東領公園
  {
    position: new google.maps.LatLng(33.580725, 130.420297),
    type: 'parking'
  },
  //天神中央公園
  {
    position: new google.maps.LatLng(33.590727, 130.402757),
    type: 'info'
  },
  //花野公園
  {
    position: new google.maps.LatLng(33.581211, 130.426136),
    type: 'parking'
  },
  //春住公園
  {
    position: new google.maps.LatLng(33.578289, 130.423472),
    type: 'info'
  },
  //中春住中公園
  {
    position: new google.maps.LatLng(33.577817, 130.427755),
    type: 'library'
  },
  //冷泉公園
  {
    position: new google.maps.LatLng(33.594587, 130.408665),
    type: 'info'
  },
  //美野島公園
  {
    position: new google.maps.LatLng(33.577639, 130.420897),
    type: 'info'
  },
  //東光１号公園
  {
    position: new google.maps.LatLng(33.592341, 130.425528),
    type: 'info'
  },
  //東公園
  {
    position: new google.maps.LatLng(33.605087, 130.421339),
    type: 'library'
  },
  //山堅粕公園
  {
    position: new google.maps.LatLng(33.596604, 130.423111),
    type: 'info'
  },
  //住吉２号公園
  {
    position: new google.maps.LatLng(33.587324, 130.413259),
    type: 'library'
  },
  //比恵公園
  {
    position: new google.maps.LatLng(33.586930, 130.430119),
    type: 'info'
  },
  //瑞穂公園
  {
    position: new google.maps.LatLng(33.586019, 130.426455),
    type: 'library'
  },
];


  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}
*/

/* Grow-upwebGitHubのtech-samplesのmap-javascript-sample.htmlを参考にする
アイコンを差し返して、クラスター化の描画に成功した  
var asa = "./アサガオの無料アイコン素材 1.png" ;
var run = "スポーツシューズアイコン1.png";

        // マップの初期設定のオブジェクト
        const mapOptions = {
            // マップ表示の中心の座標
            //博多駅
            center: {lat: 33.590146, lng: 130.423539},
            // ズームの初期値
            zoom: 15,
            mapTypeId: 'roadmap'
        };

        // マーカーの定義（追記:複数マーカー対応）
        // オプションの参考文献
        // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
        const markerOptions = [
//音羽公園
 {
  position: {lat: 33.586791, lng: 130.421378 },
  title: '音羽公園',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
//明治公園
 {
  position: {lat: 33.588369, lng: 130.417523 },
  title: '明治公園',
  content: '<strong style="color:green;"><a href="https://www.arkonline.jp/place/facility/%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%8D%97%E5%85%AC%E5%9C%92/">明治公園</a></strong><p>賑やかな住宅地の中にある公園です。</p>',
  icon: asa,
},
  //人参公園
 {
  position: 
  {lat: 33.585952, lng: 130.418664 },
  title: '人参公園',
  content: '<a href="https://www.midorimachi.jp/park/detail.php?code=206025">人参公園</a>',
  icon: asa,
},
  //博多駅南公園
 {
  position: {lat: 33.579939, lng: 130.421758 },
  title: '博多駅南公園',
  content: '<a href="https://www.midorimachi.jp/park/detail.php?code=207011"></a>博多駅南公園',
  icon: asa,
},
  //中比恵公園
 {
  position: {lat: 33.587872, lng: 130.426066 },
  title: '中比恵公園',
  content: '中比恵公園',
  icon: run,
},
  //出来町公園
 {
  position: {lat: 33.593591, lng: 130.416959 },
  title: '出来町公園',
  content: '出来町公園',
  icon: run,
},
  //藤田公園
 {
  position: {lat: 33.590180, lng: 130.413759 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  icon: run,
},
  //つばめの杜広場
 {
  position: {lat: 33.589288, lng: 130.419211 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東住吉公園
 {
  position: {lat: 33.583064, lng: 130.423505 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山王公園
 {
  position: {lat: 33.582333, lng: 130.431352 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東領公園
 {
  position: {lat: 33.580725, lng: 130.420297 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //天神中央公園
 {
  position: {lat:  33.590727, lng: 130.402757 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //花野公園
 {
  position: {lat: 33.581211, lng: 130.426136 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //春住公園
 {
  position: {lat: 33.578289, lng: 130.423472 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //中春住中公園
 {
  position: {lat: 33.577817, lng: 130.427755 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //冷泉公園
 {
  position: {lat: 33.594587, lng: 130.408665 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //美野島公園
 {
  position: {lat: 33.577639, lng: 130.420897 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東光１号公園
 {
  position: {lat: 33.592341, lng: 130.425528 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東公園
 {
  position: {lat: 33.605087, lng: 130.421339 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山堅粕公園
 {
  position: {lat: 33.596604, lng:  130.423111 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //住吉２号公園
 {
  position: {lat: 33.587324, lng: 130.413259 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //比恵公園
 {
  position: {lat:  33.586930, lng: 130.430119 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //瑞穂公園
 {
  position: {lat: 33.586019, lng: 130.426455 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
];

        // Google の API に引き渡す関数
        function initMap() {
            // 地図を表示する(divのid名文字列を引数にする)
            let target = document.getElementById('map_canvas');
            map = new google.maps.Map(target, mapOptions);
            // マーカーを地図上に配置する
            initMarkers();
        }

        // マップ用オブジェクトを用意する
        let map;

        // マーカー用オブジェクトを用意する
        let markers = new Array();

        // 情報ウインドウの生成とクリックイベント関数の登録処理
        function setMarkerListener(marker, title) {
            // 情報ウィンドウの生成
            var infoWindow = new google.maps.InfoWindow({
                content: title,
                maxWidth: 200
            });
            // マーカーのクリックイベントの関数を登録
            google.maps.event.addListener(marker, 'click', function(event) {
                // 情報ウィンドウの表示
                infoWindow.open(map, marker);
            });//　マップクリック時にinfoを非表示
　google.maps.event.addListener(map, "click", function(event){
　　activeInfo.close();
　});
        }

        // マーカーを有効にする関数
        function initMarkers() {
            for(i = 0; i < markerOptions.length; i++) {
                markers[i] = new google.maps.Marker({map: map});
                //これでマーカーを描画する？
                markers[i].setOptions(markerOptions[i]);
                // プロパティにcontentがある場合はマーカーをクリックした時に情報ウインドウを表示する
                if(markerOptions[i].content) {
                    setMarkerListener(markers[i], markerOptions[i].content);
                }
            }
  // Google Maps Platformの「チュートリアル：マーカーのクラスタリング」からそのまま貼る`
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
        }
*/

/* 上記のコードを少し変えてポップアップ情報をクリックで表示非表示動作させたい */
var asa = "./アサガオの無料アイコン素材 1.png" ;
var run = "スポーツシューズアイコン1.png";
var currentInfoWindow = null; //最後に開いた情報ウィンドウを記憶
        // マップの初期設定のオブジェクト
        const mapOptions = {
            // マップ表示の中心の座標
            //博多駅
            center: {lat: 33.590146, lng: 130.423539},
            // ズームの初期値
            zoom: 15,
            mapTypeId: 'roadmap'
        };

        // マーカーの定義（追記:複数マーカー対応）
        // オプションの参考文献
        // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
        const markerOptions = [
//音羽公園
 {
  position: {lat: 33.586791, lng: 130.421378 },
  title: '音羽公園',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
//明治公園
 {
  position: {lat: 33.588369, lng: 130.417523 },
  title: '明治公園',
  content: '<strong style="color:green;"><a href="https://www.arkonline.jp/place/facility/%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%8D%97%E5%85%AC%E5%9C%92/">明治公園</a></strong><p>賑やかな住宅地の中にある公園です。</p>',
  icon: asa,
},
  //人参公園
 {
  position: 
  {lat: 33.585952, lng: 130.418664 },
  title: '人参公園',
  // content: '<a href="https://www.midorimachi.jp/park/detail.php?code=206025">人参公園</a>',
  content: null,/* ここだけクリックでも出なくなる。おそらく「null」指定は受け入れられる */
  icon: asa,
},
  //博多駅南公園
 {
  position: {lat: 33.579939, lng: 130.421758 },
  title: '博多駅南公園',
  content: '<a href="https://www.midorimachi.jp/park/detail.php?code=207011"></a>博多駅南公園',
  icon: asa,
},
  //中比恵公園
 {
  position: {lat: 33.587872, lng: 130.426066 },
  title: '中比恵公園',
  // content: '中比恵公園',
  content: null,
  icon: run,
},
  //出来町公園
 {
  position: {lat: 33.593591, lng: 130.416959 },
  title: '出来町公園',
  content: '出来町公園',
  icon: run,
},
  //藤田公園
 {
  position: {lat: 33.590180, lng: 130.413759 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  icon: run,
},
  //つばめの杜広場
 {
  position: {lat: 33.589288, lng: 130.419211 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東住吉公園
 {
  position: {lat: 33.583064, lng: 130.423505 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山王公園
 {
  position: {lat: 33.582333, lng: 130.431352 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東領公園
 {
  position: {lat: 33.580725, lng: 130.420297 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //天神中央公園
 {
  position: {lat:  33.590727, lng: 130.402757 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //花野公園
 {
  position: {lat: 33.581211, lng: 130.426136 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //春住公園
 {
  position: {lat: 33.578289, lng: 130.423472 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //中春住中公園
 {
  position: {lat: 33.577817, lng: 130.427755 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //冷泉公園
 {
  position: {lat: 33.594587, lng: 130.408665 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //美野島公園
 {
  position: {lat: 33.577639, lng: 130.420897 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東光１号公園
 {
  position: {lat: 33.592341, lng: 130.425528 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東公園
 {
  position: {lat: 33.605087, lng: 130.421339 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山堅粕公園
 {
  position: {lat: 33.596604, lng:  130.423111 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //住吉２号公園
 {
  position: {lat: 33.587324, lng: 130.413259 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //比恵公園
 {
  position: {lat:  33.586930, lng: 130.430119 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //瑞穂公園
 {
  position: {lat: 33.586019, lng: 130.426455 },
  title: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  content: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
];

        // Google の API に引き渡す関数
        function initMap() {
            // 地図を表示する(divのid名文字列を引数にする)
            let target = document.getElementById('map_canvas');
            map = new google.maps.Map(target, mapOptions);
            // マーカーを地図上に配置する
            initMarkers();
        }

        // マップ用オブジェクトを用意する
        let map;

        // マーカー用オブジェクトを用意する
        let markers = new Array();

        // 情報ウインドウの生成とクリックイベント関数の登録処理
        function setMarkerListener(marker, title) {
            // 情報ウィンドウの生成
            var infoWindow = new google.maps.InfoWindow({
                content: title,
                maxWidth: 200
            });
            
            // マーカーのクリックイベントの関数を登録
            google.maps.event.addListener(marker, "click", function(event) {
                infoWindow.open(map, marker);
              });

      /* map領域をclickすると情報ウィンドウが閉じます*/
      google.maps.event.addListener(map, "click", function(){
          infoWindow.close();
        });
        

        }
        // マーカーを有効にする関数
        function initMarkers() {
            for(i = 0; i < markerOptions.length; i++) {
                markers[i] = new google.maps.Marker({map: map});
                //これでマーカーを描画する？
                markers[i].setOptions(markerOptions[i]);
                // プロパティにcontentがある場合はマーカーをクリックした時に情報ウインドウを表示する
                if(markerOptions[i].content) {
                    setMarkerListener(markers[i], markerOptions[i].content);
                }
            }
  // Google Maps Platformの「チュートリアル：マーカーのクラスタリング」からそのまま貼る`
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

        }


























