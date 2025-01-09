export default function Component( { item } ){
  // name, type, tags, url
  
  const name = item.properties.Name.title[0].plain_text;
  const type = item.properties.Type.rich_text[0].plain_text;
  const tags = item.properties.Tags.multi_select;
  const url = item.properties.URL.rich_text[0].plain_text;
  const thumbnail = item.icon.file.url;

  let bg;

  if( type === "Fire"){
    bg = "rgba(245, 100, 112, 0.1)";
  } else if ( type === "Seed"){
    bg =  "rgba(99, 213, 105, 0.1)";
  } else if ( type === "Thunder" ){
    bg = "rgba(255, 152, 1, 0.1)";
  }

  return(
      <div className = "Component">

        <div className = "imgContainer">
          <img src = { url }/>
        </div>

        <h2 className = "name">{ name }</h2>

        <div className = "typeContainer">
          <div className = "typeImgContainer" style = { { backgroundColor : bg } }>
            <img className = "type" src = { thumbnail }/>
          </div>

          <div className = "textContainer">
            <h3>{ type }</h3>
            <p>{ tags.map( item => item.name ).join(" · ") }</p>
          </div>
        </div>

    </div>
  )
}