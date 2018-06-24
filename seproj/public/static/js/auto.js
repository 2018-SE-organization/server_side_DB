function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;

              var event = new Event('input', { bubbles: true});
              //Toggling simulated=false or true and will not trigger the value change
              event.simulated = true;

              inp.value = this.getElementsByTagName("input")[0].value;
//科目名稱/教師姓名
              inp.defaultValue = this.getElementsByTagName("input")[0].value;
              inp.dispatchEvent(event);
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}

/*An array containing all the country names in the world:*/
var countries = ["丁兆平",
"丁克華",
"丁秀吟",
"于乃明",
"于卓民",
"于紀隆",
"亞榴申娜",
"今泉江利子",
"伊萬納威",
"何信全",
"何克",
"何天河",
"何富年",
"何小台",
"何思因",
"何怡澄",
"何政勳",
"何昕明",
"何淑靜",
"何萬順",
"何賴傑",
"何靜嫺",
"余千智",
"余屹正",
"余明忠",
"余民寧",
"余淑慧",
"余清祥",
"余能豪",
"侯志欽",
"侯雅文",
"侯雲舒",
"俞振華",
"俞洪昭",
"修慧蘭",
"倪炎元",
"倪鳴香",
"傅仰止",
"傅冶天",
"傅凱若",
"傅如馨",
"傅怡萱",
"傅斯榆",
"傅浚映",
"傅玲靜",
"傅秀玲",
"冷則剛",
"別蓮蒂",
"前田直樹",
"劉世慶",
"劉俐華",
"劉冠効",
"劉又銘",
"劉吉軒",
"劉啟清",
"劉孔中",
"劉季倫",
"劉宏恩",
"劉宗德",
"劉定基",
"劉小蘭",
"劉幼琍",
"劉康定",
"劉建基",
"劉德海",
"劉心華",
"劉怡君",
"劉惠玲",
"劉惠美",
"劉慧雯",
"劉承愚",
"劉文卿",
"劉文彬",
"劉文御",
"劉昌德",
"劉明生",
"劉昭麟",
"劉曉鵬",
"劉梅君",
"劉江彬",
"劉益昌",
"劉碧惠",
"劉祥光",
"劉維開",
"劉義鈞",
"劉致賢",
"劉若韶",
"劉蕭翔",
"劉連煜",
"劉鏡清",
"劉長政",
"劉麗文",
"區立遠",
"卓忠宏",
"古如君",
"古孟玄",
"古雷德",
"司徒達賢",
"吉田妙子",
"吳世曼",
"吳佩珍",
"吳佳靜",
"吳品嬅",
"吳啟銘",
"吳安妮",
"吳家慶",
"吳岳剛",
"吳彩娥",
"吳得源",
"吳思華",
"吳惠萍",
"吳政達",
"吳敏華",
"吳文傑",
"吳易道",
"吳榮順",
"吳治勳",
"吳瑾瑜",
"吳秀明",
"吳秀瓊",
"吳秦雯",
"吳豐祥",
"吳逸帆",
"吳高讚",
"呂寶靜",
"呂志得",
"呂昭明",
"呂潔如",
"周一騰",
"周伯峰",
"周彥君",
"周從郁",
"周德宇",
"周志煌",
"周惠民",
"周振鋒",
"周文卿",
"周玉蕙",
"周玲臺",
"周珮婷",
"周祝瑛",
"周雅玲",
"周麗芳",
"周黎芳",
"唐嘉蓉",
"唐德蓉",
"唐玉禮",
"喬治克里斯托普勒斯",
"嚴曉翠",
"嚴雅婷",
"嚴震生",
"堯里昂",
"如大維",
"姚永德",
"姚秋旺",
"姚紹基",
"姚維仁",
"姜以琳",
"姜國輝",
"姜家雄",
"姜志銘",
"姜忠信",
"孟丞書",
"季延平",
"孫大川",
"孫式文",
"孫振義",
"孫秀蕙",
"孫秉宏",
"孫蒨如",
"孫迺翊",
"孫采薇",
"孫頌賢",
"守般若",
"宋傳欽",
"宋珮",
"宋皇志",
"宋雲森",
"宋韻珊",
"宋麗玉",
"官大偉",
"宮垣元",
"寇健文",
"尚孝純",
"尤雪瑛",
"屠美亞",
"山藤夏郎",
"岳夢蘭",
"崔世勳",
"崔國瑜",
"崔峼熲",
"崔末順",
"崔正芳",
"左瑞麟",
"巫立宇",
"康庭瑜",
"廖元豪",
"廖勝嘉",
"廖四郎",
"廖峻鋒",
"廖慶松",
"廖敏淑",
"廖文宏",
"廖文霖",
"廖柏蒼",
"廖洲棚",
"廖瑞銘",
"廖郁萍",
"弗瑞德",
"張?彬",
"張中復",
"張元晨",
"張其恆",
"張其賢",
"張冠群",
"張凱隆",
"張勝文",
"張博智",
"張卿卿",
"張台麟",
"張君松",
"張國賢",
"張堂錡",
"張士傑",
"張奕華",
"張宏慶",
"張宜武",
"張家銘",
"張峯彬",
"張峯碩",
"張崇仁",
"張惠玲",
"張惠珍",
"張愛華",
"張慧端",
"張新平",
"張昌吉",
"張景堯",
"張智瑋",
"張欣綠",
"張毓芬",
"張永達",
"張海潮",
"張源俊",
"張瀚云",
"張瀞文",
"張珮琪",
"張瑋倫",
"張瑜倩",
"張盈堃",
"張祐慈",
"張立",
"張耘之",
"張興華",
"張莉萍",
"張葶葶",
"張裕隆",
"張進益",
"張郁敏",
"張郇慧",
"張金蘭",
"張金鶚",
"張鎧如",
"張駿逸",
"彭南儀",
"彭喜樞",
"彭明輝",
"彭朱如",
"彭桂英",
"彭玲林",
"彭立忠",
"彭金隆",
"徐世榮",
"徐偉初",
"徐則謙",
"徐嘉慧",
"徐士勛",
"徐孟宜",
"徐安妮",
"徐禎苓",
"徐美苓",
"徐翔生",
"徐聯恩",
"徐麗振",
"成之約",
"戚務君",
"戚大為",
"戴智偉",
"戴秀雄",
"招靜琪",
"捷米多夫",
"方中柔",
"方孝謙",
"方念萱",
"方明營",
"方昱",
"方瑾",
"施佳良",
"施列庭",
"施博文",
"施堂模",
"施慧敏",
"施文真",
"施正屏",
"施淑慎",
"施燕",
"施琮仁",
"施盈廷",
"施睿宏",
"施能傑",
"易智言",
"曲建仲",
"曹先紹",
"曹逢甫",
"曾世豪",
"曾國峰",
"曾士榮",
"曾天富",
"曾威智",
"曾守正",
"曾巨威",
"曾憲立",
"曾文珍",
"曾明生",
"曾正男",
"曾淑峰",
"曾淑賢",
"曾瀚儀",
"曾睿彬",
"曾蘭雅",
"朱宸瑩",
"朱德芳",
"朱斌妤",
"朱新民",
"朱昌勇",
"朱浩民",
"朱立熙",
"朱竹元",
"朱美麗",
"朱芳妮",
"朱靜華",
"朴炳善",
"李世暉",
"李亞梅",
"李仁芳",
"李佳玲",
"李嘉林",
"李宗芹",
"李家慶",
"李寶莉",
"李尚凡",
"李建成",
"李志宏",
"李思嫺",
"李怡志",
"李怡青",
"李惠仁",
"李惠婷",
"李慧琳",
"李政亮",
"李政國",
"李文傑",
"李文康",
"李文福",
"李明",
"李明融",
"李明輝",
"李易諭",
"李智明",
"李有仁",
"李栢浡",
"李榮敬",
"李沃奇",
"李河清",
"李法賢",
"李浩仲",
"李淑菁",
"李為仁",
"李為楨",
"李玉珍",
"李珮玲",
"李瑞華",
"李瓊莉",
"李登科",
"李福鐘",
"李立林",
"李聖傑",
"李蔡彥",
"李衣雲",
"李酉潭",
"李錦昌",
"李陽明",
"杜文苓",
"杜錦豊",
"杜雨儒",
"林人傑",
"林仁祥",
"林佑澤",
"林佳和",
"林俊益",
"林信助",
"林修澈",
"林元輝",
"林其昂",
"林勳發",
"林南",
"林哲緯",
"林啟屏",
"林培元",
"林基煌",
"林士淵",
"林士貴",
"林士鈞",
"林士鉉",
"林姿葶",
"林婉瑜",
"林子欽",
"林季平",
"林宏明",
"林宛瑩",
"林左裕",
"林巧敏",
"林建智",
"林建秀",
"林志陵",
"林忠正",
"林怡伶",
"林怡君",
"林怡安",
"林怡潔",
"林我聰",
"林承宇",
"林振源",
"林敬智",
"林文乙",
"林文凱",
"林日璇",
"林晏伃",
"林智偉",
"林月雲",
"林果顯",
"林柏生",
"林桂如",
"林森田",
"林欣潔",
"林正義",
"林永芳",
"林沛緹",
"林湘霖",
"林玉惠",
"林玲遠",
"林琬琬",
"林瑜琤",
"林碧炤",
"林祖嘉",
"林禹銘",
"林秀雄",
"林穎青",
"林美花",
"林美香",
"林義鈞",
"林翠絹",
"林翰儀",
"林老生",
"林耿農",
"林良楓",
"林良榮",
"林芝樺",
"林芝璇",
"林蒔慧",
"林質心",
"林超琦",
"林進山",
"林遠澤",
"林鎮國",
"林靖庭",
"林馨怡",
"林鴻信",
"林鴻光",
"柯惠敏",
"柯玉枝",
"柯瑞強",
"柯瓊鎣",
"柯裕棻",
"柯金木",
"栗田岳",
"梁嘉紋",
"梁定澎",
"梁記雯",
"楊亨利",
"楊佩榮",
"楊健仁",
"楊健威",
"楊光華",
"楊力州",
"楊啟正",
"楊培侃",
"楊婉瑩",
"楊子霆",
"楊建成",
"楊建民",
"楊建銘",
"楊得煜",
"楊志開",
"楊振榮",
"楊文琪",
"楊昇翰",
"楊昊",
"楊明璋",
"楊松齡",
"楊欣芳",
"楊沅錫",
"楊淑文",
"楊瑞松",
"楊瑞珠",
"楊盈箴",
"楊立行",
"楊素芬",
"楊素霞",
"楊芳賢",
"楊開煌",
"楊雲驊",
"楊麗敏",
"樊學良",
"樓永堅",
"權卿根",
"歐茵西",
"段雅芳",
"毛維凌",
"永井隆之",
"江品慧",
"江彌修",
"江慧婉",
"江振東",
"江明修",
"江玉林",
"江穎慧",
"江美艷",
"江豐富",
"江靜之",
"汪文聖",
"沈宗倫",
"沈志中",
"沈昭良",
"沈立斌",
"沈臨龍",
"沈錳坤",
"洪儀真",
"洪妤萱",
"洪德欽",
"洪淑娟",
"洪為璽",
"洪燕梅",
"洪美蘭",
"洪芷漪",
"洪英超",
"洪菁穗",
"洪順慶",
"涂艷秋",
"清水裕美子",
"温良財",
"游本寬",
"游清鑫",
"游琇婷",
"湛可南",
"湯京平",
"湯善森",
"湯宗益",
"湯志民",
"湯昇榮",
"湯紹成",
"湯華盛",
"溫偉任",
"溫宥基",
"潘世偉",
"潘俊宏",
"潘健民",
"潘光哲",
"潘麗珠",
"熊瑞梅",
"熊誦梅",
"熊道天",
"熊震寰",
"王中興",
"王亞維",
"王信實",
"王信賢",
"王儷玲",
"王千維",
"王國樑",
"王增勇",
"王太林",
"王學富",
"王安亞",
"王定士",
"王屏夏",
"王德權",
"王思宜",
"王惠玲",
"王文杰",
"王文英",
"王智賢",
"王曉丹",
"王梅玲",
"王正偉",
"王海南",
"王淑俐",
"王淑琴",
"王淑美",
"王清欉",
"王盈文",
"王立達",
"王素芸",
"王紹睿",
"王經仁",
"王耀興",
"王聖惠",
"王華",
"王鍾和",
"王雅萍",
"王韻",
"王麗蕉",
"王麗蘭",
"王麗香",
"瓦列格夫",
"甯方璽",
"田耕銘",
"畢經隆",
"白中琫",
"白仁德",
"白佩玉",
"白德傑",
"盛杏湲",
"盧倩儀",
"盧敬植",
"盧柏勳",
"盧業中",
"盧非易",
"石原忠浩",
"石秋燕",
"石雅如",
"祝本文",
"秦夢群",
"程南洲",
"程春益",
"穆思齊",
"竺家寧",
"符聖珍",
"簡睿哲",
"紀大偉",
"紀明德",
"羅光達",
"羅彤華",
"羅明琇",
"羅清菁",
"羅狼仁",
"羅百德",
"羅皓星",
"羅青香",
"羅麗君",
"翁久幸",
"翁佳音",
"翁堃嵐",
"翁浩邁",
"翁燕菁",
"翁禮祺",
"耿晴",
"耿湘沅",
"聞天祥",
"胡力中",
"胡家榮",
"胡悅倫",
"胡文華",
"胡昌亞",
"胡毓忠",
"胡清暉",
"胡碧嬋",
"胡聯國",
"胡錦媛",
"臧正運",
"舒卡夏",
"苑守慈",
"苗延威",
"苟潔予",
"范世偉",
"范噶色",
"范銘如",
"茅慧青",
"荒井夏來",
"莉托斯卡",
"莊國榮",
"莊奕琦",
"莊子家",
"莊珮琪",
"莊皓鈞",
"莊耀郎",
"萬依萍",
"萬尹亮",
"葉侃彧",
"葉匡時",
"葉啟洲",
"葉寶珠",
"葉浩",
"葉玉珠",
"葉相林",
"葉秉杰",
"葉良志",
"葉陽明",
"董保城",
"董文君",
"董祥開",
"蓋伯特",
"蔡中民",
"蔡介立",
"蔡佳杕",
"蔡佳泓",
"蔡佳瑾",
"蔡佳靜",
"蔡哲茂",
"蔡培元",
"蔡增家",
"蔡妙真",
"蔡子傑",
"蔡孟佳",
"蔡宗漢",
"蔡尚岳",
"蔡政憲",
"蔡明月",
"蔡欣欣",
"蔡沛倫",
"蔡源林",
"蔡炎龍",
"蔡琰",
"蔡瑞煌",
"蔡紋琦",
"蔡維奇",
"蔡育新",
"蔡莫妮",
"蔡連康",
"蔡金拋",
"蔡銘峰",
"蔡麗莉",
"蔣宜卿",
"蕭乃沂",
"蕭代基",
"蕭勝煌",
"蕭又新",
"蕭宇超",
"蕭宏祺",
"蕭明福",
"蕭武桐",
"蕭瑞麟",
"蕭胤瑮",
"蕭舜文",
"蕭裕民",
"薛健吾",
"薛化元",
"薛慧敏",
"薛景文",
"薛理桂",
"薛聖棻",
"薩承科",
"薩文蕙",
"薩義夫",
"藍文君",
"藍美華",
"藍適齊",
"蘇偉業",
"蘇卓馨",
"蘇威傑",
"蘇彥斌",
"蘇怡文",
"蘇文郎",
"蘇昱璇",
"蘇永欽",
"蘇瓜藤",
"蘇蘅",
"蘇起",
"蘇靖棻",
"裘錦天",
"許仲翔",
"許士軍",
"許崇源",
"許志堅",
"許志義",
"許恒達",
"許惇惠",
"許政賢",
"許文宜",
"許文耀",
"許東海",
"許林舜",
"許永明",
"許牧彥",
"許瓊文",
"許立欣",
"許耀明",
"許耕維",
"許育惠",
"許菁娟",
"許麗媛",
"詳備註",
"詹中原",
"詹兆雯",
"詹凌菁",
"詹宜穎",
"詹寧思",
"詹康",
"詹志禹",
"詹滿容",
"詹進發",
"詹銘煥",
"詹鎮榮",
"諶家蘭",
"謝世維",
"謝仕淵",
"謝博霖",
"謝國廉",
"謝如媛",
"謝宗震",
"謝思蕾",
"謝明華",
"謝明輝",
"謝智源",
"謝淑娟",
"謝淑貞",
"謝瀞如",
"謝獻誼",
"謝瑤玲",
"謝目堂",
"謝美娥",
"譚丹琪",
"譚華德",
"賀大衛",
"賴位政",
"賴孚權",
"賴宇彤",
"賴宗裕",
"賴岳謙",
"賴廷緯",
"賴建都",
"賴志仁",
"賴惠玲",
"賴松鐘",
"賴桂珍",
"賴森本",
"賴育邦",
"賴芳貞",
"趙世偉",
"趙乙勵",
"趙知章",
"趙秋蒂",
"趙竹成",
"車行健",
"連弘宜",
"遠藤乾",
"邊泰明",
"邱亭雅",
"邱剛彥",
"邱坤玄",
"邱奕嘉",
"邱奕宏",
"邱式鴻",
"邱弘毅",
"邱彥彬",
"邱志聖",
"邱炫元",
"邱炯友",
"邱稔壤",
"邱美秀",
"邱麗娟",
"邵翁秀琪",
"邵銘煌",
"郁方",
"郭力昕",
"郭大維",
"郭建志",
"郭弘卿",
"郭承天",
"郭振雄",
"郭明政",
"郭昕光",
"郭昭佑",
"郭曉玲",
"郭曉蓉",
"郭桐惟",
"郭正佩",
"郭炳伸",
"郭獻尹",
"郭秋雯",
"郭立民",
"郭訓志",
"郭貞",
"郭銘傑",
"鄢定嘉",
"鄧中堅",
"鄭丁旺",
"鄭乃瑋",
"鄭傳傑",
"鄭光明",
"鄭力軒",
"鄭同僚",
"鄭士卿",
"鄭天澤",
"鄭子真",
"鄭宇庭",
"鄭宗記",
"鄭家瑜",
"鄭怡卉",
"鄭性勳",
"鄭慧慈",
"鄭文堂",
"鄭燕玲",
"鄭至甫",
"鄭菀瓊",
"鄭雯馨",
"鄭鴻章",
"鄭麗榕",
"鄺慧琪",
"金仕起",
"金志遠",
"金永玉",
"金石平",
"金郁夫",
"錢致榕",
"鍾宜杰",
"鍾曉芳",
"鍾蔚文",
"鍾適芳",
"鍾騏",
"關尚仁",
"關秉寅",
"阮若缺",
"阿薩里",
"陳佩甄",
"陳佳琦",
"陳侑敏",
"陳俊元",
"陳俊良",
"陳信木",
"陳儒修",
"陳其南",
"陳冠仰",
"陳凰鳳",
"陳國樑",
"陳國華",
"陳天進",
"陳奉瑤",
"陳威光",
"陳婉真",
"陳嬿如",
"陳子威",
"陳宇紳",
"陳宗文",
"陳宜秀",
"陳家豪",
"陳小紅",
"陳尼古拉",
"陳帝富",
"陳幼慧",
"陳建志",
"陳建維",
"陳建綱",
"陳建龍",
"陳彩稚",
"陳彩虹",
"陳德昇",
"陳心蘋",
"陳志威",
"陳志輝",
"陳志銘",
"陳恭",
"陳惠馨",
"陳慧諴",
"陳慶智",
"陳憶寧",
"陳成文",
"陳揚學",
"陳政輝",
"陳敦源",
"陳文山",
"陳文玲",
"陳文賢",
"陳春龍",
"陳昶吾",
"陳桂恒",
"陳榮政",
"陳樹",
"陳樹衡",
"陳正佳",
"陳泰明",
"陳洸岳",
"陳百齡",
"陳睿宏",
"陳碩文",
"陳秀芬",
"陳秉訓",
"陳秉逵",
"陳立夫",
"陳立民",
"陳立芬",
"陳竑濬",
"陳純一",
"陳紹寬",
"陳綉諭",
"陳美芬",
"陳聖智",
"陳聖賢",
"陳芳明",
"陳英傑",
"陳茂泰",
"陳貞如",
"陳超明",
"陳逢源",
"陳金泉",
"陳錦烽",
"陳錦珊",
"陳錫蕃",
"陳鎮洲",
"陳長文",
"陳陸輝",
"陳隆奇",
"陳雅莉",
"陳音卉",
"陳音頤",
"陳香梅",
"陳鴻毅",
"陳鴻瑜",
"陳麗明",
"陳麗霞",
"陶亞倫",
"陸行",
"韋洪武",
"韓志翔",
"顏世禮",
"顏世鉉",
"顏佑銘",
"顏厥安",
"顏玉明",
"顏良恭",
"顏錫銘",
"顧忠華",
"顧朋",
"饒秀華",
"馬德睿",
"馬愷之",
"馬文忠",
"馬秀如",
"馬穆德",
"馬藹萱",
"馬誼蓮",
"馬里奧",
"馮建三",
"馮朝霖",
"馮藝超",
"馮震宇",
"高國魁",
"高安邦",
"高建國",
"高振宏",
"高桂惠",
"高永光",
"高端訓",
"高莉芬",
"高雅寧",
"魏玫娟",
"魏百谷",
"魏艾",
"黃仁姿",
"黃仁德",
"黃俊銘",
"黃俞寧",
"黃勢璋",
"黃厚銘",
"黃啟泰",
"黃國?",
"黃國峯",
"黃天牧",
"黃奎博",
"黃奕彥",
"黃子銘",
"黃季平",
"黃家齊",
"黃德北",
"黃志民",
"黃怡萍",
"黃慶堂",
"黃慶聲",
"黃文博",
"黃明聖",
"黃智聰",
"黃杏妃",
"黃東益",
"黃柏棋",
"黃柏鈞",
"黃正宗",
"黃泓智",
"黃涵榆",
"黃淑麗",
"黃源盛",
"黃煥榮",
"黃琦君",
"黃瓊之",
"黃瓊萩",
"黃秉德",
"黃程貫",
"黃立",
"黃葳威",
"黃詠香",
"黃譯瑩",
"黃遵誠",
"黃郁琦",
"黃金梅",
"黃金發",
"黃錦容",
"黃韋仁",
"黃馨瑩",
"19世紀俄國文學作品選讀",
"GPS定位測量專題研究",
"GPS衛星測量",
"IT策略與管理",
"Java程式設計",
"SAS/R商業資料分析",
"SAS文字探勘與大數據資料分析",
"WTO專題研究:爭端解決",
"WTO專題研究:農業與環境",
"WTO專題研究：服務貿易法",
"WTO專題研究：農業與環境",
"XML技術與應用",
"《中國文化基本教材》與中等學校中的儒家經典教育",
"「台灣史」史學史",
"上帝的屬性",
"不動產交易法",
"不動產交易法專題研究（二）",
"不動產估價實務",
"不動產估價實務研習",
"不動產估價專題研究",
"不動產市場分析專題研究",
"不動產市場土地開發行為之分析",
"不動產投資",
"不動產投資與市場分析",
"不動產登記法專題研究",
"不動產管理實務",
"不動產財務分析",
"不動產開發與管理實務",
"不確定性",
"世界文明中的土耳其人",
"世界民族志",
"世界通史（二）",
"世界通史（四）",
"中世紀基督宗教史",
"中世紀基督宗教史專題",
"中亞伊斯蘭與政治發展",
"中共外交政策",
"中共對外關係",
"中共政經改革",
"中共政經發展與兩岸關係",
"中共文獻解讀研究",
"中共的國際地位",
"中共經濟發展理論與政策",
"中共與南北韓關係研究",
"中共與國際經濟體系",
"中國古典小說專題研究",
"中國哲學史（二）",
"中國外交史",
"中國大陸投資法律制度與實務",
"中國大陸概論",
"中國大陸研究",
"中國大陸社會轉型與變遷",
"中國大陸能源研究",
"中國大陸與俄羅斯經濟發展比較研究",
"中國思想史",
"中國政治思想史",
"中國政治經濟",
"中國文學史",
"中國文學史專題研究",
"中國歷史經典研讀（二）",
"中國民族史",
"中國民族志",
"中國法律思想史專題研究（二）",
"中國現代文化史專題",
"中國現代文學史",
"中國經濟發展",
"中國與亞洲經濟整合",
"中國資本主義",
"中國近世的教育與社會",
"中國近世醫療史",
"中國近代政治制度史專題",
"中國近代社會史",
"中國近現代報刊思想及文化專題研究",
"中國通史（三）",
"中國通史（二）",
"中國通史（五）",
"中國道教文學",
"中日語言研究演習",
"中日語言研究演習１",
"中東石油政治經濟學",
"中東與中亞文化專題",
"中東與中亞經濟能源研究",
"中東與中亞語言發展研究",
"中歐概論",
"中級俄語",
"中級俄語會話",
"中級俄語視聽訓練（二）",
"中級俄語語法",
"中級俄語閱讀訓練（二）",
"中級寫作訓練",
"中級德文聽力會話",
"中級德文語法",
"中級德文閱讀",
"中級日語",
"中級會計學（二）",
"中級法文聽力會話",
"中級法文語法",
"中級法文閱讀",
"中級泰語（二）",
"中級西文聽力會話",
"中級西文語法",
"中級西文閱讀",
"中級越語聽力",
"中級越語（二）",
"中級韓國語",
"中華人民共和國史",
"中華文化英語課程：華人傳統民間文化",
"中華文化英語課程：藝術在臺灣",
"中華民國憲法",
"中華民國憲法及政府",
"中華民國憲法與政府",
"事業創新與智財策略",
"事業經營策略",
"二十世紀俄國文學：動盪的時代、分裂的文學",
"二十世紀英國文學",
"二戰時期台灣史專題",
"互動科技：媒材、感知與設計",
"互動聲音設計",
"亞太國際關係",
"亞洲新媒體研究",
"亞洲經濟問題研究（甲）",
"亞洲經濟整合",
"亞洲遷徙",
"交通運輸與土地利用研究",
"人力資源管理",
"人口學",
"人文與社會的連結",
"人權理論與實務",
"人獸之間",
"人道關懷與農業技術援外",
"人際溝通與團隊合作",
"人際關係與溝通",
"人體生理學",
"人體生理學實驗",
"代數學",
"仲裁法",
"企業併購法專題研究",
"企業個案研討",
"企業公共關係",
"企業創新平台（二）",
"企業問題研討（一）",
"企業問題研討（三）",
"企業實習",
"企業流程模式",
"企業策略經濟分析",
"企業診斷與決策",
"企業資料通訊",
"企業重組與購併",
"企業顧問案例研討",
"伊斯蘭世界與土耳其文化",
"伊斯蘭文明",
"伊斯蘭經濟與清真文化",
"伴侶與婚姻諮商研究",
"住宅問題與政策",
"佛教經典與宗教敘事",
"作業研究",
"作業管理",
"作業管理研討",
"供應鏈管理系統研究",
"侵權行為法專題研究（一）",
"俄國兒童文學",
"俄國文化與社會",
"俄國文學專題：19世紀短篇小說",
"俄國藝術",
"俄羅斯國家與社會關係",
"俄羅斯外交政策",
"俄羅斯能源",
"俄語會話（三）",
"俄語會話（四）",
"俄語翻譯",
"俄語語法史",
"俄語（一）",
"俄語（二）",
"俗文學概論",
"保險單條款專題研究",
"保險實證研究方法",
"保險會計與財務報表分析",
"保險法",
"保險法專題研究",
"保險法專題研究（五）",
"保險理論",
"保險理論專題",
"保險科技",
"保險糾紛介紹",
"修辭學",
"個別研究A",
"個案研究",
"個體經濟學",
"個體經濟理論（二）",
"個體經濟理論（四）",
"健康管理專題講座",
"健康與生活",
"傳播心理學",
"傳播政治經濟學",
"傳播方法與實踐",
"傳播法規與倫理",
"傳播科技與日常生活",
"傳播統計分析",
"傳播與文化專題：跨領域視野",
"傳播與社會",
"傳播與社會專題：傳播說服、傳播心理與傳播效果",
"債券市場",
"儒家思想專題研究與教學",
"優化理論專題",
"優選理論實務",
"先秦哲學",
"先秦政治思想典籍導讀",
"先秦政治思想專題",
"兒童及青少年偏差行為概論",
"入學研究營",
"全民國防教育軍事訓練—全民國防",
"全民國防教育軍事訓練—國防政策",
"全民國防教育軍事訓練—國防科技",
"全民國防教育軍事訓練—國際情勢",
"全球企業經營環境",
"全球化下西方社會與民族關係",
"全球化的爭辯",
"全球化與公共政策",
"全球化與台灣專題",
"全球化與社會變遷",
"全球化與經濟整合",
"全球扶貧與中國經驗",
"全球治理與國內政策互動專題",
"全球治理與環境永續",
"全球經濟與企業發展",
"全球經濟與勞工問題",
"全球與跨文化行銷管理",
"全職諮商實習（二）",
"全面創新管理實務",
"兩岸政治參與",
"兩岸政治發展與比較",
"兩岸流行文化研究—中國電影專題",
"兩岸經濟發展與世界經濟",
"兩岸經貿實務",
"兩岸關係概論",
"兩岸關係：理論與實務",
"公共報導與公關寫作",
"公共審議與政策分析",
"公共支出分析與應用",
"公共政策",
"公共政策分析與討論",
"公共政策與分析",
"公共政策與媒體溝通",
"公共管理",
"公共行政與災害防救",
"公共議題分析",
"公共關係基礎",
"公司治理與財務報表（打造後ECFA時代國際會計菁英的十八堂課）",
"公司法專題研究（六）",
"公司法案例研習（一）",
"公司財務",
"公寓大廈管理條例",
"公平交易法",
"公民參與及政策分析",
"公民教育",
"公私協力法",
"公部門資料分析與實作",
"公關策略與企劃",
"六朝佛學思想專題研究",
"共同基金投資管理與產品發展實務研討",
"再保險",
"出版產業政策研究",
"分子神經生物學",
"刑事政策",
"刑事法律實務",
"刑事法綜合研習",
"刑事訴訟法",
"刑事訴訟法專題研究（三）",
"刑事訴訟法（一）",
"刑法",
"刑法中心公益服務實習（一）",
"刑法分則",
"刑法實例研習",
"刑法（二）",
"刑罰思想史專題研究（一）",
"初級中文二",
"初級俄語",
"初級俄語口說訓練（二）",
"初級俄語會話",
"初級俄語視聽訓練（二）",
"初級俄語語法",
"初級俄語閱讀訓練（二）",
"初級德文應用",
"初級德文聽力會話",
"初級德文語法",
"初級德文閱讀",
"初級日語",
"初級會計學（一）",
"初級會計學（二）",
"初級法文應用",
"初級法文聽力會話",
"初級法文語法",
"初級法文閱讀",
"初級泰語寫作",
"初級泰語閱讀",
"初級西文應用",
"初級西文聽力會話",
"初級西文語法",
"初級西文閱讀",
"初級越語",
"初級越語會話",
"初級韓國語",
"判斷與決策歷程",
"利率與信用金融工程學",
"創傷文學",
"創創入門",
"創意思考研究",
"創意溝通專題：X計畫",
"創意溝通專題：廣告文案",
"創意溝通專題：洞察與想像",
"創意溝通專題：美術攝影創作",
"創意研討Ｂ",
"創意研討Ｄ",
"創意與設計",
"創意設計實務",
"創意設計專題（二）",
"創意－意識創造暨實務",
"創新創意論壇",
"創新管理",
"創新與創意事業經營",
"創新與智慧財產",
"劇場設計",
"動態競爭與創新研討",
"動態系統",
"動物與人類社會",
"動畫與影視特效",
"勞動事務實習：人力資源（一）",
"勞動事務實習：勞動市場（一）",
"勞動事務實習：勞動法令（一）",
"勞動事務實習：勞資關係（一）",
"勞動契約法專題研究（二）",
"勞動政治經濟名著選讀（二）",
"勞動政策專題研究",
"勞動法",
"勞動法學專題研究",
"勞動法學論文專題研究",
"勞動法與社會法導論",
"勞動社會學專題研究（二）",
"勞動社會學論文專題研究",
"勞動經濟學",
"勞動經濟學（二）",
"勞動經濟理論與政策（一）",
"勞社法導論",
"勞資協商專題研究",
"勞資關係概論",
"北韓研究",
"區域研究—中東國際關係研究",
"區域研究—北美國際關係",
"區域研究—東北亞國際關係研究",
"區域經濟",
"區塊鏈技術與應用",
"區塊鏈與Python程式設計簡介",
"區塊鏈與智能合約",
"協同商務系統研究",
"南北朝佛學思想專題研究（一）",
"博物館展覽設計與製作",
"博物館的經驗與傳承",
"危機管理",
"危機處理",
"危機處置",
"危險理論",
"原住民空間研究",
"口述歷史",
"古代中國地域史研究日譯名著選讀",
"古代漢語與閱讀方法",
"古典力學",
"古典小說選讀",
"古蘭經與聖訓",
"句法學",
"另類教育全球經驗研究",
"台日普羅文學與新感覺派文學專題",
"台灣原住民",
"台灣原住民族圖像與文學專題（二）：東亞之眼；日本人眼中的原住民圖像（1895-1945）",
"台灣原住民社會文化專題",
"台灣原住民語言—賽德克語",
"台灣原住民語言—阿美語",
"台灣後殖民與後現代文學專題研究",
"台灣戲曲概論",
"台灣文學史史料學",
"台灣歷史與文化",
"台灣民族志",
"台灣發展重大公共議題",
"台灣的政治發展",
"台灣的經濟發展",
"台灣社會文化史專題─人類學的觀點",
"台灣社會研究",
"台灣空間發展",
"台灣經濟史概論",
"台灣華語的在地化",
"台灣閩南話與台灣文化",
"台灣電影與文學中的性別",
"台灣體育運動史研究",
"台美中關係與國際體系",
"台美關係史專題",
"史料解析",
"司各特專題",
"合作學習",
"合併、收購與重整",
"呂格爾《時間與敘事》（卷一）",
"周易研究",
"品牌管理與創新",
"哲學經典導讀",
"唐代家族法研究",
"唯識學原典研究",
"商事法",
"商學基礎理論與應用",
"商用日文書信２",
"商用日語會話２",
"商用英文",
"商用英文：口語溝通與談判技巧",
"商用英文：閱讀與寫作",
"商用韓文書信",
"問卷調查設計與執行",
"因果推論與資料科學在經濟學的應用",
"固定收益證券﹕分析與創新",
"固態物理（二）",
"國外見習",
"國家、個人與社會福利",
"國家安全與台灣法律地位",
"國家組織法",
"國文",
"國文─中國神話選讀",
"國文－中國思想名作選讀",
"國文－中國語言文字名作選讀",
"國文－古典小說選讀",
"國文－古典戲曲選讀",
"國文－古典散文選讀",
"國文－古典詩選讀",
"國文－現代小說選讀",
"國文－現代散文選讀",
"國文－現代詩歌選讀",
"國文－臺灣文學選讀",
"國會與立法行為",
"國防政治學",
"國際交流與全球經貿專題（二）",
"國際人道法與難民法",
"國際企業專題",
"國際企業經營策略",
"國際公法",
"國際公法專題研究（三）",
"國際勞動基準專題研究",
"國際合作專題研究--國際非政府組織與發展",
"國際商事法專題研究",
"國際商學專題研討（二）",
"國際商學專題研討（四）",
"國際商學經營專題",
"國際媒體寫作實務",
"國際媒體與行銷",
"國際安全",
"國際安全專題",
"國際安全研究",
"國際投資專題研究",
"國際政治經濟學",
"國際政治與台灣民主化（二）",
"國際教育資料庫分析研究",
"國際智慧財產專題研究（二）",
"國際智慧財產權法專題研究（二）",
"國際發展經濟學",
"國際租稅問題",
"國際競爭策略",
"國際組織",
"國際組織研究",
"國際經濟專題研究（一）",
"國際經濟法",
"國際經濟法專題研究（一）",
"國際經濟法研究",
"國際經濟研究",
"國際經貿法",
"國際經貿法專題",
"國際行銷管理",
"國際談判實務",
"國際財務",
"國際財務專題研討",
"國際財務管理",
"國際貿易",
"國際貿易經營管理",
"國際貿易與法律（三）",
"國際金融",
"國際金融專題",
"國際金融治理",
"國際金融法專題（二）",
"國際金融（二）",
"國際關係",
"國際關係理論專題",
"國際關係理論與中共外交",
"國際關係研究",
"圖像台灣民間信仰",
"圖像與文創",
"圖學",
"圖書資訊學研究趨勢",
"圖書資訊專業實習",
"圖論",
"團結經濟與市場社會",
"土地使用管制",
"土地及不動產市場專題",
"土地問題討論",
"土地政策",
"土地法",
"土地法實例研習",
"土地登記",
"土地經濟學",
"土地行政",
"土耳其語視聽與口說訓練（三）－實用演練",
"土耳其語視聽與口說訓練（四）－高階應用與口譯",
"土耳其語視聽與會話（一）",
"土耳其語視聽與會話（二）",
"土耳其語語法與寫作（二）",
"土耳其語語法與翻譯",
"地價與地稅：理論、實證與政策",
"地方產業與經濟發展",
"地球的奧秘",
"地籍測量及實習",
"地緣政治與亞太安全",
"地緣政治與國家安全",
"基督宗教：歷史與主題",
"基督教與社會",
"基礎創意寫作",
"基礎動畫設計",
"基礎影音製作",
"基礎法學導論",
"報導文學",
"塞爾維亞與克羅埃西亞語",
"墨子",
"壓力與情緒管理",
"壯語",
"外交英文（二）",
"多元文化教育",
"多元文化與教育輔導",
"多國籍企業財務決策",
"多媒體製作",
"多語言多文化同時學習２（中日）",
"多變量分析",
"多變量分析專題",
"多變量統計分析",
"大一土耳其語",
"大二土耳其語",
"大國崛起與國際關係理論",
"大地測量學及實習",
"大學外文（二）：印尼文（馬來文）",
"大學外文（二）：古希臘文",
"大學外文（二）：土耳其語",
"大學外文（二）：塞爾維亞與克羅埃西亞語",
"大學外文（二）：壯語",
"大學外文（二）：德文",
"大學外文（二）：拉丁文",
"大學外文（二）：捷克文",
"大學外文（二）：日文",
"大學外文（二）：日文（數位學習）",
"大學外文（二）：法文",
"大學外文（二）：法文（全法文授課）",
"大學外文（二）：波斯文",
"大學外文（二）：波蘭文",
"大學外文（二）：泰文",
"大學外文（二）：滿語",
"大學外文（二）：維吾爾語",
"大學外文（二）：義大利文",
"大學外文（二）：葡萄牙文",
"大學外文（二）：蒙古語",
"大學外文（二）：藏語",
"大學外文（二）：西班牙文",
"大學外文（二）：越南文",
"大學外文（二）：韓語",
"大學外文（四）：印尼文（馬來文）",
"大學外文（四）：德文",
"大學外文（四）：日文",
"大學外文（四）：法文",
"大學外文（四）：西班牙文",
"大學英文（三）:寫作二（ETP專班）",
"大學英文（三）：口語訓練二（ETP專班）",
"大學英文（三）：口語訓練與演說",
"大學英文（三）：口語訓練與閱讀",
"大學英文（三）：商用寫作與口語訓練",
"大學英文（三）：商用聽力與口說訓練",
"大學英文（三）：商用英文",
"大學英文（三）：文化主題聽講訓練",
"大學英文（三）：新聞聽力",
"大學英文（三）：聽力與口語訓練",
"大學英文（三）：英文寫作",
"大學英文（三）：讀小說學英文",
"大學英文（三）：電影聽力與口說訓練",
"大學英文（二）",
"大數據之決策管理及審計實務",
"大數據分析實務",
"大數據品牌行銷",
"大眾文化專題─離散、媒體與外籍配偶",
"大眾文化專題－電視文化",
"大眾文學與文化研究－偵探小說與浪漫小說的理論與應用",
"大腦與我",
"大陸傳播生態與制度",
"大陸國際公關策略研究",
"大陸當代小說選讀",
"大陸稅法",
"大陸經濟發展與兩岸經貿關係",
"大陸經貿法律研究（二）",
"天氣與氣候",
"奈米科技導論",
"女性勞動參與專題研究",
"女性與政治",
"媒介生態專題",
"媒介組織經營管理",
"媒介經濟學",
"媒體內容企劃",
"媒體實踐與物質文化",
"媒體德文",
"媒體消費與物質文化",
"媒體經典個案",
"媒體阿拉伯文",
"學庸",
"學思歷程IV",
"學校公共關係研究",
"學校行政研究",
"學校輔導專題研究",
"學習評量",
"學術俄語（一）",
"學術俄語（二）",
"宗教研究基本問題",
"宗教與藝術專題",
"客家語言與文化",
"家事事件法",
"家庭社會學",
"實用投資管理",
"實用日本語２",
"實用韓國語",
"實變函數論",
"實驗室實習（二）",
"實驗設計",
"審計學（一）",
"審計學（一）實習",
"審計學（二）",
"審計實務實習",
"寫作與口語訓練（二）",
"寫作與閱讀（一）",
"寫作與閱讀（二）",
"專利與競爭專題（二）",
"專案實作Ａ",
"專案實作Ｄ",
"專案研究（三）",
"專案管理",
"專業土耳其語－傳播與資訊",
"專業土耳其語－宗教與社會",
"專業土耳其語－政治與外交",
"專業土耳其語－科學與藝術",
"專業土耳其語－經濟與貿易",
"專業土耳其語－語言與文學",
"專業實習",
"專業德文",
"專業德文聽力會話",
"專業法文",
"專業法文聽力會話",
"專業西文",
"專業西文聽力會話",
"專題發表演習（二）",
"專題研究與論文寫作",
"專題研究（二）",
"專題研討",
"專題研討（二）",
"專題研討（四）",
"專題討論（IV）",
"專題討論（Ⅵ）",
"專題討論（二）",
"專題討論（四）",
"專題討論－生物科技管理個案",
"專題－短片編劇與賞析",
"小說選讀",
"居住與城市研究",
"工會法專題研究",
"工程與法律（三）",
"巴利《長部》選讀",
"巴菲特投資學",
"市場與創新科技預測",
"希伯來文聖經導讀",
"常微分方程式論",
"平台策略與創新實踐",
"幼兒園經營策略",
"幼教政策與行政研究",
"幼教組織與品質實證研究",
"康德《判斷力批判》導讀",
"廣播節目製作",
"廣電敘事研究",
"建築學概論",
"張量流與機器學習",
"強制執行法專題研究",
"強制執行法與破產法",
"影像製作",
"影像視覺元素",
"影展研究與經營實務",
"影視民族學",
"影視編導實務",
"影視製片與發行",
"影音新聞－電視",
"後現代教育專題研究",
"後現代社會工作",
"從全球史的角度看現代中國的發展專題",
"從土耳其看世界",
"從媒介文化到漫畫",
"從文學看戰後台韓歷史",
"從漫畫看日本",
"從資料學習（二）",
"從電影認識精神疾病",
"微分方程",
"微分方程式",
"微積分",
"微積分實習",
"微積分（理工）",
"德國戲劇賞析",
"德國文化概論",
"德國文學概論",
"德國統一前後之研究",
"德文法學名著選讀（二）",
"德文翻譯實務",
"德文（二）",
"德育原理",
"德語系國家文化入門",
"心智障礙之神經生物學",
"心理及教育統計學",
"心理學專業總整（一）",
"心理實驗法",
"心理實驗法實驗",
"心理測驗與評量",
"心理測驗與評量研究",
"心理與生活",
"心理衡鑑",
"心臟血管系統疾病之面面觀",
"心靈哲學",
"思考脈絡－創新採納與擴散",
"性別政治",
"性別教育你我他",
"性別研究",
"性別與傳播科技",
"性別與發展",
"性格心理學",
"情緒社會學",
"想像與書寫",
"憲法",
"應用俄語寫作",
"應用個體經濟",
"應用計量:總體專題研究（一）",
"應用計量：（財務）時間序列分析",
"應用阿拉伯語（一）",
"應用阿拉伯語（二）",
"成本管理會計（二）",
"戰國文字研究－以清華簡為中心",
"戰後台灣企業與社會",
"戰後台灣史",
"戰爭中的女性",
"戰爭與和平：二次戰後的東亞",
"戰略研究",
"戲劇概論",
"房地產正義的思辨",
"所得稅理論與制度",
"手稿史料專題討論（二）",
"批判傳播理論—新媒體篇",
"投資學",
"投資決策與管理",
"投資組合管理",
"投資銀行策略與實務",
"拉丁美洲政府與政治",
"捷克文（一）",
"捷克文（三）",
"捷克文（二）",
"捷語會話（一）",
"捷語會話（二）",
"探索數位世界",
"探索遺傳特性",
"損害賠償法專題研究",
"攝影與文化",
"政府人事管理",
"政府採購法",
"政府採購法專題研究",
"政府會計",
"政府財務報導",
"政治傳播專題",
"政治公共關係",
"政治哲學概論",
"政治學",
"政治學方法論",
"政治思想指導獨立研究",
"政治發展理論",
"政治社會學",
"政治經濟學",
"政策保險專題",
"政策分析與管理",
"政策分析與論文寫作",
"政策爭議與社會溝通",
"教學原理",
"教學媒體與運用",
"教育倫理學研究",
"教育學傳記研究",
"教育心理學",
"教育探索與自我學習",
"教育政策分析專題研究",
"教育概論",
"教育權研究",
"教育研究專題討論（二）",
"教育研究法",
"教育社會學",
"教育社會學專題討論",
"教育科技領導與創新研究",
"教育視導研究",
"教育設施與規劃專題研究",
"教育設施規劃研究",
"教育議題專題",
"敦煌吐魯番學專題",
"整合實驗中心實驗",
"整合實驗中心實驗Ａ",
"整合實驗中心實驗Ｂ",
"整合行銷傳播",
"數位內容技術實作",
"數位出版",
"數位出版與學術傳播",
"數位媒體創意與實務",
"數位媒體與行銷",
"數位學習",
"數位影像設計",
"數位敘事",
"數位檔案加值應用",
"數位社會與社會網絡",
"數位系統實驗",
"數位系統導論",
"數位金融實務運用",
"數值分析",
"數值地形模型",
"數學、邏輯與人生",
"數據科學與大數據分析",
"數理方法",
"數理統計",
"數理統計學",
"數理統計學（二）",
"數量方法專題研討（一）",
"數量方法（二）",
"文化創意加值",
"文化創意產業",
"文化創意產業管理研討（一）",
"文化產業與智慧財產權",
"文化產業與智慧財產權專題實作（二）",
"文化與法律（一）",
"文化與現代性",
"文學作品讀法",
"文學專題",
"文學概論",
"文學理論與批評",
"文學與電影",
"文學與韓國文化",
"文明發展與歷史思惟",
"文本分析與數位人文",
"文獻學",
"文類與跨界：六朝唐宋文學與辭賦書寫",
"新世代行動通訊系統",
"新世紀日本政治",
"新台灣電通講堂：創造未來的「品牌創新與體驗設計」",
"新媒介商業模式",
"新媒體創意轉化",
"新媒體匯流",
"新媒體科技文明",
"新社會思想史",
"新聞媒體實驗（二）",
"新聞攝影",
"新聞日語２",
"新聞網站平台運作實務",
"新聞資訊與實踐",
"新金融商品個案分析",
"方法論",
"日常物理",
"日文中譯理論與實務２",
"日文史學名著選讀",
"日文寫作",
"日文教材教法與實習",
"日文法學名著選讀（二）",
"日文習作（一）",
"日文習作（二）",
"日文（二）",
"日本古典文法２",
"日本名著選讀Ａ２",
"日本名著選讀Ｂ２",
"日本名著選讀Ｃ２",
"日本名著鑑賞",
"日本外交政策",
"日本專題研究Ａ２",
"日本專題研究Ｂ２",
"日本專題研究Ｃ２",
"日本思想文化研究４",
"日本戰後社會與思想１",
"日本政治經濟研究",
"日本文化史研究２",
"日本文化２",
"日本次文化與遊戲性故事",
"日本歷史",
"日本現代文學賞析２",
"日本的市民社會",
"日本的東亞安全保障",
"日本研究專論II",
"日本與東北亞關係",
"日本近代政治外交史",
"日本近現代史",
"日記、回憶錄與台灣史",
"日語文法研究２",
"日語會話演習（一）",
"日語會話演習（二）",
"日語會話（一）",
"日語會話（三）",
"日語會話（二）",
"日語演習（一）",
"日語演習（二）",
"日語語法",
"日韓關係研究",
"明清小說物質文化專題研究",
"明清文學專題研究",
"明清身體與情緒專題",
"時間數列分析",
"普通心理學",
"普通物理學實驗（二）",
"普通物理學（二）",
"智慧財產商業化專題",
"智慧財產權與競爭法",
"智慧財產權與競爭法的衝突與調和",
"智慧財產管理",
"智能供應鏈：趨勢與應用",
"智能科技與資料探勘",
"智財法學研究方法論",
"曲選",
"書報討論IV",
"書報討論VI",
"書報討論Ⅱ",
"書報討論（一）",
"書報討論（二）",
"書法",
"會計學",
"會計專題研討（二）",
"會計專題研討（四）",
"會計研究專題：相同會計師對於關係人交易和審計品質的影響",
"會計資訊系統（二）",
"服務創新管理",
"服務學習課程─原住民族學生志工大使團",
"服務學習課程─原住民族部落地圖工作隊",
"服務學習課程─商院推廣與職涯發展活動服務學習",
"服務學習課程─四維堂暨雲岫廳視聽服務義工團隊培訓與服務",
"服務學習課程─政大實小英語課輔服務",
"服務學習課程─社區英語教學服務",
"服務學習課程─精彫文山茶鄉書寫服務",
"服務學習課程─職涯發展活動服務學習",
"服務學習課程─藝文活動服務學習I--前台、劇場暨展覽",
"服務學習課程─藝文活動服務學習II--前台、劇場暨展覽",
"服務學習課程－IC部落社─部落小學成長陪伴營",
"服務學習課程－不動產研習志工服務",
"服務學習課程－中小學學生財管常識宣導",
"服務學習課程－交通管理",
"服務學習課程－以歐語（德、法、西）描述的台灣－建立資料庫",
"服務學習課程－伯大尼兒少家園課後輔導",
"服務學習課程－偏遠學校課輔",
"服務學習課程－兩岸學生影展企劃與執行",
"服務學習課程－公益實習服務",
"服務學習課程－創意發想與實踐",
"服務學習課程－動物園（假日班）",
"服務學習課程－動物園（寒假班）",
"服務學習課程－動物園（平日班）",
"服務學習課程－台南校友會返鄉服務冬令營",
"服務學習課程－國際事務研習志工服務",
"服務學習課程－國際教育交流（一）",
"服務學習課程－國際教育交流（二）",
"服務學習課程－國際服務學習課程",
"服務學習課程－國際法學圖書館服務學習",
"服務學習課程－國際英語商管社服務團",
"服務學習課程－圖書館",
"服務學習課程－土地測量與資訊研習志工服務",
"服務學習課程－土耳其語文學系圖書室之運作與管理",
"服務學習課程－地政與土地資源規劃研習志工服務",
"服務學習課程－外國學生互助志工群",
"服務學習課程－外籍勞工服務計畫",
"服務學習課程－大型營隊及校際比賽活動規劃及實習",
"服務學習課程－大手牽小手‧數位學伴攜手服務課程",
"服務學習課程－失親兒之關懷",
"服務學習課程－實驗小學志工服務課程",
"服務學習課程－山居學習暨休閒中心之管理",
"服務學習課程－希望閱讀",
"服務學習課程－建構友善互助學習的校園環境",
"服務學習課程－心理營",
"服務學習課程－悅讀人與閱讀空間",
"服務學習課程－愛愛會社會服務",
"服務學習課程－指南服務團－社會服務與學習（一）",
"服務學習課程－指南服務團－社會服務與學習（二）",
"服務學習課程－教學媒體服務團服務",
"服務學習課程－文山區國小課後輔導與關懷",
"服務學習課程－斯拉夫語言文化推廣：活動策畫與執行",
"服務學習課程－書卷獎小老師",
"服務學習課程－校友之聯繫與服務",
"服務學習課程－校友服務及校園步道解說",
"服務學習課程－校園新聞採訪與報導",
"服務學習課程－校園服務與數學諮詢",
"服務學習課程－校園流浪狗的認識與管理",
"服務學習課程－校慶主題園遊會規劃及執行志工",
"服務學習課程－植栽服務",
"服務學習課程－歷史系圖書室之運作與管理",
"服務學習課程－海外臺灣文化推廣計畫",
"服務學習課程－災區兒童英語教學與輔導",
"服務學習課程－畢業典禮服務課程",
"服務學習課程－社區參與與廣告傳播",
"服務學習課程－社區國中生課後輔導",
"服務學習課程－社區與參與傳播Ⅱ",
"服務學習課程－社會服務與學習",
"服務學習課程－社資中心與分館",
"服務學習課程－系友聯繫與服務",
"服務學習課程－經濟系系務活動參與及實踐",
"服務學習課程－萬芳國小英語課輔服務",
"服務學習課程－萬芳醫院服務",
"服務學習課程－行政領袖種子營服務志工培訓",
"服務學習課程－認識校史與校史導覽",
"服務學習課程－課後陪讀計畫",
"服務學習課程－資管系系學會參與及實踐",
"服務學習課程－資訊技術支援志工服務",
"服務學習課程－身心健康中心志工服務",
"服務學習課程－運動志工",
"服務學習課程－阿拉伯語言及文化服務課程",
"服務學習課程－韓文系圖書室之運作與管理",
"服務學習課程－高雄校友會返鄉服務隊",
"服務科學與服務創新",
"服務管理個案研究",
"服務行銷",
"未來互動電影",
"朱子學與韓國儒學",
"東亞政府與政治",
"東亞現代性與文化翻譯專題",
"東亞的國家、民族主義與現代性",
"東亞與南亞之民主與民主化",
"東亞近代文學專題",
"東南亞國際關係專題",
"東南亞文化與英語寫作",
"東南亞族群發展",
"東南亞智慧生活導論",
"東南亞歷史文化（一）",
"東南亞比較政治",
"東南亞民族與現況",
"東南亞華人社會專題",
"東南亞飛行教室5:認識蘭納文化-泰國北部博物館和民族文化村田野調查",
"校園建築與規劃研究",
"校長學專題研究",
"梅洛龐蒂論世界",
"梵文（四）",
"模仿與創新：理論與實踐",
"機器學習技術研究",
"機器學習概論",
"機構實習",
"機率論",
"檔案技術服務專題",
"檔案讀者服務專題",
"檢驗醫學與健康人生",
"歐亞樞紐下的土耳其",
"歐洲文學",
"歐洲社會與歐盟政經問題",
"歐洲聯盟",
"歐洲聯盟的永續發展",
"歐盟的兩岸政策",
"歐盟與俄羅斯經貿關係專題",
"歐盟訴訟法專題",
"歐美比較智慧財產權法專題研究",
"歐陸政府與政治",
"歡迎光臨會計小鎮",
"歷代文選及習作",
"歷史檔案數位化與詮釋",
"歷史英文",
"歷史記憶與近代中國國族論述想像",
"殖民研究",
"比較制度分析",
"比較國際教改",
"比較宗教方法學",
"比較宗教：歷史與主題",
"比較憲法專題研究（三）",
"比較政府",
"比較政府與政治",
"比較政治",
"比較政治理論與方法",
"比較教育專題研究",
"比較社會政策",
"民主與善治",
"民事法律實務",
"民事訴訟法（二）",
"民國文學專題：作家與文本",
"民意調查概論",
"民族主義與族群關係",
"民族問題",
"民族學",
"民族學專題研究",
"民族學方法",
"民族學田野：菲律賓文化與地理研究",
"民族政策",
"民族文學",
"民法",
"民法債編各論",
"民法債編總論",
"民法債編總論（一）",
"民法概要",
"民法總則實例研習",
"氣候變遷時期土地與環境法制專題研究",
"永續發展",
"永續發展研究",
"永續與共享城市",
"沙特：《存在與虛無》",
"法國戲劇賞析",
"法國文化概論",
"法國文學概論",
"法學思維與刑法",
"法學思維與刑法（二）",
"法學科際整合導論（二）",
"法學素養",
"法律文件寫作與資料蒐集",
"法律服務",
"法律與文化專題研究─脈絡中的法律",
"法律診療-勞動訴訟實務",
"法律診療－勞動訴訟實務",
"法文專業翻譯實務",
"法文翻譯實務",
"法治與行政",
"法理學（一）",
"法語系國家文化入門",
"法鼓人文講座：傳統與現代",
"波蘭文（一）",
"波蘭文（三）",
"波蘭文（二）",
"波語會話（一）",
"波語會話（二）",
"泰語應用文寫作",
"流行音樂與數位創意運用",
"海上保險",
"海商法",
"海洋法專題研究",
"消費稅理論與制度",
"消費者保護法",
"消費者保護法專題研究（二）",
"消費者行為",
"消費行為",
"深度學習：理論及應用",
"清代台灣社會文化史",
"測量學及實習",
"測量平差法",
"測量平差法特論",
"測量總實習",
"滿語",
"演算法",
"演算法分析",
"漢字教學的理論與應用",
"漢字源流與對外漢字教材專題",
"漢語、閩南語、客家話類別詞研究",
"漢語教學語法",
"潛在變項模式",
"激勵與領導",
"無形資產報導與評價",
"無母數函數估計",
"爭議案件與法律解釋方法",
"爭辯中的人類安全：正義、平等、人道與人權",
"物權法",
"物權法實例研習",
"物理學史與人類文明",
"特殊教育導論",
"獨立研究",
"獨立研究（四）",
"獨立研究：道教養生",
"玩具研究",
"班級經營",
"現代中東政治及經濟導論",
"現代主義－藝術與文化專題",
"現代俄國小說選讀",
"現代土耳其與歐洲社經關係",
"現代密碼學",
"現代文明的傳統根源",
"現代日本語文法論２",
"現代歷史影像的敘事功能與考證解釋",
"現代漢語句法結構分析",
"現代西方文學理論",
"現代財政理論",
"現代阿拉伯文藝思潮",
"理解韓國流行文化",
"環境保護法專題研究（二）",
"環境外交",
"環境政策經濟分析",
"環境治理：政治、政策與行政",
"環境與健康風險傳播",
"環境變遷與大眾傳播",
"環境，生活，與癌症",
"環太平洋語言：歷史，語言，社會與政治",
"環視全球－挑戰國際視野",
"生命價值與哲學思惟",
"生命探索與宗教文化",
"生命教育",
"生態經濟學",
"生活中的生命科學",
"生活中的經濟學",
"生涯輔導",
"生物技術導論",
"生物資訊概論與實務",
"產品企畫與專案管理",
"產品與品牌管理",
"產業分析",
"產業地域治理專題研究",
"產業用地政策專題研究",
"產業經濟學",
"產業經濟學（二）",
"產業經濟（一）",
"用俄語說台灣：購物、節慶與民俗、飲茶文化、醫療保健",
"由歷史事件看國際關係",
"畢業製作",
"當代台灣旅行文學欣賞",
"當代政治哲學發展",
"當代文學理論與批評",
"當代日中台關係",
"當代日本政治社會專題（二）",
"當代日本社會",
"當代社會研究與思辨",
"當代阿拉伯語",
"當代電影理論",
"當前財政與稅務問題研討",
"當前金融問題與對策",
"癌症心理學",
"發展中國家國際關係研究",
"發展心理學",
"發展援助與亞太合作",
"發展與政策",
"看的方法（紀錄片）",
"眼動與認知導論",
"睡眠異常專題",
"知覺心理學",
"知識論",
"矩陣計算",
"研究倫理與論文實作",
"研究創意坊",
"研究方法",
"研究方法Ⅱ",
"研究方法專題",
"研究方法與專題指導",
"研究方法與論文寫作",
"研究方法論",
"研究方法（一）",
"研究方法（二）",
"研究發表營",
"研究設計與方法",
"社交與娛樂媒體",
"社區工作",
"社會企業與社會創新",
"社會保險",
"社會創新實作",
"社會學",
"社會學動動腦",
"社會學實習",
"社會學理論",
"社會學理論實習",
"社會學研究方法",
"社會學資料處理",
"社會學資料處理實習",
"社會工作實習（一）",
"社會工作理論專題",
"社會政策與社會立法專題",
"社會法",
"社會法專題研究（一）",
"社會理論",
"社會研究方法",
"社會研究方法實習",
"社會科學哲學",
"社會科學研究方法",
"社會科學研究方法（一）：量化研究方法",
"社會科學統計方法",
"社會科學統計方法實習",
"社會統計",
"社會統計實習",
"社會議題與創意溝通",
"社會責任與倫理",
"社會趨勢",
"社會領域教學實習",
"社群多媒體",
"社群媒體與行銷",
"社群媒體行銷",
"社群網路分析理論與應用",
"神經心理衡鑑與復健",
"神經生理",
"神經科學研究的動物行為模式",
"神經藥理學",
"福利經濟學",
"禮記",
"禮記專題研究與教學",
"科學哲學與教育專題研究",
"科學與圖像傳播",
"科學與風險傳播",
"科學表達與論文寫作",
"科技創新與智慧財產專題（二）",
"科技法律與智財權研討（一）",
"科技產業技術實務",
"科技管理與智慧財產理論研討（二）",
"科技管理與智慧財產理論研討（四）",
"科技與人文社會",
"科技韓語",
"科技風險與環境政策",
"租稅個案實習",
"租稅分析與應用",
"租稅法",
"租稅法專題",
"租稅理論",
"稅務個案實習",
"稅務會計",
"稅務法規",
"程式能力檢定",
"程式設計二",
"程式設計概論",
"程式語言",
"穆斯林民族問題",
"空間與文學",
"空間資訊科技應用特論",
"笛卡兒哲學",
"第三部門",
"第二語言習得",
"策略人才管理",
"策略個案研討",
"策略成本管理－個案實作",
"策略溝通專題：人際溝通與說服",
"策略溝通與文化外交",
"策略管理",
"策略管理理論",
"算術、幾何、天文與萬有引力",
"管理個案研討",
"管理學",
"管理理論專題研討",
"管理科學",
"管理經濟學",
"精實企業與管理實務研討",
"精神分析－從佛洛伊德到拉岡",
"精神史專題－近代台灣",
"精算數學專題",
"精算理論與實務",
"系統模擬",
"紀實採寫",
"紅樓夢",
"細胞訊息傳遞",
"組合學",
"組織心理學",
"組織心理學專題（一）",
"組織理論與行為",
"組織發展",
"組織與領導專題實作（二）",
"組織行為",
"組織行為學研討",
"組織行為專題研討：團體動態與團隊",
"統計套裝程式在教育研究上的應用",
"統計學",
"統計學實習",
"統計學（二）",
"統計物理專題",
"統計計算與模擬",
"統計諮詢",
"統計資料分析",
"絲路經濟與土耳其民族",
"經濟人類學",
"經濟全球化與台商大陸投資",
"經濟分析",
"經濟史專題研究—貿易史",
"經濟問題研討（五）",
"經濟學",
"經濟思想史",
"經濟成長與發展理論",
"經濟政策",
"經濟與國家安全",
"經濟計量學（一）",
"經營策略理論研討（一）",
"經貿泰語會話",
"經貿越語會話",
"綜合活動領域教學實習",
"綠色建築與生態社區",
"綠色能源財經分析",
"維吾爾語",
"網路安全",
"網路搜索與探勘",
"網路與親密關係",
"網路與通訊概論",
"線性代數",
"編劇學",
"總體經濟學",
"總體經濟理論（一）",
"總體經濟理論（二）",
"總體經濟理論（四）",
"美中台關係",
"美國史（一）",
"美國政府與政治",
"美國文學1865以後",
"義大利文藝復興史",
"翻譯專題：文學翻譯",
"翻譯專題：新聞英文翻譯",
"翻譯專題：翻譯理論",
"聊齋誌異",
"聖經與文學",
"聲音人類學",
"聲音藝術與錄音工程",
"聲音製作",
"職場健康心理學",
"職業生涯規劃",
"能源經濟管理導論",
"臨床健康心理學衡鑑與治療",
"臨床心理學全職實習（二）",
"臨床心理學兼職實習（二）",
"臨床心理學實習",
"臨床心理衡鑑（一）",
"臨終死亡的倫理與法律議題（二）",
"自我．身體．文化",
"自由社會的原理",
"臺灣史（二）",
"臺灣政治",
"臺灣文學史",
"臺灣社會安全體制",
"舊社考古田野方法與實習",
"英國文學：1600至1800",
"英文作文（一）",
"英文作文（二）",
"英文地政文獻選讀",
"英文法學名著選讀（一）",
"英文法學名著選讀（五）",
"英美保險訴訟案例分析",
"英美契約法",
"英美文學",
"英語口語訓練",
"英語口語訓練（二）：口語訓練與閱讀",
"英語教學",
"英語教學實務專題",
"英語教學理論",
"英語文進修課程",
"英語聽力訓練",
"英語聽說教學",
"英語語言學概論",
"英語語言發展史",
"英語語音學",
"荀子",
"荀子哲學",
"莊子",
"莎士比亞與哲學",
"莎士比亞與莎士比亞評論",
"菁英商務英語:團隊領導與商務社交技巧",
"菁英商務英語:提案與談判技巧",
"華人傳統民間文化",
"華人宗教：歷史與主題",
"華人文化與社會",
"華德福教育專題研究",
"華語-國際學生專班（七）（八）",
"華語-國際學生專班（三）（四）",
"華語教學語法",
"華語教材教法",
"華語文進修課程",
"著作權法",
"著作權法律與管理專題（一）",
"蒙古語：息利爾蒙文",
"藏語",
"藝術、流行文化與社會",
"藝術概論",
"藝術欣賞與創作",
"藝術行銷",
"藥物使用與生活的關係",
"蘇聯及當代俄羅斯",
"行動內容製作與評估",
"行動商務與大數據管理",
"行動實踐專題：社會創新專案實作",
"行動研究",
"行政學",
"行政救濟法",
"行政法",
"行政法專題研究（二）",
"行政法專題研究（八）",
"行政法（二）",
"行為財務學",
"行銷原理",
"行銷研究",
"行銷管理",
"行銷管理專題",
"行銷管理獨立研究－消費者行為分析",
"衍生性商品",
"衍生性金融商品",
"衛星定位測量",
"衛生保健",
"衝突國家的文教交流",
"複層次迴歸分析",
"西文翻譯實務",
"西方文學經典與人文思維",
"西方眼中的中國與臺灣",
"西歐歷史建築",
"西洋古代政治哲學",
"西洋史學名著選讀專題",
"西洋哲學史（二）",
"西洋外交史",
"西洋文學：中古時期及文藝復興時期",
"西班牙文化概論",
"西班牙文學概論",
"西班牙文（一）",
"西藏專題",
"規劃實務（一）",
"規劃實務（二）",
"規劃實務（二）實習",
"規劃理論專題研究",
"視力保健與眼睛疾病",
"視覺影像中的法律",
"視覺文化研究",
"視覺藝術心理學",
"親職教育",
"觸控介面設計",
"言說分析",
"計算思維",
"計算機程式設計",
"計算機程式設計實習（二）",
"計算機程式設計（二）",
"計算物理導論",
"計量經濟學",
"計量經濟學（二）",
"設計專題－說故事的方式",
"設計專題－隱喻與創意",
"設計思維",
"設計思考實踐",
"設計思考與創新",
"設計未來傳播",
"詞學研究",
"詞選",
"詩經",
"詩選",
"認同政治",
"認知發展",
"認知神經科學導論",
"認識神經疾病",
"語意學導論",
"語文領域-國文教學實習",
"語文領域-英文教學實習",
"語料與問卷設計在華語教學的應用",
"語用學",
"語言學概論",
"語言教學專題：語言學習者自我概念專題",
"語言習得專題：語言發展",
"語言與世界文明",
"語言與文化：以美式英文為例",
"語言處理與統計",
"課程學研究",
"課程發展與設計",
"論文寫作",
"論文寫作指導",
"論文指導（二）",
"論文發表演習（一）",
"論文發表演習（三）",
"論文發表演習（二）",
"論文發表演習（四）",
"論文研究",
"論文研究（二）",
"論文研究（四）",
"論文閱讀與寫作",
"諮商倫理研究",
"諮商實習（二）",
"諮商與心理治療的理論與技術",
"諸子學通論",
"證券承銷實務研究",
"證券管理",
"護法哲學（二）：《觀所緣論釋》研究",
"變態心理學",
"變異數分析與實驗設計",
"財務報表分析",
"財務工程研討",
"財務數學（一）",
"財務理論研討（二）：連續時間模式",
"財務管理",
"財務經濟學（一）",
"財務經濟學（二）",
"財務計量研討",
"財務論文研讀（一）",
"財務金融卓越講座",
"財報分析與銀行授信",
"財政學",
"財政政策",
"財會資訊系統",
"財法中心公益服務實習—金融消費者評議中心見習（二）",
"財產保險",
"財產權理論與土地使用管制",
"財產法專題研究（三）",
"財產法專題研究（四）",
"財產稅理論與制度",
"財經法律實務研究（一）",
"財經法綜合研習",
"貨幣銀行學",
"貪汙犯罪與風險刑法",
"貿易、經濟與永續發展專題",
"貿易政策",
"貿易與投資專題",
"資料分析與統計",
"資料庫管理",
"資料庫系統",
"資料採礦實務",
"資料採礦與大數據分析",
"資料探勘技術與數位人文應用",
"資料科學跨域應用",
"資料結構",
"資料處理",
"資源經濟學",
"資源與環境經濟學（一）：節能減碳政策分析",
"資訊圖表與視覺化",
"資訊專題（A）",
"資訊專題（C）",
"資訊技術研究",
"資訊服務研討",
"資訊科技與法律",
"資訊科技與法律（二）",
"資訊管理",
"資訊系統專案設計",
"資訊系統研發",
"資訊系統與網路安全",
"資訊素養與教學",
"資訊視覺化",
"賦稅改革",
"質化研究方法",
"質性研究",
"質性研究方法",
"質性研究方法研討",
"質性研究法",
"質性與量化研究方法導論",
"賽局理論入門",
"賽局論",
"越語應用文寫作",
"跨國影視產業與政策比較",
"跨境電子商務",
"跨媒體識讀",
"跨文化傳播專題",
"跨文化哲學",
"跨界創作實務",
"跨部門治理",
"身分法",
"身分法案例實習",
"身心障礙與台灣藝文",
"軟體工程概論",
"軟體應用導論",
"輔導原理與實務",
"近代中國對外關係史專題",
"近代初期台灣與東亞關係",
"近代東亞的史料與史學",
"近代臺灣歷史與人物",
"近現代大眾文化史專題",
"近現代文藝思潮",
"迴歸分析（一）",
"迴歸分析（二）",
"退休金與產物保險之精算應用",
"逐/同步口譯",
"通訊定位",
"進階俄語視聽訓練（二）",
"進階俄語語法",
"進階俄語：文學（一）",
"進階俄語：新聞（二）",
"進階俄語：社會",
"進階個體經濟學",
"進階國文─大眾文化中的戲曲身影",
"進階德文寫作",
"進階德文聽力會話",
"進階德文語法",
"進階攝影專題",
"進階法文寫作",
"進階法文聽力會話",
"進階法文語法",
"進階研究寫作",
"進階統計方法",
"進階總體經濟學",
"進階英文寫作",
"進階英語口語訓練：新聞",
"進階西文寫作",
"進階西文聽力會話",
"進階西文語法",
"進階財務管理",
"進階資訊系統研發",
"進階電視製作－紀錄",
"進階韓文寫作",
"運動代表隊—劍道",
"運動代表隊—女子排球",
"運動代表隊—女子桌球",
"運動代表隊—女子硬網",
"運動代表隊—女子籃球",
"運動代表隊—女子羽球",
"運動代表隊—擊劍",
"運動代表隊—柔道",
"運動代表隊—棒球",
"運動代表隊—橄欖球",
"運動代表隊—游泳",
"運動代表隊—田徑",
"運動代表隊—男子排球",
"運動代表隊—男子桌球",
"運動代表隊—男子甲組籃球",
"運動代表隊—男子硬網",
"運動代表隊—男子籃球",
"運動代表隊—男子羽球",
"運動代表隊—足球",
"運動代表隊—跆拳道",
"運動產業實務",
"道家思想專題研究",
"道教儀式專題",
"遙感探測",
"適應性學習與金融交易策略專題",
"遷徙與社會發展：理論與實務",
"邏輯",
"都市交通運輸計畫",
"都市社會與都市問題專題研究",
"都市貧窮與不均",
"醫學知識和健康管理",
"醫療與法律（三）",
"醫療與生活",
"醫療與生活─消化系統疾病與生活",
"野生動物保育行銷",
"量化研究",
"量化研究方法",
"量化研究方法研討",
"量化研究法",
"量子力學（二）",
"金融保險財務管理專題研討",
"金融大數據與程式交易",
"金融專題研討",
"金融市場程式交易專題",
"金融控股公司經營與策略",
"金融科技導論",
"金融科技應用與實務",
"金融科技法制與監理專題（二）",
"金融科技與信任機器",
"金融科技與商業創新",
"金融計量",
"銀行經營管理",
"銷售與顧客關係管理",
"鍾嶸《詩品》研究",
"鏡頭下的國際關係",
"鑑識會計",
"長期照護與健康產業發展",
"長期照顧專題",
"開創領導力",
"閱聽人專題",
"閱聽人研究",
"閱讀指導",
"閱讀與圖書館",
"關懷照護一生",
"阿拉伯世界導論",
"阿拉伯各國政府",
"阿拉伯大眾文化",
"阿拉伯文史概論",
"阿拉伯語詞法學",
"阿拉伯語語法（一）",
"阿拉伯語語法（二）",
"阿拉伯語（一）",
"阿拉伯語（二）",
"階層線性模型分析",
"集體勞動法",
"離子通道與疾病",
"離散數學",
"電動力學",
"電子商務實作研習",
"電子文件管理專題",
"電子電路學",
"電影與國際關係",
"電影配樂概論",
"電腦動畫",
"電腦在經濟上之應用",
"電腦審計",
"電腦模擬的商業應用",
"電腦科學邏輯基礎",
"電腦繪圖",
"電腦視覺",
"電腦輔助大量估價專題研究",
"電視節目主持與製作",
"電通安吉斯講堂：新行銷世代下的媒體創新",
"青少年情緒與行為問題",
"靜態影像設計",
"非劇情片理論與創作",
"非洲政府與政治",
"韋伯社會學專題討論",
"韓國古典文學研究",
"韓國政治與民主化",
"韓國文化研究",
"韓國歷史",
"韓國社會與文化",
"韓國社會議題",
"韓國經濟專題研究",
"韓文教學實習",
"韓語口語訓練（一）",
"韓語口說訓練（一）",
"韓語口說訓練（二）",
"韓語口譯",
"韓語文法學專題研究",
"韓語會話（三）",
"韓語正音",
"韓語聽力訓練（三）",
"韓語語法與應用",
"韓語語法（２）",
"音樂概論",
"音樂鑑賞",
"音韻學導論",
"音響學",
"預防醫學與校園健康",
"領導心理學專題",
"領導心理學專題研究",
"領導與社會創新",
"願景管理",
"類型語言學",
"風險管理",
"風險管理決策分析",
"風險管理策略講座",
"風險管理與保險",
"風險管理與保險經營講座",
"館藏管理與行銷專題",
"體育[女]—女體適能",
"體育[女]—彼拉提斯墊上技巧",
"體育[女]—排球中級",
"體育[女]—排球初級",
"體育[女]—有氧耐力",
"體育[女]—桌球初級",
"體育[女]—游泳初級（捷泳）",
"體育[女]—游泳初級（蛙泳）",
"體育[女]—籃球初級",
"體育[女]—網球初級",
"體育[女]—羽球中級",
"體育[女]—羽球初級",
"體育[女]—高爾夫初級",
"體育[特別班]",
"體育[男]—健力",
"體育[男]—桌球初級",
"體育[男]—男體適能",
"體育[男]—籃球中級",
"體育[男]—籃球初級",
"體育[男]—羽球中級",
"體育[男]—羽球初級",
"體育[男女合班]—健力",
"體育[男女合班]—健康體適能",
"體育[男女合班]—健走",
"體育[男女合班]—國際標準舞初級",
"體育[男女合班]—土風舞初級",
"體育[男女合班]—太極導引初級",
"體育[男女合班]—太極拳初級",
"體育[男女合班]—定向越野",
"體育[男女合班]—室內飛輪",
"體育[男女合班]—彼拉提斯墊上技巧",
"體育[男女合班]—慢速壘球中級",
"體育[男女合班]—慢速壘球初級",
"體育[男女合班]—拳擊",
"體育[男女合班]—排球中級",
"體育[男女合班]—排球初級",
"體育[男女合班]—排球實務",
"體育[男女合班]—木球初級",
"體育[男女合班]—桌球中級",
"體育[男女合班]—桌球初級",
"體育[男女合班]—橄欖球初級",
"體育[男女合班]—武術初級",
"體育[男女合班]—游泳中級",
"體育[男女合班]—爵士舞初級",
"體育[男女合班]—現代舞初級",
"體育[男女合班]—瑜珈初級",
"體育[男女合班]—籃球中級",
"體育[男女合班]—籃球初級",
"體育[男女合班]—網球中級",
"體育[男女合班]—網球初級",
"體育[男女合班]—羽球中級",
"體育[男女合班]—羽球初級",
"體育[男女合班]—足球中級",
"體育[男女合班]—足球初級",
"體育[男女合班]—鐵人三項初級",
"體育[男女合班]—高爾夫初級",
"體育[男女合班]─太極拳初級",
"高等個體經濟學（二）",
"高等審計學",
"高等微積分",
"高等微積分（二）",
"高等數理統計",
"高等數量方法",
"高等機率論",
"高等演算法",
"高等研究方法",
"高等總體經濟學（二）",
"高等財務會計理論",
"高等量化資料分析",
"高等電腦圖學",
"高級口語訓練",
"高級日語",
"高級會計學（二）",
"高級英文寫作",
"高級韓國語",
"黑格爾法哲學",
"黑格爾精神現象學"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("Search_Keyword"), countries);
