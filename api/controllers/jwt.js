import jwt from 'jsonwebtoken'

// POST ACCESS TOKEN WITH JWT
export const createToken = async (req, res, next) => {

    try {
  
        const email = req.body;

        const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' })

        res.send({ token })
  
    } catch (err) {
      next(err);
    }
  };