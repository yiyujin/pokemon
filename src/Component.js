export default function Component(){
    return(
        <div className = "Component">

        <img/>

        <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <h2 style={{ marginBottom: "16px" }}>Name</h2>

          <div style={{ display: "flex", height: "56px" }}>
            <img className="type" style={{ height: "100%" }} />

            <div style={{ height: "100%", marginLeft: "16px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ margin: "0" }}>Type</h3>
              <p style={{ marginTop: "auto" }}>Tags</p>
            </div>
          </div>
        </div>
      </div>
    )
}