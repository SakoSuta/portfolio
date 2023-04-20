import { CourierClient } from "@trycourier/courier";
import type { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    
    const courier = CourierClient({ authorizationToken: "pk_prod_94WKMY4MTH45CVGCF1K01Z767GWZ" });

    try {
      await courier.send({
        message: {
          to: {
            email: "mimidevel.me@gmail.com",
          },
          template: "YJBB9BNKPEMYF8Q306RQQQARHQAR",
          data: {
            nom: name,
            email: email,
            sujet: 'contact',
            message: message,
          },
        },
      });
      

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(404).send();
  }
}
