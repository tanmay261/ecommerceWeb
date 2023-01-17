class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }

    search(){
        const keyword=this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
            // options : i means case insensitive for the query keyword
                $options:"i",
            }

        } : {};
console.log(keyword);
        this.query= this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}

        //Removing fields for category
        const removeFields=["keyword","page","limit"];

        removeFields.forEach(key=>delete queryCopy[key]);


        // Filter for price and rating since they are a range and not absolute values
        let queryStr= JSON.stringify(queryCopy);

        queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g,(key)=> `$${key}`);

        this.query=this.query.find(JSON.parse(queryStr));
        return this;
    }
}

module.exports = ApiFeatures;