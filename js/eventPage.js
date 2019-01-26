var date = getDate();
var times = 0;
// 定义时间 这里定义了打卡 签退 以及订饭
var json={"moringhour":10,"moringminute":40,"afternoonhour":15, "afternoonminute":40,"noonhour":8,"noonminute":40};

if(("Notification" in window)){
    timing();
}

// 定时任务
function timing(){
    var go = setInterval(run,1000);
    var time = setInterval(resetTime,120000);
    
}
// 重置
function resetTime (){
    times = 0;
}

// run执行
function run (){
    var date = new Date();
    // json转字符串
    var obj = eval(json);
    if (date.getHours() == obj.noonhour && date.getMinutes() == obj.noonminute && times == 0){
        showNoon();
    }else if (date.getHours() == obj.moringhour && date.getMinutes() == obj.moringminute && times == 0) {
        showMorning();
    }else if (date.getHours() == obj.afternoonhour && date.getMinutes() == obj.afternoonminute && times ==0) {
        showAfternoon();
    }else{
    }
}
// 早上通知
function showMorning(){
    var options = {
        dir: "ltr",  //控制方向，据说目前浏览器还不支持
        lang: "utf-8",
        image: "img/icon.png",
        body: "快点签到哦~~",
        silent:true
    }
    var n = new Notification("早上好",options);
    // 定时关闭
    n.onshow = function () { 
        setTimeout(n.close.bind(n), 5000); 
      }	
    n.onclose = function () {
        times = 1;
    }
}
//下午通知参数
function showAfternoon(){
    var options={
                dir: "ltr",  //控制方向，据说目前浏览器还不支持
                lang: "utf-8",
                image: "img/icon.png",
                body: "订餐~ 不要忘记 领盒饭最重要",
                sound:"",
                silent:true
                };
    //创建通知对象
    var n = new Notification("休息下", options); 
    //定时关闭通知
    n.onshow = function () { 
      setTimeout(n.close.bind(n), 5000); 
    }
    n.onclose = function () {
        times = 1;
    }
    //显示通知
    // // n.show();
    n.onclick = function() {
        window.open('https://shiyu.didichuxing.com/#/');
      } 
}

//通知配置通知参数
function showNoon(){
    var options={
                dir: "ltr",  //控制方向，据说目前浏览器还不支持
                lang: "utf-8",
                image: "img/icon.png",
                body: "准备下班咯 收拾下心情 点根烟",
                sound:"",
                silent:true
                };
    //创建通知对象
    var n = new Notification("下班咯", options); 
    
    //定时关闭通知
    n.onshow = function () { 
      setTimeout(n.close.bind(n), 5000); 
    }
    n.onclose = function () {
        times = 1;
    }
    // //显示通知
    // // // n.show();   
}

//获取当前时间格式化
function getDate(){
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	if (month >= 1 && month <= 9) {
	    month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
	    trDate = "0" + strDate;
	}
	if(hour>=0 && hour <=9){	    
	    hour="0"+hour;
	}
	if(minute>=0 && minute <=9){
	    minute="0"+minute;
	}
	if(second>=0 && second <=9){
	second="0"+second;
	}
	var currentdate = year +"年"+  month+"月" + strDate+"日" + hour +"时"+ minute +"分"+ second+"秒";
	return currentdate;	
}