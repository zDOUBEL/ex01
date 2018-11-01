import myaxios from '@/utils/index'
export function getindexLishi(data){
    return myaxios({
      url:"http://106.12.19.195:3000/LateNumber",
      method:"post",
      data:data
    })
  }