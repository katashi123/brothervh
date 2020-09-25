'use strict';

var scenario = [
  {    // SCENE 0
    "src": "img/koibro_bg001.jpg",
    "text": "あれは　ある年の12月、、、/いつもと同じ　高校生活をすごしていた私の前に/アイツは突然訪れた・・・・・・",
    "next": 1
  }, { // SCENE 1
    "src": "img/koibro_bg002.jpg",
    "text": "先生/「今日は朝礼の前に　転校生を紹介する。/　新しく引っ越してきたブラ ブラ男くんだ」",
    "next": 2
  }, { // SCENE 2
    "src": "img/koibro_bg003.jpg",
    "text": "ブラ男/「はじめまして。俺の名前は ブラ ブラ男 です。/　趣味はフットサル。好きなインクはマゼンタ。",
    "next": 3,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 3
    "src": "img/koibro_bg003.jpg",
    "text": "気兼ねなく　声をかけてくれるとうれしいぜ。/みんな、今日からよろしくな！」",
    "next": 4,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 4
    "src": "img/koibro_bg003_2.jpg",
    "text": "私/「あれ、この人どこかで見た事ある……？/　テレビCMだっけ……？　まさかね(笑)」",
    "next": 5,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 5
    "src": "img/koibro_bg003.jpg",
    "text": "先生/「それじゃあ、ブラ男くんの席はあそこだ」",
    "next": 6,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 6
    "src": "img/koibro_bg004.jpg",
    "text": "そして偶然　空席になっていた私の隣に/ブラ男くんがやってくることになった。",
    "next": 7
  }, { // SCENE 7
    "src": "img/koibro_bg005.jpg",
    "text": "ブラ男/「おっす！　今日からよろしくな！」",
    "next": 8,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 8
    "src": "img/koibro_bg004.jpg",
    "text": "はじめは　ちょっと色白の男の子としか/思っていなかったのだけど、/すごいスピードを持ってるってことが",
    "next": 9
  }, { // SCENE 9
    "src": "img/koibro_bg004.jpg",
    "text": "わかるのは/昼休み明けの体育の授業でした……。",
    "next": 10
  }, { // SCENE 10
    "src": "img/koibro_bg001.jpg",
    "text": "/　～キンコーン～/",
    "next": 11
  }, { // SCENE 11
    "src": "img/koibro_bg006.jpg",
    "text": "私/「いっけない！日焼け止め塗るの忘れてた！/　でも取りに戻ると授業に間に合わないかも…",
    "next": 12
  }, { // SCENE 12
    "src": "img/koibro_bg006.jpg",
    "text": "・教室に戻る//・そのまま授業へいく",
    "next": [13, 150]
  }, { // SCENE 13
    "src": "img/koibro_bg007.jpg",
    "text": "私/「急げば　間に合うでしょ！」/全力で走り出す私。",
    "next": 14
  }, { // SCENE 14
    "src": "img/koibro_bg007.jpg",
    "text": "勢いよく教室のドアを開けると、/そこには………………/…………",
    "next": 15
  }, { // SCENE 15
    "src": "img/koibro_bg008.jpg",
    "text": "私/「きゃぁああああ！！！！！！！」",
    "next": 16,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 16
    "src": "img/koibro_bg009.jpg",
    "text": "ブラ男/「………ん？」",
    "next": 17,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 17
    "src": "img/koibro_bg009.jpg",
    "text": "私/「バカ！顔料系インク！カートリッジ部分まで/　見えてるじゃない！！！！」",
    "next": 18,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 18
    "src": "img/koibro_bg010.jpg",
    "text": "ブラ男/「しらねーよ！お前が勝手に/　俺の着替えを　のぞいてきたんだろ！」",
    "next": 19,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 19
    "src": "img/koibro_bg011.jpg",
    "text": "ブラ男/「俺の裸を見たいのかもしれないけど、/　インクが乾燥するから",
    "next": 20,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 20
    "src": "img/koibro_bg011.jpg",
    "text": " 一旦ドア、締めてくれねぇかな？」",
    "next": 21,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 21
    "src": "img/koibro_bg007_2.jpg",
    "text": " 私/「もう、、、最っ低！！！！」/　思わず走り出す私。",
    "next": 22
  }, { // SCENE 22
    "src": "img/koibro_bg007_2.jpg",
    "text": " ブラ男くんは何も悪くないのに、/顔料系インクなんてのぞいちゃって/変態と思われたかな………",
    "next": 23
  }, { // SCENE 23
    "src": "img/koibro_bg007_3.jpg",
    "text": " 日焼け止めも取れなかったし、/ブラ男くんにひどいことも言っちゃった…/自己嫌悪だよ………………",
    "next": 150
  }, { // SCENE 24
    "src": "img/koibro_bg013.jpg",
    "text": "ブラ男/「くらえ！フライングオーバーヘッド/　スキャナカバーシュート！！！」",
    "next": 25,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 25
    "src": "img/koibro_bg014.jpg",
    "text": "私/（え…うそ………………/　ちょっとかっこいいかも……）",
    "next": 26,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 26
    "src": "img/koibro_bg014.jpg",
    "text": "ブラ男くんは見かけに似合わず運動神経抜群。/見る間に得点を決めて一躍ヒーローに。/他の女子もみんなブラ男くんを見てる…",
    "next": 27,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 27
    "src": "img/koibro_bg016.jpg",
    "text": "ブラ男/「お前、真剣な目つきで見てたけど/　サッカーとか　興味あるんだ？",
    "next": 28,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 28
    "src": "img/koibro_bg016.jpg",
    "text": "良かったら日曜、フットサルやるから/見にこねぇ？",
    "next": 29,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 29
    "src": "img/koibro_bg016.jpg",
    "text": "・え、行く行く！//・何？見てなんかないわよ！",
    "next": [33, 30],
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 30
    "src": "img/koibro_bg016.jpg",
    "text": "ブラ男/「バカ、見てたくせに。俺も試合中/　お前の事を見てたからわかるんだよ」",
    "next": 31,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 31
    "src": "img/koibro_bg016.jpg",
    "text": "私/「…え…？！」",
    "next": 32,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 32
    "src": "img/koibro_bg016.jpg",
    "text": "ブラ男/「いいから見に来いよ。おもしろいぜ。」",
    "next": 33,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 33
    "src": "img/koibro_bg017.jpg",
    "text": "ブラ男/「詳細はこれに書いてあるからな」",
    "next": 34,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 34
    "src": "img/koibro_bg017.jpg",
    "text": "ウィイイーーン/そういってブラ男は A4の用紙を吐きだした。/顔料系インクのにおいにハッとする私。",
    "next": 35,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 35
    "src": "img/koibro_bg017.jpg",
    "text": "私/（もしかして、私、デートに誘われてる…？/　……いや、考えすぎよね。バカな私！）",
    "next": 36,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 36
    "src": "img/koibro_bg016.jpg",
    "text": "私/「あ、ありがとう。また日曜日にね！」",
    "next": 37,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "500px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 37
    "src": "img/koibro_bg004.jpg",
    "text": "周囲の女子の視線もあって、/逃げるように教室に戻って来た私。",
    "next": 38
  }, { // SCENE 38
    "src": "img/koibro_bg004.jpg",
    "text": "よく考えると/いきなりデートの誘いなんてあるわけないし/考えすぎた自分が恥ずかしくなってくる…",
    "next": 39
  }, { // SCENE 39
    "src": "img/koibro_bg018.jpg",
    "text": "でも今日は、いつもと同じ帰り道が/なんだか染色インクみたいに/鮮やかに見える気がする……",
    "next": 40
  }, { // SCENE 40
    "src": "img/koibro_bg019.jpg",
    "text": "/　～自宅～/",
    "next": 41
  }, { // SCENE 41
    "src": "img/koibro_bg020.jpg",
    "text": "翌日は土曜日。/机で勉強をしていたはずなのに/気づくとあいつのことをノートに落書きしてる",
    "next": 42
  }, { // SCENE 42
    "src": "img/koibro_bg020.jpg",
    "text": "私/（でもあいつなら、こんな下手な絵じゃなくて/　もっときれいにプリントできるんだろうな…）",
    "next": 43
  }, { // SCENE 43
    "src": "img/koibro_bg019.jpg",
    "text": "私/「そうだ！/　明日お弁当を作っていってあげよう！」",
    "next": 44
  }, { // SCENE 44
    "src": "img/koibro_bg021.jpg",
    "text": "～日曜日～/少林グラウンド公園",
    "next": 45
  }, { // SCENE 45
    "src": "img/koibro_bg022.jpg",
    "text": "ブラ男/「よっ！おはよう！来てくれたのか！/　あれ？その包みは俺への弁当？！」",
    "next": 46,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 46
    "src": "img/koibro_bg023.jpg",
    "text": "・うん、腹が減っては戦はできないでしょ。//・バカ、そんなんじゃないわよ！",
    "next": [48, 47],
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 47
    "src": "img/koibro_bg023.jpg",
    "text": "ブラ男/「またまた！だってホラ、なんか手紙みたいな/　紙がついてるじゃん！どれどれ・・・」",
    "next": 49,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 48
    "src": "img/koibro_bg023.jpg",
    "text": "ブラ男/「ありがとう！お、しかも手紙つきだ！」",
    "next": 49,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 49
    "src": "img/koibro_bg023.jpg",
    "text": "ブラ男/「ブラ男くん、試合頑張ってね……か。/　手紙までありがとな！」",
    "next": 50,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 50
    "src": "img/koibro_bg022.jpg",
    "text": "ブラ男/「俺、絶対に点を決めて勝つよ！」",
    "next": 51,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 51
    "src": "img/koibro_bg012.jpg",
    "text": "そして試合開始。/相手は市内一の強豪チームで、一進一退の攻防/引き分けに終わると　思われたその時……",
    "next": 52
  }, { // SCENE 52
    "src": "img/koibro_bg024.jpg",
    "text": "ブラ男/「ピコリットル　インクターンク！！！！」",
    "next": 53,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 53
    "src": "img/koibro_bg025.jpg",
    "text": '「ゴーーーール！！！！！！！！/　チーム"ブラ男"ロスタイムに得点！/　見事勝利を飾りました！！！」',
    "next": 54,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 54
    "src": "img/koibro_bg026.jpg",
    "text": "私/「わー！ボールを持って走る/　ブラ男くんもかっこいい………ん？",
    "next": 55,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 55
    "src": "img/koibro_bg026.jpg",
    "text": "　あれ？いまブラ男くんの給紙トレイが/　ガタついていたような………………/　……気のせいかな？」",
    "next": 56,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 56
    "src": "img/koibro_bg027.jpg",
    "text": "ブラ男/「ふぅ、ギリギリで勝てて良かったぜ。/　これも俺の実力の　なせる技だな！」",
    "next": 57,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 57
    "src": "img/koibro_bg027.jpg",
    "text": "私/「勝利おめでとう。でもそれより、/　給紙トレイ大丈夫？",
    "next": 58,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 58
    "src": "img/koibro_bg027.jpg",
    "text": "　ちょっとだけ/　ガタついたように　見えたけど……」",
    "next": 59,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE 59
    "src": "img/koibro_bg028.jpg",
    "text": "「え？給紙トレイ？/　この通り　ピンピンしてるぜ！」",
    "next": 60,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE60
    "src": "img/koibro_bg028.jpg",
    "text": "私/「いや、そんなことないわ。/　確かにさっきは根元が……」",
    "next": 61,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE61
    "src": "img/koibro_bg029.jpg",
    "text": "ブラ男/「なんだよ！勝手に給紙トレイを/　開けようとするな！",
    "next": 62,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE62
    "src": "img/koibro_bg028.jpg",
    "text": "　なんでおめーはそうやって、/　いちいち/　俺のことを……",
    "next": 63,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE63
    "src": "img/koibro_bg028.jpg",
    "text": "・好きだからに決まってるでしょ！//・な、何でもないわよ！",
    "next": [65, 64],
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE64
    "src": "img/koibro_bg027.jpg",
    "text": "ブラ男/「うるせー！何か隠してるだろ！/　俺にはわかるぞ！！",
    "next": 63,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE65
    "src": "img/koibro_bg028.jpg",
    "text": "「え？………………好き……？/　……この俺のことを……？？！」",
    "next": 66,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE66
    "src": "img/koibro_bg031.jpg",
    "text": "ブラ男のフロントパネルがスッと閉じた。//そして沈黙。",
    "next": 67,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE67
    "src": "img/koibro_bg031.jpg",
    "text": "ブラ男/「ば…バカ野郎…俺は…………/　俺は………………………",
    "next": 68,
    "link": {
      "top": "48px",
      "left": "170px",
      "width": "420px",
      "height": "320px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE68
    "src": "img/koibro_bg032.jpg",
    "text": "………………………………/………………/brother なんだよ！！！！！！」",
    "next": 69,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE69
    "src": "img/koibro_bg033_2.jpg",
    "text": "一目散にかけだすブラ男。//呆然（ぼうぜん）とする私。",
    "next": 70
  }, { // SCENE70
    "src": "img/koibro_bg033.jpg",
    "text": "私/「え……brother……ってどういうこと？/　brother……もしかして…………",
    "next": 71
  }, { // SCENE71
    "src": "img/koibro_bg033.jpg",
    "text": "もしかして、私とブラ男くんは/血のつながった兄弟ってことなの…！？",
    "next": 72
  }, { // SCENE72
    "src": "img/koibro_bg033.jpg",
    "text": "ブラ男くんを追いかけたいのに、/ビックリして動かない私の足。",
    "next": 73
  }, { // SCENE73
    "src": "img/koibro_bg033.jpg",
    "text": "私はただ、呆然としたまま/身も心も凍りついたようにただ、/走り去るブラ男くんの",
    "next": 74
  }, { // SCENE74
    "src": "img/koibro_bg033.jpg",
    "text": "後ろ姿を見送ることしかできず/しばらくその場に立ち尽くしていたのでした。",
    "next": 75
  }, { // SCENE75
    "src": "img/koibro_bg034.jpg",
    "text": "/　～その深夜～/",
    "next": 76
  }, { // SCENE76
    "src": "img/koibro_bg034.jpg",
    "text": "PRRRRRRRRR……//PRRRRRRRRR……",
    "next": 77
  }, { // SCENE77
    "src": "img/koibro_bg034.jpg",
    "text": "私/「こんな時間に誰かしら？/　え？　ブラ男くんの携帯からだ！",
    "next": 78
  }, { // SCENE78
    "src": "img/koibro_bg034.jpg",
    "text": "・電話に出る//・無視する",
    "next": [81, 79]
  }, { // SCENE79
    "src": "img/koibro_bg034.jpg",
    "text": "PRRRRRRRRR……//PRRRRRRRRR……",
    "next": 80
  }, { // SCENE80
    "src": "img/koibro_bg034.jpg",
    "text": "いつまでも　なり続ける電話。/よっぽど重要な用事なのだろうか？",
    "next": 81
  }, { // SCENE81
    "src": "img/koibro_bg034.jpg",
    "text": "私/「もしもし…こんな時間に何？」",
    "next": 82
  }, { // SCENE82
    "src": "img/koibro_bg034.jpg",
    "text": "？？？/「もしもし、今この電話の最後のリダイヤルに/　かけているんだ。男の子の知り合いの方かい？",
    "next": 83
  }, { // SCENE83
    "src": "img/koibro_bg034.jpg",
    "text": "この男の子、給紙トレイが突然外れて/道路に飛び出して来たんだ！/トラックにはねられて重症を負ってる！",
    "next": 84
  }, { // SCENE84
    "src": "img/koibro_bg034.jpg",
    "text": "今、救急車で島屋病院に運ばれているから、/この子の知り合いであれば、一刻も早く/病院に来てくれ！",
    "next": 85
  }, { // SCENE85
    "src": "img/koibro_bg035.jpg",
    "text": "頭が真っ白になった。/そんな………………/どうしてブラ男くんが……………",
    "next": 86
  }, { // SCENE86
    "src": "img/koibro_bg036.jpg",
    "text": "さっきまで笑ったり、フットサルしたり、/給紙トレイにお弁当を乗せたり/普通にしてたのに…………",
    "next": 87,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE87
    "src": "img/koibro_bg037.jpg",
    "text": "そして、「brotherなんだよ」と言って/走りさるブラ男くんの姿を思い出す。",
    "next": 88,
     "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE88
    "src": "img/koibro_bg037.jpg",
    "text": "あんな悲しい後ろ姿が最後なんて、/私は絶対に嫌！！",
    "next": 89,
     "link": {
      "top": "108px",
      "left": "170px",
      "width": "420px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE89
    "src": "img/koibro_bg035.jpg",
    "text": "・病院に向かう//・そろそろ寝る",
    "next": [94, 90]
  }, { // SCENE90
    "src": "img/koibro_bg034.jpg",
    "text": "いや、でももう深夜だし、/今日はとりあえず眠ろう……",
    "next": 91
  }, { // SCENE91
    "src": "img/koibro_bg034.jpg",
    "text": "…………！！/と、その時/壁に貼った紙が目に入った。",
    "next": 92
  }, { // SCENE92
    "src": "img/koibro_bg038.jpg",
    "text": "ブラ男くんがくれた告知ポスター。/あっという間にその場で印刷してくれたっけ。",
    "next": 93
  }, { // SCENE93
    "src": "img/koibro_bg038.jpg",
    "text": "目を閉じるとどうしてもブラ男くんの笑顔が/浮かんでしまい、今日は寝られそうにない。/深夜だけど、やっぱり島屋病院に向かおう！",
    "next": 94
  }, { // SCENE94
    "src": "img/koibro_bg039.jpg",
    "text": "外に出ると、冷たい雨が降りはじめていた。/毎日通っている道なのに、世界が突然一変して/重たいものに変わってしまったような気がする",
    "next": 95
  }, { // SCENE95
    "src": "img/koibro_bg039.jpg",
    "text": "けれど、私はどうしても行かなきゃいけない。/行かなかった痛みの方が、きっと/今感じる痛みよりずっと痛いはずだから。",
    "next": 96
  }, { // SCENE96
    "src": "img/koibro_bg041.jpg",
    "text": "もう電車なんて動いてない。/バイトなんてしてないから/タクシーに乗るお金もない。でも走った。",
    "next": 97
  }, { // SCENE97
    "src": "img/koibro_bg040.jpg",
    "text": "ただ走りながら、/「あいつなら、もっと速く走るんだろうな」/なんてバカなことを考えてる。早く会いたい。",
    "next": 98
  }, { // SCENE98
    "src": "img/koibro_bg000.jpg",
    "text": "/　～島屋病院～/",
    "next": 99
  }, { // SCENE99
    "src": "img/koibro_bg000.jpg",
    "text": "私/「ブラ男君、大丈夫…！」/　勢いよくドアを開けた私が目にしたのは…",
    "next": 100
  }, { // SCENE100
    "src": "img/koibro_bg042.jpg",
    "text": '？？？/「良く来てくれたね。私はブラ男の父です。/　気軽に”父ブラ”と呼んでくればいい。」',
    "next": 101,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE101
    "src": "img/koibro_bg042.jpg",
    "text": "そういえば、どこかブラ男くんに似た/雰囲気を持つ、やさしそうな人物が/そこに立っていた。",
    "next": 102,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE102
    "src": "img/koibro_bg042.jpg",
    "text": "私/「あの…、わたし、わたし……」",
    "next": 103,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE103
    "src": "img/koibro_bg043.jpg",
    "text": "父ブラ/「君はこの手紙をくれた人だね。/　ブラ男は事故の後も、最後まで",
    "next": 104,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE104
    "src": "img/koibro_bg043.jpg",
    "text": "この手紙を守るように持っていたんだ。/ブラ男は心配ない。なんでも給紙トレイの/不備だったということだよ。",
    "next": 105,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE105
    "src": "img/koibro_bg042.jpg",
    "text": "私/「良かった……。/　………………本当に良かった……」",
    "next": 106,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE106
    "src": "img/koibro_bg042.jpg",
    "text": "父ブラ/「君はブラ男の事が好きなのかい？」",
    "next": 107,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE107
    "src": "img/koibro_bg042.jpg",
    "text": "私/「…………はい。でも、ブラ男くんは/『俺はbrotherなんだ』と……。",
    "next": 108,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE108
    "src": "img/koibro_bg042.jpg",
    "text": "父ブラ/「そうか…そんなことが…/　君はbrotherという言葉を聞いて",
    "next": 109,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE109
    "src": "img/koibro_bg042.jpg",
    "text": '"兄弟"という　意味だと思ったんだね？」',
    "next": 110,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE110
    "src": "img/koibro_bg042.jpg",
    "text": "私/「え？違うのですか……！」",
    "next": 111,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE111
    "src": "img/koibro_bg042.jpg",
    "text": "父ブラ/「brotherは確かに兄弟という意味もある。/　けれど息子が言ったのはプリンタやミシンで",
    "next": 112,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE112
    "src": "img/koibro_bg042.jpg",
    "text": "有名なbrotherというメーカーの事なんだ。/私たち親子、見た目は人間に見えるかも/しれないけれど、実は………………",
    "next": 113,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE113
    "src": "img/koibro_bg044.jpg",
    "text": "brotherで作られた/プリンタだったんだ…！！！！！！」",
    "next": 114,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE114
    "src": "img/koibro_bg044_2.jpg",
    "text": "私/「………………………………/　………………………………。」",
    "next": 115,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE115
    "src": "img/koibro_bg044_3.jpg",
    "text": "父ブラ/「ブラ男は、自分が人間ではなく/　brother製の工業製品であることを、",
    "next": 116,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE116
    "src": "img/koibro_bg044_3.jpg",
    "text": "多少なりとも重圧に思っていたらしい。/だからこそ、人一倍サッカーも/勉強も、プリントアウトも頑張っていたんだ。",
    "next": 117,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE117
    "src": "img/koibro_bg044_3.jpg",
    "text": "私/「そんなことが……………………。」",
    "next": 118,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE118
    "src": "img/koibro_bg044_3.jpg",
    "text": "父ブラ/「では、改めて聞かせてもらう/　ブラ男はbrotherだ。それでも好きかい…？」",
    "next": 119,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE119
    "src": "img/koibro_bg044_3.jpg",
    "text": "・はい//・いいえ",
    "next": [123, 120],
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE120
    "src": "img/koibro_bg045.jpg",
    "text": "私/「いいえ、私は……」そう言いかけた時、/　眠るブラ男くんの給紙トレイが見えた。",
    "next": 121,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE121
    "src": "img/koibro_bg045.jpg",
    "text": "あの時　私が強く修理をすすめていれば/こんな事にはならなかったのかもしれない。",	
    "next": 122,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE122
    "src": "img/koibro_bg045.jpg",
    "text": "私のせいでブラ男くんがこんなことに/なったのなら、私にも責任はある…！",
    "next": 123,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE123
    "src": "img/koibro_bg042.jpg",
    "text": "私/「はい、ブラ男くんがbrotherでも/　私はブラ男くんが大好きです！」",
    "next": 124,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE124
    "src": "img/koibro_bg042.jpg",
    "text": "父ブラ/「ありがとう。君ならブラ男の電源を/　再びONにできるかもしれない。",
    "next": 125,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_BR14428295"
  }, { // SCENE125
    "src": "img/koibro_bg046.jpg",
    "text": "　電源はどうか君が押しておくれ…。",
    "next": 126,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE126
    "src": "img/koibro_bg046_2.jpg",
    "text": "恐る恐る、ブラ男くんの電源に手を伸ばす。/そして、そっとそこに触れてみた。",
    "next": 127,
    "link": {
      "top": "0",
      "left": "0",
      "width": "800px",
      "height": "370px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE127
    "src": "img/koibro_bg047.jpg",
    "text": "……………………………………………………/………………………………/……………",
    "next": 128,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE128
    "src": "img/koibro_bg048.jpg",
    "text": "ブラ男/「……ん……ここは…………/　俺はいったい何を……？」",
    "next": 129,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE129
    "src": "img/koibro_bg048.jpg",
    "text": "「ブラ男くん！」/「ブラ男！」",
    "next": 130,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE130
    "src": "img/koibro_bg048.jpg",
    "text": "私/「ブラ男のバカ！/　私、すごく心配したんだから！」",
    "next": 131,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE131
    "src": "img/koibro_bg049.jpg",
    "text": "ブラ男/「すまなかったな。お前の教えてくれた通り/　俺は給紙トレイを傷めていたらしい",
    "next": 132,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE132
    "src": "img/koibro_bg049.jpg",
    "text": "あの時素直にお前の言うことを聞いていれば/こんなことにはならなかったかもしれない/けれど……",
    "next": 133,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE133
    "src": "img/koibro_bg050.jpg",
    "text": "俺はbrother製の工業製品。/それをお前に知られるのが恥ずかしくて/たまらなかったんだ…！許してくれ！",
    "next": 134,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE134
    "src": "img/koibro_bg048.jpg",
    "text": "私/「そんなの全然関係ない！/　私はブラ男がbrother製の複合機でも",
    "next": 135,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE135
    "src": "img/koibro_bg048.jpg",
    "text": "前とちっとも変わらず/大切に思っているよ！」",
    "next": 136,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE136
    "src": "img/koibro_bg049.jpg",
    "text": "ブラ男/「……brotherの俺でもいいのか……？",
    "next": 137,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE137
    "src": "img/koibro_bg049.jpg",
    "text": "私/「当たり前でしょ！プリントは速いし、/　タッチパネルはついているし、",
    "next": 138,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE138
    "src": "img/koibro_bg050.jpg",
    "text": "経済的な独立カードリッジだし、/最小インクサイズは1.5plだし、/年末商戦に向けてCMもやっているしね！",
    "next": 139,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE139
    "src": "img/koibro_bg048.jpg",
    "text": "それより、無茶をした罰として/明日から私とつきあいなさい！/……いいわね？",
    "next": 140,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE140
    "src": "img/koibro_bg049.jpg",
    "text": "ブラ男/「……ありがとう……/　……俺、高機能な複合機で良かったんだ……」",
    "next": 141,
    "link": {
      "top": "108px",
      "left": "170px",
      "width": "490px",
      "height": "260px"
    },
    "linkUrl": "http://nttxstore.jp/_II_QZX0007700"
  }, { // SCENE141
    "src": "img/koibro_bg051.jpg",
    "text": "病院を出た帰り道、/雨は今年初めての雪に変わっていた。/けれど、冷たく重い感じは無い。",
    "next": 142
  }, { // SCENE142
    "src": "img/koibro_bg051.jpg",
    "text": "病院に来た時よりもずっと寒いはずなのに、/私は、私の中の何かあたたかいものが/世界を守ってくれているような気がした。",
    "next": 143
  }, { // SCENE143
    "src": "img/koibro_bg052.jpg",
    "text": "/　～エピローグ～/",
    "next": 144
  }, { // SCENE144
    "src": "img/koibro_bg053.jpg",
    "text": "こうして、私とブラ男の生活は始まった。",
    "next": 145
  }, { // SCENE145
    "src": "img/koibro_bg053.jpg",
    "text": "私/「ブラ男～！年賀状作るの手伝って～」",
    "next": 146
  }, { // SCENE146
    "src": "img/koibro_bg054.jpg",
    "text": "ブラ男/「うるせーな！パソコンなんかでやらずに/　俺に搭載されている機能で作れば",
    "next": 147
  }, { // SCENE147
    "src": "img/koibro_bg054.jpg",
    "text": "　すぐに印刷してやるよ！/　………………………………/　…………………",
    "next": 148
  }, { // SCENE148
    "src": "img/koibro_bg053.jpg",
    "text": "時にはケンカもするけれど、/私、……brotherに恋しています！！",
    "next": 149
  }, { // SCENE149
    "src": "img/koibro_bg055.jpg",
    "text": "/　～ Happy End ～/",
    "next": 151
  }, { // SCENE 150
    "src": "img/koibro_bg012.jpg",
    "text": "/　～体育の授業～/",
    "next": 24
  }
  
];

jQuery(function($) {
  // set variables
  var $SCENE = $("#scene");
  var $MESSAGE = $("#message");
  var $BUTTON_AREA = $("#sec-message");
  var $LINK_AREA = $("#sec-scene");

  var DEF_SCENE = $SCENE.attr("src");
  var DEF_TEXT = "default text";

  var SPEED = 10;

  var BOX_STYLE1 = {
    "position": "absolute",
    "top": "0",
    "left": "10px",
    "width": "778px",
    "height": "210px",
    "boxSizing": "border-box",
    "background": "url(./img/clear.gif) 0 0 repeat",
    "cursor": "pointer"
  };

  var BOX_STYLE2 = {
    "position": "absolute",
    "top": "0",
    "left": "10px",
    "width": "778px",
    "height": "110px",
    "boxSizing": "border-box",
    "background": "url(./img/clear.gif) 0 0 repeat",
    "cursor": "pointer"
  };

  var BOX_STYLE3 = {
    "position": "absolute",
    "top": "110px",
    "left": "10px",
    "width": "778px",
    "height": "100px",
    "boxSizing": "border-box",
    "background": "url(./img/clear.gif) 0 0 repeat",
    "cursor": "pointer"
  };

  var LINK_STYLE_DEFAULT = {
    "position": "absolute",
    "display": "block",
    "background": "url(./img/clear.gif) 0 0 repeat"
  };

  var URL_TO_FINISH = "/brother/present/";

  var sceneNum = 0;

  // error check
  if($SCENE.length < 1) {
    throw('no <img id="scene">');
  }
  if($MESSAGE.length < 1) {
    throw('no <p id="message">');
  }

  // init
  // setNext(0);

  // functions
  function setNext(next) {
    $SCENE.add($MESSAGE).off("click");
    $BUTTON_AREA.find("div").remove();
    if($.isArray(next)) {
      var option1 = $("<div>").attr("id", "button1").css(BOX_STYLE2);
      var option2 = $("<div>").attr("id", "button2").css(BOX_STYLE3);

      option1.on("click", function() {
        $BUTTON_AREA.find("div").remove();
        nextScene(scenario, next[0], setNext);
      });
      option2.on("click", function() {
        $BUTTON_AREA.find("div").remove();
        nextScene(scenario, next[1], setNext);
      });
      $BUTTON_AREA.append(option1, option2);
    } else {
      var option = $("<div>").attr("id", "button1").css(BOX_STYLE1);
      option.on("click", function() {
        $BUTTON_AREA.find("div").remove();
        nextScene(scenario, next, setNext);
      });
      $BUTTON_AREA.append(option);
    }
  }
  function nextScene(arr, num, callback) {
    var sceneData;
    if(arr.length <= num) {
      location.href = URL_TO_FINISH;
    } else {
      sceneData = arr[num];
      changeSet(sceneData, callback);
      return sceneData.next;
    }
  }
  function changeSet(hash, callback) {
    var src, text;
    hash = (hash) ? hash : {} ;
    src = (hash.src) ? hash.src : DEF_SCENE ;
    text = (hash.text) ? hash.text : DEF_TEXT ;

    changeScene(src);
    changeMessage(text, hash.next, callback);
      
    changeLink(hash.linkUrl, hash.link);
  }

  function changeScene(src) {
    $SCENE.attr("src", src);
  }

  function changeMessage(text, next, callback) {
    var interval, i;
    text = text.split("");
    $MESSAGE.html("");
    for(i = 0; i < 4; i++){
      showOneChar(text.shift());
    }
    interval = setInterval(function() {
      if(text.length <= 0) {
        clearInterval(interval);
        callback(next);
      } else {
        showOneChar(text.shift());
      }
    }, SPEED);

    function showOneChar(chr) {
      if(chr === "/") {
        $MESSAGE.html($MESSAGE.html() + "<br>");
      } else {
        $MESSAGE.html($MESSAGE.html() + chr);
      }
    }
  }
  function changeLink(link, hash) {
    var a;
    $LINK_AREA.find("a").remove();
    if(link) {
      a = $("<a>").css(LINK_STYLE_DEFAULT).css(hash).attr("href", link).attr("target", "_blank");
      $LINK_AREA.append(a);
    } else {
      return false;
    }
  }
  $("#startbtn").on("click", function(){
    $("#startarea").remove();
    $("#message").css("display", "block");
    nextScene(scenario, 0, setNext);
  });
  
});
