export default function (){
  return(
<>
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th scope="col">Name</th>
            <th scope="col">Admission Date</th>
            <th scope="col">Department</th>
            <th scope="col">PCD Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Details</th>
            <th scope="col">Address</th>
            <th scope="col">Profile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>
              <div style={{ display: "flex", gap: "5px" }}>
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>


  )
} 