//判断是否是array
export const isArray=(obj)=>{
	return Object.prototype.toString.call(obj)=='[object Array]';
}
//判断是否是object
export const isObject=(obj)=>{
	return Object.prototype.toString.call(obj)=='[object Object]';
}
//分解对象，直接获得所要key值对应的value
export const getValue=(objProvide,keyNeed)=>{
	 if(Object.prototype.toString.call(objProvide) === '[object Object]'){
        var obj={};
        (function getValueFun(object, char) {
            // var key='';
            for(var key in object){
                if (key==char) {
                    obj.value=object[key];
                } else if (Object.prototype.toString.call(object[key]) === '[object Object]') {
                    getValueFun(object[key],char);
                }
            }
        })(objProvide,keyNeed)
        return obj.value;
    }else{
        console.log(objProvide);
        console.log('传入的不是一个真正的对象');
    }
}


//存储localStorage
export const setStore=(name, content)=> {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

//获取localStorage
export const getStore=name=>{
    if (!name) return;
    return window.localStorage.getItem(name);
}

//删除localStorage
export const removeStore=name=>{
    if (!name) return;
    window.localStorage.removeItem(name);
}

//正则匹配手机号
export const testTele=(telephone)=>{
    let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    /*if (!myreg.test(telephone)) {  
        return false;  
    } else{  
        return true;  
    } */
    return myreg.test(telephone);
}