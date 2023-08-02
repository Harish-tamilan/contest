import { loginService } from "@/service/userService";
import { connectToDatabase } from "../../mongoConnect";

async function handler(req,res)
{
    await connectToDatabase();
    console.log('req.query, ', req.query);
    const response = await loginService(JSON.parse(req.body), req.query.type);
    res.status(response.statusCode).json(response);
    // return res.status(200).send({status:'success'});
}

export default handler;