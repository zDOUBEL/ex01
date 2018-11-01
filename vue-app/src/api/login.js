import myaxios from '@/utils/index'
export function getlogin(data){
  return myaxios({
    url:"http://106.12.19.195:3000/login",
    method:"post",
    data:data
  })
}
export function getzhuce(data){
  return myaxios({
    url:"http://106.12.19.195:3000/zhuce",
    method:"post",
    data:data
  })
}