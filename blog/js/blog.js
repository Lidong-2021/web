//针对log页定义一个对象
var log = {
    startdt: "2021-4-27",
    enddt: "2021-5-5",
    upatedt: "2021-4-27",
    anchor: "lidong"
}
//由对象派生业务逻辑
log.submit = {
    check: function (v) {
        var _v = (v == "") ? true : false;
        return _v;
    },
    autohide: function (obj) {
        setTimeout(function () {
            obj.hide();
        }, 2000)
    }
}



function checkvalue() {
    //获取元素对象，并保存到变量中
    // var $form = $("form");
    var $username = $("#username");
    var $password = $("#password");
    var $err1 = $("#err1");
    var $err2 = $("#err2");
    // var $btn = $(".btn>input");
    if ($username.val() != "" && $password.val() != "") {
        return true;
    } else {
        if ($username.val() == "") {
            $err1.show();
            log.submit.autohide($err1)
            return false;
        } else {
            $err2.show();
            log.submit.autohide($err2)
            return false;
        }
    }
}

//绑定按钮的单击事件
$(function () {

})
//定义一个基于mypic页面的业务逻辑
var pics = {
    template: function (u, n, t) {
        var _html = "";
        _html += '<div class="item">';
        _html += '<div class="img">';
        _html += '<img src="' + u + '" alt="">';
        _html += '<div class="tip">喜欢 | ' + n + '</div>';
        _html += '</div>';
        _html += '<div class="title">';
        _html += '<h3>' + t + '</h3>';
        _html += '</div>';
        _html += '</div>';
        return _html;
    }
}
//定义一个包含三个对象内容图片数组
var arrPics = [
    {
        u: "imgs/meinv2.jpeg",
        n: 203,
        t: "meinv"
    },
    {
        u: "imgs/meinv3.jpeg",
        n: 506,
        t: "web开发的重要性"
    },

    {
        u: "imgs/meinv4.jpeg",
        n: 965,
        t: "JavaScript开发时碰到的问题"
    },
    {
        u: "imgs/meinv5.jpeg",
        n: 965,
        t: "JavaScript开发时碰到的问题"
    },
    {
        u: "imgs/meinv6.jpeg",
        n: 965,
        t: "JavaScript开发时碰到的问题"
    },
    {
        u: "imgs/meinv7.jpeg",
        n: 999 + '+',
        t: "JavaScript开发时碰到的问题"
    },
    {
        u: "imgs/meinv8.jpeg",
        n: 965,
        t: "JavaScript开发时碰到的问题"
    },

]
//遍历数组
for (var j = 0; j < arrPics.length; j++) {
    //向模板里面添加内容
    var _HTML = pics.template(arrPics[j].u, arrPics[j].n, arrPics[j].t);
    $("#pic").append(_HTML);
}