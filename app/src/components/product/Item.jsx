import React from "react";

export default function Item ({product, openPopup}) {

    const handleButtonClick = () => {
        // Call the openPopup function to open the popup
        openPopup(product);
    };

    return (    
        product != null ? ( 
        <div className="flex flex-col border-2 shadow p-5 space-y-5 max-w-sm rounded-lg bg-gray-100 dark:bg-gray-900 dark:border-gray-800">

            {/* Image */}
            <div className="overflow-hidden rounded-lg">
                <img src={product.photoBase64} alt="" className="hover:scale-105 w-[300px] h-[300px] object-fill duration duration-300"/>
            </div>

            {/* Price & Title */}
            <div className="text-left flex flex-col">
                <p className="text-xl">year: {product.productionYear}</p>
                <p className="text-3xl font-bold">{product.name}</p>
                <div className="text-xl">{product.price}€</div>
            </div>

            {/* Button */}
            <div>
                <div onClick={handleButtonClick} className="flex justify-between cursor-pointer p-2 bg-primary-700 px-5 rounded-lg hover:bg-primary-800 font-medium text-white text-md">
                    <div className=""></div>
                    <p>View Product</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                        </path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                        </path>
                    </svg>
                </div>                
            </div>              
            
        </div>
        ) : (<></>)
    );
}