$(function(e) {
	'use strict'
	/*-----echart2-----*/
	var chartdata = [{
		name: 'sales',
		type: 'bar',
		data: [10, 15, 9, 18, 10, 15]
	}, {
		name: 'profit',
		type: 'line',
		smooth: true,
		data: [8, 5, 25, 10, 10]
	}, {
		name: 'growth',
		type: 'bar',
		data: [10, 14, 10, 15, 9, 25]
	}];
	var chart = document.getElementById('echart');
	var barChart = echarts.init(chart);
	var option = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata,
		color: ['#007bff ', '#ffb209', '#fa713b ', ]
	};
	barChart.setOption(option);
	/*-----echart-----*/
	
	
	var chartdata2 = [{
		name: 'sales',
		type: 'line',
		smooth: true,
		data: [12, 25, 12, 35, 12, 38],
		color: ['#007bff ']
	}, {
		name: 'Profit',
		type: 'line',
		smooth: true,
		size: 10,
		data: [8, 12, 28, 10, 10, 12],
		color: ['#fa713b ']
	}];
	var chart2 = document.getElementById('echart2');
	var barChart2 = echarts.init(chart2);
	var option2 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata2
	};
	barChart2.setOption(option2);
	/*-----echart3-----*/
	var option3 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '32',
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			type: 'category',
			data: ['2014', '2015', '2016', '2017', '2018'],
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#c0dfd8'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata,
		color: ['#007bff ', '#ffb209', '#fa713b ', ]
	};
	var chart3 = document.getElementById('echart3');
	var barChart3 = echarts.init(chart3);
	barChart3.setOption(option3);
	/*-----echart4-----*/
	var option4 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '32',
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			type: 'category',
			data: ['2014', '2015', '2016', '2017', '2018'],
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata2,
		color: ['#007bff ', '#fa713b ', '#ffb209']
	};
	var chart4 = document.getElementById('echart4');
	var barChart4 = echarts.init(chart4);
	barChart4.setOption(option4);
	/*-----echart5-----*/
	var chartdata3 = [{
		name: 'sales',
		type: 'bar',
		stack: 'Stack',
		data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
	}, {
		name: 'Profit',
		type: 'bar',
		stack: 'Stack',
		data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
	}];
	var option5 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata3,
		color: ['#007bff ', '#fa713b ']
	};
	var chart5 = document.getElementById('echart5');
	var barChart5 = echarts.init(chart5);
	barChart5.setOption(option5);
	/*-----echart6-----*/
	var option6 = {
		grid: {
			top: '6',
			right: '10',
			bottom: '17',
			left: '32',
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			type: 'category',
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata3,
		color: ['#007bff ', '#fa713b ']
	};
	var chart6 = document.getElementById('echart6');
	var barChart6 = echarts.init(chart6);
	barChart6.setOption(option6);
	/*-----echart7-----*/
	var chartdata4 = [{
		name: 'data',
		type: 'line',
		data: [20, 20, 36, 18, 15, 20, 25, 20]
	}];
	var option7 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata4,
		color: ['#007bff ']
	};
	var chart7 = document.getElementById('echart7');
	var lineChart = echarts.init(chart7);
	lineChart.setOption(option7);
	/*-----echart8-----*/
	var chartdata5 = [{
		name: 'data',
		type: 'line',
		smooth: true,
		data: [20, 20, 36, 18, 15, 20, 25, 20]
	}];
	var option8 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgb(142, 156, 173,0.1)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#8492a6  '
			}
		},
		series: chartdata5,
		color: ['#fa713b ']
	};
	var chart8 = document.getElementById('echart8');
	var lineChart2 = echarts.init(chart8);
	lineChart2.setOption(option8);
});