export const asset = (path?: string) =>{ 
  const el = document.getElementById('app');

  if(el?.dataset?.page){
   const obj = JSON.parse(el?.dataset?.page)
   const url =  obj?.props?.ziggy?.url ? obj?.props?.ziggy?.url : ''

   return url ? path ? url+path : url : ''
  }

}