import http from '../utils/http-common'
import React from 'react'
import S3 from 'react-aws-s3-typescript'
function uploadService(file: any) {
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    dirName: process.env.REACT_APP_DIR_NAME /* optional */,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  }

  //   let newFileName = file.name.replace(/\..+$/, '')
  //   const ReactS3Client = new S3(config)
  //   ReactS3Client.uploadFile(file, newFileName)
  //     .then((data: any) => {
  //       if (data.status === 204) {
  //         console.log('success')
  //       } else {
  //         console.log('failed')
  //       }
  //     })
  //     .catch((err: any) => console.error(err))
  console.log('Uploading file: ', file)
}

export default uploadService
