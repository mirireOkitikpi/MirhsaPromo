/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/nilla',
          destination: 'lavender-decisive-coyote-138.mypinata.cloud',
          permanent: false
        },
        {
          source: '/pinatacloud',
          destination: 'https://pinata.cloud/blog',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
