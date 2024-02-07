/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async()=>{
        return [
            {
                source : '/',
                destination :'/Home',
                permanent : true,
            },
            {
                source : '/Movie',
                destination : '/Movies',
                permanent : true
            }
        ]
    },
    // rewrites : async()=>{
    //     return [
    //         {
    //             source : '/Movie/:id',
    //             destination : '/Home/Movie/:id'
    //         }
    //     ]
    // }
};

export default nextConfig;
