import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

interface BasicHeaderProps {
    heading: string;
    subHeading: string;
}

const BasicHeader: React.FC<BasicHeaderProps> = ({ heading, subHeading }) => {
    return (
        <section
            className="relative w-full -top-32 h-[420px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] overflow-hidden bg-cover bg-center "
            style={{ backgroundImage: 'url(/images/About/image.png)' }}
        >
            <div className='border-x-[2px] border-[#FF4E25] max-w-[1290px] mx-auto h-[420px] '>             
                <div className="absolute inset-0 bg-black bg-opacity-80"/> 
                <div className="relative font-montserrat text-white text-5xl max-w-[1320px] mx-auto pl-6 pt-[219px]">
                    <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">{heading}</h2>
                    <div className="mt-[14.5px] flex items-center gap-2 text-[16px] sm:text-[14px] md:text-[18px] font-semibold">
                        <IoHome className="text-primary" />
                        <p className="text-primary">{subHeading}</p>
                        <FaAngleRight />
                        <p>{heading}</p>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default BasicHeader;



// import React from 'react';
// import { IoHome } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";

// interface BasicHeaderProps {
//     heading: string;
//     subHeading: string;
// }

// const BasicHeader: React.FC<BasicHeaderProps> = ({ heading, subHeading }) => {
//     return (
//         <section
//             className="relative w-full h-[420px] overflow-hidden bg-cover bg-center"
//             style={{ backgroundImage: 'url(/images/bg.png)' }}
//         >
//             <div className="absolute inset-0 bg-black bg-opacity-80"></div>
//             <div className="relative font-montserrat text-white text-5xl max-w-[1320px] mx-auto pt-[219px]">
//                 <h2 className="text-5xl font-bold">{heading}</h2>
//                 <div className="mt-[14.5px] flex items-center gap-2 text-[18px] font-semibold">
//                     <IoHome className="text-primary" />
//                     <p className="text-primary">{subHeading}</p>
//                     <FaAngleRight />
//                     <p>{heading}</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BasicHeader;