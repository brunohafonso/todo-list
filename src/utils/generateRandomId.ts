import { v4 as uuid } from "uuid"

export const generateRandomId = () => {
  return uuid();
}