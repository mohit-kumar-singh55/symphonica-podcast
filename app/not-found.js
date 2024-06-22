'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <section className='w-full min-h-screen sm:px-8 px-3 py-16 flex items-center justify-center flex-col space-y-6' style={{ backgroundImage: 'linear-gradient(111.69deg,#edf8fc 0%,#f3f7f6 100%)' }}>
            <Image
                src='/Images/project/404.svg'
                alt='404'
                quality={100}
                width={400}
                height={400}
                priority
            />

            <p className='font-medium text-lg'>
                Page Not Found
            </p>

            {/* <PrimaryButton
                title='Go Back'
                className='!py-2.5 !px-6'
                onClick={() => router.back()}
            /> */}
        </section>
    )
}
export default NotFound;