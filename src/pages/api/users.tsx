import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await prisma.users.findMany();
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const newUser = {
      name: req.body.name,
    };
    const data = await prisma.users.create({ data: newUser });
    return res.status(201).json(data);
  }
  if (req.method === "PUT") {
    const newUser = {
      name: req.body.name,
    };
    const data = await prisma.users.update({
      data: newUser,
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json({ data });
  }
  if (req.method === "DELETE") {
    await prisma.users.delete({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json({});
  }
}
