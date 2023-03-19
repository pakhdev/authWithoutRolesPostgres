export const envConfiguration = () => ({
    environment: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
});
