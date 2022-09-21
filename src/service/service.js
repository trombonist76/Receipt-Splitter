export async function getPayers(){
  const url = "src/data/data.json"
  const result = await fetch(url)
  .then(data => data.json())
  .then(data => data.payers)
  return result
}

export async function getProducts(){
  const url = "src/data/data.json"
  const result = await fetch(url)
  .then(data => data.json())
  .then(data => data.products)
  return result
}

export function getProductPayers(product,payer){
  return product.payers.some(item => payer.id === item.id )
}

export function formatNumber(number){
  const formatter = new Intl.NumberFormat('tr-TR', {style: 'currency',currency: 'TRY',})
  return formatter.format(number)
}

const checkIsInteger = (strNumber) => {
  const num = Number(strNumber)
  return Number.isInteger(num)
}

const getNewUserNumber = (payers,splitName) => {
  let lastUserNumber = 0
  
  payers.forEach(payer =>{
    const splitted = payer.name.split(splitName)

    if(splitted.length !== 2) return false
    
    const num = splitted[1]
    const isInteger = checkIsInteger(num)
    const isBigger = isInteger && parseInt(num) > lastUserNumber

    
    if (isInteger && isBigger) lastUserNumber = parseInt(num)
  })

  return lastUserNumber + 1
}

export function createNewPayerName(payers,splitName="Yeni Kullanıcı"){
  const userNumber = getNewUserNumber(payers,splitName)
  return `${splitName} ${userNumber}`
}