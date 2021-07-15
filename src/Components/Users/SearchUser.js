import React, { useState } from 'react'

function SearchUser(props) {
    const [Search, setSearch] = useState()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let username = e.target[0].value
        let ApiUsername = props.user.find(u => u.firstName === username)
        setSearch(ApiUsername)
        // console.log(JSON.parse(Search))
        // console.log(Search,Search.id)
    }
    const OnSearch = (e)=>{
        let username = e.target.value
        let ApiUsername = props.user.find(u => u.firstName === username || u.title === username)
        setSearch(ApiUsername)
        // console.log(ApiUsername)
    }
    return (
        <>
            <h2 className='mt-3'>search User</h2>
            <form onSubmit={onSubmitHandler} className="row alert  row g-3">
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Search By Name"
                        onChange={OnSearch}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">Find User</button>
                </div>
            </form>
            {
                Search ? 
            <div key={Search.id} className="card m-4 shadow rounded" style={{ maxWidth: "350px" }}>
            <div className="row g-0">
                <div className="col-md-4  d-flex justify-center align-items-center">
                    <img src={Search.picture} height={100} alt={Search.picture} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{Search.title} {Search.firstName} {Search.lastName}</h5>
                        <p className="card-text">
                            <small className="text-muted">
                                <strong>{Search.email}</strong>&nbsp;
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
            : <p className='text-danger'>No User Available here</p>
            }

        </>
    )
}

export default SearchUser
