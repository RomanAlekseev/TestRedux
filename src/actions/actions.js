import { ADD_ORGANIZATION } from "../constants/action-types";
import { DELETE_ORGANIZATION } from "../constants/action-types";

export function addOrganization(payload) {
  return { type: ADD_ORGANIZATION, payload };
}
export function deleteOrganization(payload) {
  return { type: DELETE_ORGANIZATION, payload };
}
