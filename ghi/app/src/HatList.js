import React from "react"

class HatList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hats: []}

    this.deleteHat = this.deleteHat.bind(this);
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8090/api/hats/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ hats: data.hats })
    }
  }  

  async deleteHat(hat) {
    const deleteUrl = `http://localhost:8090/api/hats/${hat.id}`
    const fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.hats.indexOf(hat)
    const updated_hats = [...this.state.hats]
    updated_hats.splice(idx, 1)
    this.setState({ hats: updated_hats })
  }

  render () {
    return (
      <>
      <h1>List of Hats</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
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
          {this.state.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td><img src={hat.picture_url} width="50" height="50" alt={hat.name} /></td>
                <td>{ hat.name }</td>                 
                <td>{ hat.fabric }</td>
                <td>{ hat.style_name }</td>
                <td>{ hat.color }</td>
                <td>{ hat.location.closet_name }</td>
                <td>{ hat.location.section_number }</td>
                <td>{ hat.location.shelf_number }</td>
                <td><button className="btn btn-danger" onClick={() => this.deleteHat(hat)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );    
  }
}
  
export default HatList;