import Image from 'next/image';
import React from 'react';

interface BasicComponentProps {
    subHeading: string;
    heading: string;
}

const BasicComponent: React.FC<BasicComponentProps> = ({ subHeading, heading }) => {
    return (
        <div className='space-y-6 mb-[20px] '>
            <div className='flex  space-x-3'>
                <Image src='/images/basicComponents/Icons.png' width={24} height={24} alt='icon'></Image>
                <h1 className='subHeading font-montserrat'>{subHeading}</h1>
            </div>
            <div>
                <h1 className='heading font-montserrat'>{heading}</h1>
            </div>
        </div>
    );
};

export default BasicComponent;
