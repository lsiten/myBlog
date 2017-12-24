/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'
import Mock from 'mockjs'

// let url = process.env.NODE_ENV !== 'production' ? 'http://rap.taobao.org/mockjs/30523/' : 'http://api.lsiten.cn/api.php/';
 let url = 'http://rap.taobao.org/mockjs/30523/';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            res.data = Mock.mock(res.data);
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

let fun_axios_post = (api, body, cb) => {
    axios.post(api, body)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          res.data = Mock.mock(res.data);
          cb(res.data);
        }
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }

export default {
   //获取走马灯数据
   getCarouseDataApi:(api,cb)=>func_axios(url+api,cb),
   //获取文章数据
   getArticleDataApi:(api,cb)=>func_axios(url+api,cb),

   //获取栏目数据
   getCateInfoApi:(api,cb)=>func_axios(url+api,cb),
   //获取栏目文章数据
   getCateArticleApi:(api,cb)=>func_axios(url+api,cb),

   getContentArticleApi:(api,cb)=>func_axios(url+api,cb),


}
