export default function validateRegion(region) {
  if (region === "eune") return "eun1";
  if (region === "euw") return "euw1";
  throw {
    status: {
      message:
        region == undefined ? "Missing region query parameter" : "Bad region",
      status_code: 400,
    },
  };
}
