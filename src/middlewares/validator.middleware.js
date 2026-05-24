export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next()
    } catch (error) {
        return res.status(400).json({
            error: error.errors ? Object.values(error.errors).map(err => err.message).join(', ') : error.message
        });
    }
}