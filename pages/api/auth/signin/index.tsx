// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/pages/api/auth/[...nextauth]"

// export default async (req, res) => {
//   const session = await getServerSession(req, res, authOptions)

//   if (session) {
//     return {
//       redirect: {
//         destination: '/admin', // some destination '/dashboard' Ex,
//         permanent: false,
//       },
//     }
//   } else {
//     return {
//       redirect: {
//         destination: '/', // some destination '/dashboard' Ex,
//         permanent: false,
//       },
//     }
//   }
// }