'use strict';
import MissMysql from '../../prototype/missmysql.js'

export default class CityList extends MissMysql{
	constructor(){
		super()
		this.cityList=[];
		this.getCityList=this.getCityList.bind(this);
		this.cityAnalysis=this.cityAnalysis.bind(this);
	}
	async getCityList(req, res, next){
	   	/*let area_ordering_100=await this.missMysql('areas', {},{
			area_ordering: 100
		});
		let area_ordering_10=await this.missMysql('areas', {},{
			area_ordering: 10
		});
		let area_ordering_9=await this.missMysql('areas', {},{
			area_ordering: 9
		});
		let area_ordering_8=await this.missMysql('areas', {},{
			area_ordering: 8
		});*/

		await this.cityAnalysis(100, '极速达（配送时效以自动定位为准）');
		await this.cityAnalysis(10, '华北');
		await this.cityAnalysis(9, '华南');
		await this.cityAnalysis(8, '华东');
		
    	// return cityList;
    	res.send(this.cityList);
	}
	async cityAnalysis(area_ordering,name){
		let city_list={};
		let cities=await this.missMysql('areas', {},{
			area_ordering: area_ordering
		});
		if (cities) {
			city_list={
				areas: [].concat(cities),
				name: name,
				ordering: area_ordering
			}			
		}
		this.cityList.push(city_list);
		// return this.cityList;
	}
}

// export default new CityList()