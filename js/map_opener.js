<!-- マップを形成するスクリプト Gitのデータ20201029-->

    // マップを形成する変数群
    let map;
    let marker = [];
    let infoWindow = [];
    let currentInfoWindow = null;
    
    // 追記20201029(varよりletの方がいいか？)
    var asa = "./アサガオの無料アイコン素材 1.png";
    var run = "スポーツシューズアイコン1.png";
    // 地図の初期値
    const mapOptions = { 
        //博多駅
        center: {lat: 33.590146, lng: 130.423539}, // 地図の中心を指定
        zoom: 15 // 地図のズームを指定
    };
    
    // マーカーの定義
    const markerData = [ 
        {
            //明治公園
            name: '明治公園',
            lat: 33.588369,
            lng: 130.417523,
            info: '<strong style="color:green;"><a href="https://www.arkonline.jp/place/facility/%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%8D%97%E5%85%AC%E5%9C%92/">明治公園</a></strong><p>賑やかな住宅地の中にある公園です。</p>',
            icon: asa,
        },
        {
            //人参公園
            name: '人参公園',
            lat: 33.585952,
            lng: 130.418664,
            info: '<a href="https://www.midorimachi.jp/park/detail.php?code=206025">人参公園</a>',
            icon: run,
        }, 
        {
            //博多駅南公園
            name: '博多駅南公園',
            lat: 33.579939,
            lng: 130.421758,
            info: '<a href="https://www.midorimachi.jp/park/detail.php?code=207011"></a>博多駅南公園',
            icon: asa,
        }, 
        {
            // 中比恵公園
            name: '中比恵公園',
            lat: 33.587872,
            lng: 130.426066,
            info: '中比恵公園',
            icon: run,
        },
  //出来町公園
 {
  lat: 33.593591, lng: 130.416959,
  name: '出来町公園',
  info: '出来町公園',
  icon: run,
},
  //藤田公園
 {
  lat: 33.590180, lng: 130.413759,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  icon: run,
},
  //つばめの杜広場
 {
  lat: 33.589288, lng: 130.419211,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東住吉公園
 {
  lat: 33.583064, lng: 130.423505,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山王公園
 {
  lat: 33.582333, lng: 130.431352,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東領公園
 {
  lat: 33.580725, lng: 130.420297,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //天神中央公園
 {
  lat:  33.590727, lng: 130.402757,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //花野公園
 {
  lat: 33.581211, lng: 130.426136,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //春住公園
 {
  lat: 33.578289, lng: 130.423472,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //中春住中公園
 {
  lat: 33.577817, lng: 130.427755,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //冷泉公園
 {
  lat: 33.594587, lng: 130.408665,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //美野島公園
 {
  lat: 33.577639, lng: 130.420897,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東光１号公園
 {
  lat: 33.592341, lng: 130.425528,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //東公園
 {
  lat: 33.605087, lng: 130.421339,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //山堅粕公園
 {
  lat: 33.596604, lng:  130.423111,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //住吉２号公園
 {
  lat: 33.587324, lng: 130.413259,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //比恵公園
 {
  lat:  33.586930, lng: 130.430119,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
  //瑞穂公園
 {
  lat: 33.586019, lng: 130.426455 ,
  name: '千代時代の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
  info: '<strong style="color:red;">千代時代</strong>の<a href="https://grow-up-fukuoka.com/">株式会社Grow-up</a>',
},
    ];
    
    // APIに引き渡す関数
    function initMap() {
        // 地図の作成
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    
        // マーカー毎の処理
        for (var i = 0; i < markerData.length; i++) {
            // マーカーオブジェクトを作る
            // 先に座標オブジェクトを作って当てはめる
            let markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});
            marker[i] = new google.maps.Marker({ // マーカーの追加
                position: markerLatLng, // 地図内のマーカーを立てる位置を指定
                map: map // マーカーを立てる地図を指定
            });
            
            // マーカーの画像を変更（あれば）
            if (markerData[i]['icon']){
                marker[i].setOptions({
                    icon: {
                        url: markerData[i]['icon']
                    }
                });
            }

            // 吹き出しオブジェクトを作る
            infoWindow[i] = new google.maps.InfoWindow({ 
                content: markerData[i]['info'] // 吹き出しに表示する内容
            });
    
            // マーカーにクリックイベントを追加
            markerEvent(i); 
        }

  // Google Maps Platformの「チュートリアル：マーカーのクラスタリング」からそのまま貼る`
  new MarkerClusterer(map, marker, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

    }
    
    // マーカーにクリックイベントを追加する関数
    function markerEvent(i) {
        marker[i].addListener('click', function() { // マーカーをクリックしたとき
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            infoWindow[i].open(map, marker[i]); // 吹き出しの表示
            currentInfoWindow = infoWindow[i];
        });

    }