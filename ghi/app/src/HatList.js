function HatList(props) {
    return (
        <>
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
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
    );
  }
  
  export default HatList;