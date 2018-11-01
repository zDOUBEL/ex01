import myaxios from '@/utils/index'
export function getindexlist(data){
    return myaxios({
      url:"http://106.12.19.195:3000/indexHtmlList",
      method:"post",
      data:data
    })
  }