/**
 * Created by 张鑫 on 2017/3/20.
 */

/*
    思路:
    1、使用循环嵌套；
    2、根据乘法口诀表发现，每行所放算式与该行行数相等，即第一行放一个算式 1*1=2，第二行放两个算式 1*2=2 2*2=4，以此类推；
    3、根据上述推理，第一层循环数为9，第二层循环数为当前所在行数
    4、将每行循环拼接，然后打印在HTML页面
*/
var result = '<tr>';
for(var v = 1; v <= 9; v++){
    for(var a = 1; a <= v; a++){

        result += '<td>' + a  + ' * ' + v + ' = ' + a*v + ';</td>';
    }
    result += '</tr>'
}
//document.write(result);
document.getElementById('mTable').innerHTML = result;