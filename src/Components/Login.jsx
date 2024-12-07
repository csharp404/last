export default function Login() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-75 g-0 border-0">
        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center ">
          <div className="card border-0 p-4 h-100">
            <h1 className="text-center text-primary mb-4">Log In</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-primary">
                Log In
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6">
          <div
            className="h-100 w-100"
            style={{
              backgroundImage: `url('/undraw_medicine_b1ol.png')`, // Path to the image in the 'public' folder
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0 10px 10px 0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
