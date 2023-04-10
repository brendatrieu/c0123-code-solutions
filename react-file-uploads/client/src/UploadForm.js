/* eslint-disable no-unused-vars -- Remove me */
const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function UploadForm() {
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const form = new FormData(event.target);
      const response = await fetch(url('/api/uploads'), {
        method: "POST",
        body: form});
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light" />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif" />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
