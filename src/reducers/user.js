import { generateUser } from "../static";
export default function user(state = generateUser(), action) {
return state;
}