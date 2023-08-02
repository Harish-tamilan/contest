import { updateUserService } from "@/service/userService";
import { connectToDatabase } from "../../../mongoConnect";

async function handler(req,res)
{
    await connectToDatabase();
    let body = JSON.parse(req.body);
    const response = await updateUserService(body);
    res.status(response.statusCode).json(response);
}

export default handler;