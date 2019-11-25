let option = {
    baseOption: {
        tooltip: {
            trigger: 'axis'
        },
        timeline: {
            show: true,
            bottom: -5,
            left: 20,
            right: 20,
            axisType: 'category',
            autoPlay: false,
            currentIndex: 0,
            playInterval: 2500,
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#66b1ff',
                borderColor: '#409EFF',
                borderWidth: 2
            },
            label: {
                textShadowOffsetX: 30,
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 12
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#999',
                        fontSize: 12
                    }
                }
            },
            controlStyle: {
                showPrevBtn: false,
                showNextBtn: false,
                itemSize: 13
            },
            data: []
        },
        title: {
            textStyle: {
                fontSize: 12
            }
        },
        grid: [{
            show: false,
            left: '0%',
            top: '15%',
            bottom: 50,
            right: '3%',
            containLabel: true
        }],
        xAxis: [{
            boundaryGap: 0,
            type: 'category',
            data: [],
            axisLabel: {
                show: true,

                textStyle: {
                    fontSize: 12
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            max: function (value) {
                return parseInt(value.max, 10) + 1;
            },
            min: function (value) {
                return parseInt(value.min, 10) - 1;
            },
            // x轴 点击触发事件
            triggerEvent: true
        }],
        yAxis: [{
            type: 'value',
            name: '公顷',
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(33,148,246,0.2)'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                formatter: function (value) {
                    return value;
                }
            },
            max: function (value) {
                return parseInt(value.max, 10) + 1000;
            },
            data: []
        }],
        series: []

    },

    options: []

};

export let options = option;

export function beforeInit (xAxisData, timelineData, seriesData) {
    option.baseOption.xAxis[0].data = xAxisData;
    option.options = [];
    option.baseOption.timeline.data = [];
    for (var i = 0; i < timelineData.length; i++) {
        option.baseOption.timeline.data.push(timelineData[i]);
        option.options.push({
            title: {
                text: timelineData[i],
                x: 'center',
                top: '0%'
            },
            series: [{
                type: 'line',
                symbol: 'circle',
                symbolSize: 10,
                // 是否平滑曲线显示
                smooth: true,
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}公顷',
                    distance: 1,
                    emphasis: {
                        show: false
                    }
                },
                lineStyle: {
                    color: 'rgb(30,126,244)',
                    shadowBlur: 12,
                    shadowColor: 'rgba(33,148,246,0.9)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                },
                itemStyle: {
                    color: 'rgb(33,148,246)',
                    borderWidth: 1,
                    borderColor: '#fff'
                },
                data: seriesData[timelineData[i]]
            }
            ]
        });
    }
}

export function init (instance, $this) {
    let $instance = instance;
    instance.off('click');
    // 注册x 轴  点击事件
    instance.on('click', function (e) {
        var componentType = e.componentType;
        var year = '';
        switch (componentType) {
        case 'series':
            year = e.name;
            break;
        case 'xAxis':
            year = e.value;
            $this.setCurrentYear(year);
            break;
        case 'timeline':
            year = e.name;
            break;
        }

        if (componentType === 'xAxis') {
            let data = option.baseOption.xAxis[0].data;
            for (var i = 0; i < data.length; i++) {
                if (data[i] === e.value || data[i].value === e.value) {
                    data[i] = {
                        value: e.value,
                        textStyle: {
                            color: '#ffffff',
                            fontWeight: 'bolder',
                            backgroundColor: '#409EFF',
                            borderRadius: 10,
                            padding: [1, 5, 1, 5]
                        }
                    };
                } else {
                    if (typeof data[i] === 'object') {
                        if ('textStyle' in data[i]) {
                            delete data[i].textStyle;
                        }
                    }
                }
            }
            option.baseOption.xAxis[0].data = data;
            $instance.setOption(option);
        }
    });
    instance.off('timelinechanged');
    instance.on('timelinechanged', function (e) {
        $this.timeLineChangeEvent(option.baseOption.timeline.data[e.currentIndex]);
    });
}
