import React from 'react';
import { useForm } from 'react-hook-form';
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpeg';
import hotel3 from '../../images/hotel5.jpg';
import hotel4 from '../../images/hotel6.jpg';
import hotel5 from '../../images/room1.jpg';

const Hotel = () => {

      const { register, handleSubmit, watch, errors } = useForm();
      const onSubmit = data => console.log(data);
  
      console.log(watch("example"))

      return (
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="w-100">
                        <img height="350px" width="730px" src={hotel1} alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100 mt-4">
                        <img height="110px" width="170px" src={hotel2} alt="" />
                        <img height="110px" width="170px" src={hotel3} alt="" />
                        <img height="110px" width="170px" src={hotel4} alt="" />
                        <img height="110px" width="170px" src={hotel5} alt="" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <form className="p-4" style={{ backgroundColor: "#F4F4F4" }} onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="exampleRequired" placeholder="Full Name" required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Phone No." required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Email Address" required ref={register({ required: true })} />
                        <br />

                        <textarea className="form-control" name="exampleRequired" placeholder="Massage" cols="30" rows="7" Massage required ref={register({ required: true })} />
                        <br />

                        <button type="submit" className="btn btn-info w-100">Request Booking</button>

                    </form>
                </div>
            </div>
        </div>
      );
};

export default Hotel;