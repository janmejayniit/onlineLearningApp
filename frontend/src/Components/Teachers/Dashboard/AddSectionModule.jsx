const AddSectionModule = ()=>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Add Course Details</div>
                        <div className="card-body">
                            <form>          
                                <div className="mb-3">
                                    <label className="form-label">Select Course</label>
                                    <select className="form-control form-control-sm">
                                        <option>--Choose Course</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select Section</label>
                                    <select className="form-control form-control-sm">
                                        <option>--Choose Course</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Module Names</label>
                                    <input type="text" className="form-control form-control-sm"/>
                                </div>    

                                <div className="mb-3">
                                    <label className="form-label">Duration(In seconds)</label>
                                    <input type="number" className="form-control form-control-sm"/>
                                </div> 

                                <div className="mb-3">
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                                        <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                                    </div>
                                </div>    
                                <button type="submit" className="btn btn-dark btn-sm">Add</button>    
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default AddSectionModule;
