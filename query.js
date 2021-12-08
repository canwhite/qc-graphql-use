let axios = require("axios");
axios({
    method: 'post',
    url: 'http://localhost:4000/',
    data: {
      query: 'query { books {author} }',
    }
}).then(res=>{
    console.log("--res--",res.data);
}).catch(err=>{
    console.log("--err--",err);
})