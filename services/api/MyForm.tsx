export default function handler(req: any, res: any) {
  const body = req.body;
  res
    .status(200)
    .json({
      user: `${body.name} ${body.email} ${body.phone} ${body.clientType} ${body.agencyName} ${body.details} ${body.budget}`,
    });
}
