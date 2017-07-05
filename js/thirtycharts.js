//图表
//心率图
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#a8c644']
    });
    $('#container').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['一', '二', '三', '四', '五', '六', '七'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true
        },
        yAxis: [{ // Primary yAxis  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}bpm',//Y轴后缀名字  
                    }, 
                }],          
        legend: {                                   //关闭下面的线
            enabled: false
        },
        series: [{
            name:'心率',
            marker: {
            enabled: false
        },
            data: [60, 61, 62, 61, 62, 63, 63]
        }]
    });
});

//运动步数走向趋势折线图
$(function () {
    Highcharts.setOptions({         //添加颜色
        colors: ['#14b961'],
    });
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {                                //X轴
            categories: ['一', '二', '三', '四', '五', '六', '七'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true
        },
        yAxis: {                               //Y轴
            min: 0,
        },
        plotOptions: {                      //修改柱状图样式
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                borderRadius:6
            }
        },
        legend: {                           //关闭下面的线
            enabled: false
        },
        series: [{
            name:'步数',
            marker: {
            // enabled: false
        },                                                         
            data: [5,10, 15, 20, 15, 20, 30]         //显示数值
        }]
    });
});

//睡眠走向趋势折线图
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#656d78']
    });
    $('#container3').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['一', '二', '三', '四', '五', '六', '七'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true
        },
        yAxis: [{ // Primary yAxis  
                    max:12, // 定义Y轴 最大值  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}h',//Y轴后缀名字  
                    }, 
                }],          
        legend: {                                   //关闭下面的线
            enabled: false
        },
        series: [{
            name:'深度睡眠时间',
            marker: {
            enabled: false
        },
            data: [7, 6, 6, 5, 8, 10, 11]
        }]
    });
});

//血压走向趋势折线图
$(function () {
    // Highcharts.setOptions({         //设置曲线图颜色
    //     colors: ['#dc75b2']
    // });
    $('#container4').highcharts({
        chart: {
            type: 'spline',
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['一', '二', '三', '四', '五', '六', '七'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true
        },
        yAxis: [{

                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            color:'#dc75b2',
            name:'高压',
            marker: {
                enabled: false
            },
            data: [140, 141, 140, 141, 142, 140, 142]
        }, {
            color:'#37b3d5',
            name:'低压',
            marker: {
                enabled: false
            },
            data: [70, 71, 72, 73, 70, 72, 74]
        }],
    });
});

//疲劳走向趋势柱状图
$(function () {
    Highcharts.setOptions({         //添加颜色
        colors: ['#ab3c4a'],
    });
    $('#container5').highcharts({
        chart: {
            type: 'column',
            gridLineColor:'#000'
        },
        xAxis: {                                //X轴
            categories: ['一', '二', '三', '四', '五', '六', '七'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true
        },
        yAxis: [{ 
            max:12,
            labels: {  
            format: '{value}h',//Y轴后缀名字  
        }, 
        }],          
        plotOptions: {                      //修改柱状图样式
            column: {
                pointPadding: 0.2,
                borderWidth:0,
                borderRadius:6
            }
        },
        legend: {                           //关闭下面的线
            enabled: false
        },
        series: [{
            name:'疲劳时间',
            marker: {
                enabled: false
        },                                                         
            data: [3, 8, 2, 6, 7, 12, 10],         //显示数值
        }]
    });
});













































