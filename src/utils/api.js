import axios from 'axios';
import { Message } from 'element-ui';
import router from '../router'
import el from "element-ui/src/locale/lang/el";

//响应拦截器
axios.interceptors.response.use(success=>{
    //成功调用后端接口，但业务逻辑错误
    if(success.status && success.status==200){
        //401未登录 403权限禁止
        if(success.data.code==500 || success.data.code==401 || success.data.code==403){
            Message.error({message:success.data.message});
            return;
        }
        if(success.data.message){
            Message.success({message:success.data.message});
        }
    }
    return success.data;
},error=>{
    ///504服务器故障，404找不到页面
    if(error.response.code==504 || error.response.code==404){
        Message.error({message:'服务器不见了'});
    }else if(error.response.code==403){
        Message.error({message:'权限不足'});
        router.replace('/');
    }else{
        if(error.response.data){
            Message.error({message:error.response.data.message});
        }else{
            Message.error({message:'未知错误'});
        }
    }
    return;
})