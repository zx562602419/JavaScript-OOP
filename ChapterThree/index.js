/**
 * Created by 张鑫 on 2017/3/20.
 */

/*
    思路:
    1、获取用户输入值；
    2、使用parseInt将用户输入十六进制数值每两位为一组进行转换，并放入数组；
    3、将数组中数值取出拼接成字符串，然后打印在HTML页面
*/
function $(str){
    return document.getElementById(str);
}
//转换方法
function getRGB() {
    //声明变量
    var value = $('value').value, result = '', arr = [];
    var length = value.length;

    //刷新浏览器方法
    function reload(){
        return location.reload();
    }
    //判断用户输入数值
    if(length == 0 || length != 7) {
        reload();
        alert('请输入完整的十六进制颜色值，如#00FF00');
        return;
    }

    if(value[0] != '#'){
        reload();
        alert('输入颜色值格式不正确');
        return;
    }

    var regValue = new RegExp('^[0-9a-fA-F]');
    for(var v = 1; v < value.length; v++){
        if(regValue.test(value[v])){
            reload();
            alert('输入颜色值格式不正确');
            return;
        }
    }

    //用parseInt将用户输入的十六进制颜色值转换为RGB颜色值
    function parse(a,b){
        return parseInt(''+ (value[a] + value[b]) +'', 16).toString();
    }
    //将转换后的数值放入数组arr
    for(var i = 0; i < 3; i++){
        arr[i] = parse(i * 2 + 1 , i * 2 + 2);
    }
    /*上面的循环可以用下面的方法写
        arr[0] = parse(1,2);
        arr[1] = parse(3,4);
        arr[2] = parse(5,6);
    */
    //将要显示的RGB颜色值拼接成字符串并输出到input
    for(var j = 0; j < arr.length; j++){
        if(arr[j] == 'NaN'){
            reload();
            alert('输入颜色值格式不正确');
            return;
        }

        if(j == arr.length - 1){
            result += arr[j];
        }else{
            result += arr[j] + ',';
        }
    }
    //将数值打印到输入框
    $('result').value = 'rgb(' + result +')';
}
//点击按钮调用方法
$('btn').onclick = getRGB;
