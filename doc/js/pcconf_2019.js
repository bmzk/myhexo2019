var TIME = new Date().getTime();

var AConf = window.AConf = {
    activity: false,
    imgUrl: '//news-bos.cdn.bcebos.com/mvideo/2020-twoSessions.jpg',
    timeFlag: TIME,
    extCSSRule: ''
}

try {
    var nowTime = new Date().getTime();
    var startTime = new Date('2020-10-01 00:00:00'.replace(/-/g,'/')).getTime(); // 2020-09-29 00:00:00
    var endTime = new Date('2020-10-08 18:00:00'.replace(/-/g,'/')).getTime(); // 2020-10-09 00:00:00
    if (nowTime > startTime && nowTime < endTime) {
        AConf = window.AConf = {
            activity: true,
            // imgUrl: '//news-bos.cdn.bcebos.com/mvideo/2020-twoSessions.jpg',
            imgUrl: '//news-bos.cdn.bcebos.com/mvideo/guoqing-pc.jpg',
            timeFlag: TIME,
            extCSSRule: ''
        }
    }

    function loadjscssfile(filename, filetype) {

        if (filetype == "js") {
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype == "css") {

            var fileref = document.createElement('link');
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        } else if (filetype == 'meta') {
            if (location.protocol == 'http:') {
                var oMeta = document.createElement('meta');
                oMeta.name = 'baidu_union_verify';
                oMeta.content = 'c06c0cb3fdfe79722bc814edc74f301e';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }

    }
    loadjscssfile("//news-bos.cdn.bcebos.com/mvideo/temp.css?radom=" + new Date().getTime(), "css");
} catch (e) {

}

// try {
//     function changeColumnName() {
//         var cityName = $('#city_name b').text();
//         var columnName = cityName === '北京' ? '垃圾分类专区' : '新闻资讯';
//
//         $('#internet-aside-gsdt h3').text(columnName);
//     }
//
//     setTimeout(function(){
//         changeColumnName();
//         $('#change-city').on('click', function() {
//             $('#city_view a').on('click', function() {
//                 setTimeout(function(){
//                     changeColumnName();
//                     }, 200);
//             });
//         });
//     }, 1000);
//
// } catch (e) {
//
// }

try {
    setTimeout(function() {
        $('.item.report a').attr('href', 'https://12377.cn');
    }, 200);
} catch (e) {

}
