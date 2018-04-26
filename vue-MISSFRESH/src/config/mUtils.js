//判断是否是array
export const isArray=(obj)=>{
	return Object.prototype.toString.call(obj)=='[object Array]';
}