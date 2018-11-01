import myaxios from '@/utils/index'
export function getDaka(data){
    return myaxios({
      url:"http://106.12.19.195:3000/qiandao",
      method:"post",
      data:data
    })
  }