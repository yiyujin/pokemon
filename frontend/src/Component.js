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

      <div style = { { paddingTop: "12px", paddingBottom: "24px" } }>
        <h2 style = { { marginBottom: "40px" } }>{ name }</h2>

        <div style = { { display: "flex" } }>
          <div className = "typeContainer" style = { { backgroundColor : bg } }>
            <img className = "type" src = { thumbnail }/>
          </div>

          <div style = { { height: "100%", marginLeft: "16px", display: "flex", flexDirection: "column" } }>
            <h3 style = { { margin: "0" } }>{ type }</h3>
            <p style = { { marginTop: "auto", paddingTop : "6px" } }>{ tags.map( item => item.name ).join(" · ") }</p>
          </div>
        </div>
      </div>
    </div>
  )
}