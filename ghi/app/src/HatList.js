function HatList(props) {
    if (props.hats === undefined) {
        return null;
      }

    return (
        <>
        <h1>List of Hats</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Fabric</th>
              <th>Style Name</th>
              <th>Color</th>
              <th>Closet</th>
              <th>Section</th>
              <th>Shelf</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.hats.map(hat => {
              return (
                <tr key={hat.href}>
                  <td>{ hat.name }</td>                 
                  <td>{ hat.fabric }</td>
                  <td>{ hat.style_name }</td>
                  <td>{ hat.color }</td>
                  <td>{ hat.location.closet_name }</td>
                  <td>{ hat.location.section_number }</td>
                  <td>{ hat.location.shelf_number }</td>
                  <td><button className="btn btn-danger" onClick={() => props.deleteHat(hat)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
    );
  }
  
  export default HatList;