import { prisma } from "../../config/db";
import bcrypt from "bcrypt";

 export  const seedAdmin = async () =>{

  const admin = await prisma.user.findUnique({
    where: { email: process.env.ADMIN_EMAIL },
  }); 

  if(admin) {
    console.log("admin accont is Already exits")
    return;
  }
     const hashedPassword = await bcrypt.hash((process.env.ADMIN_PASS as string), 10);
  
  if (!admin) {
    const admin = await prisma.user.create({
      data: {
        name: "Portfolio Owner",
        email:  process.env.ADMIN_EMAIL as string,
        password: hashedPassword,
      },
    });
    console.log(admin)
    console.log("✅ Admin user Created!");
  } else {
    console.log("⚠️ Admin already exists!");
  }
}

  