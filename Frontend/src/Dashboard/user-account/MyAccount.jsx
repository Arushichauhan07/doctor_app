import {useContext, useState} from "react"; 
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../Hooks/UseFetchData";
import { BASE_URL } from "../../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
    const[tab, setTab] = useState('');

    const {data,
           loading, 
           error} = useFetchData(`${BASE_URL}/users/profile/me`);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <section>
        <div className="max-w-[1170px] px-5 max-auto">

            {loading && !error && <Loading />}

            {error && !loading && <Error errorMessage={error}/>}

            {!loading && !error && (
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="pb-[50px] px-[30px] rounded-md">
                        <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                        <img src={data.photo} alt="" className="w-full h-full rounded-full"/>
                    </figure>
                </div>
                <div className="text-center mt-4">
                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                        {data.name}
                    </h3>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                        {data.email}
                    </p>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                        Blood Type:{" "}
                        <span className="ml-2 text-headingColor text-[22px] leading-8">
                           {data.bloodType}
                        </span>
                    </p>
                </div>
                
                <div className="mt-[50px] md:mt-[100px]">
                    <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-16px leading-7rounded-md text-white">Logout</button>
                    {/* <button className="w-full bg-red-600 mt-4 p-3 text-16px leading-7rounded-md text-white">Delete Account</button> */}
                </div>
                </div>

                <div className="md:col-span-2 md:px-[30px]">
                    <div>
                        <button onClick={()=> setTab('bookings')} className={`${tab=== 'bookings' && 'bg-primaryColor text-white font-normal' } p-2 mr-5 px-5 rounded-md text-headingColor font-semiBold text-[16px]
                        leading-7 border border-solid border-primaryColor`}>
                            My Bookings
                        </button>
                        <button onClick={()=> setTab('settings')} className={`${tab=== 'settings' && 'bg-primaryColor text-white font-normal' } py-2 px-5 px-5 rounded-md text-headingColor font-semiBold text-[16px]
                        leading-7 border border-solid border-primaryColor`}
                        >
                            Profile Settings
                        </button>
                    </div>
                {tab === "bookings" && <MyBookings/>}
                {tab === "settings" && <Profile user={data}/>}
                
            </div>
        </div>

            )}

        
    </div>
</section>
)
}

    
export default MyAccount;