const TheDogsAPI = require('../../services/TheDogsAPI');
const {DogModel, PageControlModel} = require('../../model');


async function saveDogs(){
    
    // LIST DOGs
    try{
    const limitRequest = 50
    const pageControl = await PageControlModel.findOne({ description: 'dogs' }, { page: 1, _id: 0})
    let page = Number(pageControl.page);
    const params = `?limit=${limitRequest}&page=${page}&order=Desc`;

        let response = await TheDogsAPI.getDogs(params);
        let list = response.data;

        for(let item of list){
            if(item.breeds.length !== 0){
                if(!await DogModel.findOne({ id: item.id })){
                    let newDog = await DogModel.create(item);
                    console.log(JSON.stringify(newDog));
                }else{
                    console.log(`dog id ${item.id} already exists`);
                }
            }else{
                console.log(`invalid dog: ${item.id}`);
            }
        }

        page++
        await PageControlModel.updateOne({ description: 'dogs' }, { page: page });
        return true;
    }catch(error){
        console.log(error.message);
        return false;
    }
}

module.exports = {
    saveDogs: saveDogs
}