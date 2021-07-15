import React from 'react'

function UserList(props) {
    let UserMap = '...loading';
    console.log(props)
     UserMap = props.user.map((u) => 
        <>
        <div key={u.id} className="card shadow rounded mb-3" style={{ maxWidth: "350px"}}>
            <div className="row g-0">
                <div className="col-md-4  d-flex justify-center align-items-center">
                    <img src={u.picture} height={100} alt={u.picture} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{u.title} {u.firstName} {u.lastName}</h5>
                        <p className="card-text">
                            <small className="text-muted">
                                <strong>{u.email}</strong>&nbsp;
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

    return UserMap;
}

export default UserList;
