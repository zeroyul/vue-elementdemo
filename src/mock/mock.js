import Mock from 'mockjs';

const demoData = function(){
	let Data = [];
	for (let i=0;i<10;i++){
		let data={
			name:Mock.Random.cname(),
			age:Mock.Random.natural(10,90)
		}
		Data.push(data)
	}
	return {
		Data:Data
	}
}
Mock.mock('/personList','get',demoData)
