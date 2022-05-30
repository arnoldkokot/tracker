export default function validatePage(page) {
  const parsed = parseInt(page);
  if (isNaN(parsed))
    throw {
      status: {
        message: "Bad page query",
        status_code: 400,
      },
    };
  return parsed;
}
