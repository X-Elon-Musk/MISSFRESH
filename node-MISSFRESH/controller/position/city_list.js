'use strict';
import MissMysql from '../../prototype/missmysql.js'

export default class CityList extends MissMysql{
	constructor(){
		super()
		this.cityList=[];
		this.getCityList=this.getCityList.bind(this);
		this.cityAnalysis=this.cityAnalysis.bind(this);
	}
	//获得城市列表
	async getCityList(req, res, next){
		this.cityList=[];
		await this.cityAnalysis(100, '极速达（配送时效以自动定位为准）');
		await this.cityAnalysis(10, '华北');
		await this.cityAnalysis(9, '华南');
		await this.cityAnalysis(8, '华东');
    	res.send(this.cityList);
	}
	//分析城市信息
	async cityAnalysis(area_ordering,name){
		let city_list={};
		let cities=await this.missSelectMysql('areas', {}, {
			area_ordering: area_ordering
		}, {
			ordering: 'ordering'
		});
		if (cities) {
			city_list={
				areas: [].concat(cities),
				name: name,
				ordering: area_ordering
			}			
		}
		this.cityList.push(city_list);
	}
}

// export default new CityList()