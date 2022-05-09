const isValidateFormat = (file: File): boolean => {
  return file.type === 'application/pdf' || file.type === 'pdf'
}

const isValidateFileName = (file: File): boolean => {
  const fileName = file.name.split('.').slice(0, -1).join('.')
  const numberFormat = /^-?\d+$/
  return (
    numberFormat.test(fileName) && fileName.length <= 7 && fileName.length >= 1
  )
}

const isValidated = (file: File): boolean => {
  return isValidateFormat(file) && isValidateFileName(file)
}

const fileUtilValidation = {
  isValidated,
  isValidateFormat,
  isValidateFileName,
}

export default fileUtilValidation
