import { Link } from "react-router-dom";

const CheckoutSession = () => {
    return(
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                    <path
                        fill="currentColor"
                        d="M12, 0A12, 12, 0, 1, 0 "
                        ></path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Payment Done!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing your secure online payment
                    </p>
                    <p>Have a great day!</p>
                    <div className="py-10 text-center">
                        <Link
                            to="/home"
                            className="px-12 bg-buttonBgColor text-white font-semibold py-3"
                        >
                            Go Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSession;