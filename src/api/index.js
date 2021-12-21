import axios from 'axios'// 引入axios
import qs from 'qs'
var api = {

  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  async get (url, data){
    try{
      let res = await axios.get(url, {params:data})
      res = res.data
      return new Promise((resolve)=>{
        if(res.code == 200){
          resolve(res)
        }else{
          resolve(res)
        }
      })
    } catch (err){
      console.log(err,'服务出错');
        // resolve(res)
    }
  },



  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */

  async post (url, data){
    try {
      let res = await axios.post(url,qs.stringify(data))
      res = res.data
      return new Promise((resolve,reject)=>{
        if(res.code == 200){
          resolve(res)
        }else{
          console.log('报错');
          reject(res)
        }
      })
    } catch(err) {
      console.log(err,'服务出错');
    }
  }


}
export default api
