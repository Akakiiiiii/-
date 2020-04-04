function ajax(url,methods = 'get'){
    return new Promise((res,rej)=>{
      let xml = new XMLHttpRequest()
      xml.open(methods,url)
      xml.send()
      xml.onreadystatechange = () => {
        if(xml.readyState === 4 && xml.status === 200 ){
          res(xml.responseText)
        } else if(xml.readyState === 4 && xml.status != 200){
          rej(new Error('有错误'))
        }
      }
    })
  }