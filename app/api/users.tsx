/*************  ✨ Codeium Command ⭐  *************/   
import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  name: string;
  email: string;
};

let users: User[] = [];

export default function handler(        
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  switch (req.method) {
    case 'POST': {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const newUser: User = {
        id: users.length + 1,
        name,
        email,
      };

      users.push(newUser);
      return res.status(201).json(newUser);
    }
    default: {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
/******  cb272d94-5f4c-4e19-ad1d-ab4be23abc32  *******/