import React from 'react';

function Book( props) {
 const styleim = {
    width: 350,
    height: 350,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20

 }
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                    <img src={props.contact.imgurl} className="card-img-top" style= {styleim} />
                        <div className="card-body">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name - {props.contact.name}</li>
                                <li className="list-group-item">Author - {props.contact.author}</li>
                                <li className="list-group-item">Date - {props.contact.date}</li>
                                <li className="list-group-item">Publish By - {props.contact.publish}</li>
                            </ul>
                        </div>
                    </div>
                </div>
         </div>
    </div>
    
  );
}

export default Book;
