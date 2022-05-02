function Content(props : any) {
  console.log(props.content.files[0].name)
  return(
  <div className="selected-files">
    <ul>
      {props.content?.files.map((file: any, index:any) => 
      (<li key={index}>
        {file.name}
      </li>))}
    </ul>
  </div>)
}

export default Content