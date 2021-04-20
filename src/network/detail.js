import requset from 'request'

export function getDetail(iid){
  return requset({
    url:'/detail',
    params:{
      iid,
    }
  })
}
