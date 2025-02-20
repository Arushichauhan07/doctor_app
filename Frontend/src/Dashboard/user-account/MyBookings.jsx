import useFetchData from "../../Hooks/UseFetchData";
import { BASE_URL } from "../../../config";
import DoctorCard from "./../../components/Doctors/DoctorsCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {

  const {data: appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return <div>
    {loading && !error && <Loading/>}

    {error && !loading && <Error errorMessage={error}/>}

    {!loading && !error && (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
      {
        appointments.map(doctor=> (
            <DoctorCard doctor={doctor} key={doctor._id}/>
            ))}
      </div>
      )}

      {!loading && !error && appointments.length===0 &&  <h2>You didn't have bookings yet!</h2>}
  </div>
}

export default MyBookings;