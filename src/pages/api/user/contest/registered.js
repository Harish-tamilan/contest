import { connectToDatabase } from "@/mongoConnect";
import { getRegisteredUsers } from "@/service/userService";

async function handler(req, res){
    await connectToDatabase();
    const response = await getRegisteredUsers(req.query.contestId);
    res.status(response.statusCode).json(response);
}

export default handler;