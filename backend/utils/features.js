class Features {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    };

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            },
        }
            : {};


        this.query = this.query.find({ ...keyword });
        return this;

    };


    filter() {
        const queryCopy = { ...this.queryStr };
      

        // reomving some feilds
        const removeFields = ["keyword", "page", "limit"]
        removeFields.forEach((key) => delete queryCopy[key]);

        //Filter For price rating 
       
        // let queryStr = JSON.stringify(queryCopy);
        // queryStr = queryStr.replace(/\b|gt(|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(queryCopy);
        return this;
    };

    pagination(resultPerPage){
        const currenPage = Number(this.queryStr.page) || 1; 
        const skip = resultPerPage * (currenPage -1)
  
        this.query = this .query.limit (resultPerPage).skip(skip);
          return this;



    }

};


module.exports = Features;