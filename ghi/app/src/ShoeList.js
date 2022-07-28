import React from "react"

class ShoeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shoes: []}

    this.deleteShoe = this.deleteShoe.bind(this);
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/shoes/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ shoes: data.shoes })
    }
  }  

  async deleteShoe(shoe) {
    const deleteUrl = `http://localhost:8080/api/shoes/${shoe.id}`
    const fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.shoes.indexOf(shoe)
    const updated_shoes = [...this.state.shoes]
    updated_shoes.splice(idx, 1)
    this.setState({ shoes: updated_shoes })
  }

  render () {
    return (
      <>
      <h1>List of Shoes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Model Name</th>
            <th>Color</th>
            <th>Closet</th>
            <th>Bin Number</th>
            <th>Bin Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.shoes.map(shoe => {
            return (
              <tr key={shoe.id}>
                <td><img src={shoe.picture_url} width="50" height="50" alt={shoe.name} /></td>
                <td>{ shoe.name }</td>                 
                <td>{ shoe.manufacturer }</td>
                <td>{ shoe.model_name }</td>
                <td>{ shoe.color }</td>
                <td>{ shoe.bin.closet_name }</td>
                <td>{ shoe.bin.bin_number }</td>
                <td>{ shoe.bin.bin_size }</td>
                <td><button className="btn btn-danger" onClick={() => this.deleteShoe(shoe)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );    
  }
}
  
export default ShoeList;