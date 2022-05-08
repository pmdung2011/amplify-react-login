const isNotValidateFormat = (filesArr: any[]) => {
  return filesArr.find(
    (file: { type: string }) => file.type !== 'application/pdf'
  )
}

const isValidateFileName = (filesArr: any[]) => {
  var numbers = /^[0-9]+$/
  return filesArr.find((file: { name: string }) => file.name.match(numbers))
}

const isValidated = (filesArr: any[]): boolean => {
  return !isNotValidateFormat(filesArr) && isValidateFileName(filesArr)
}

const fileUtilValidation = {
  isValidated,
  isNotValidateFormat,
  isValidateFileName,
}

export default fileUtilValidation
