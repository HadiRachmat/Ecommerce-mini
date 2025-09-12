import UserCustomerDTO from "../../DTO/admin/UserCustomerDTO.js";

export default class UserCustomerMappers {
  static userCustomerToDTO(userCustomer) {
    if (!userCustomer) return null;
    return UserCustomerDTO.userCustomerList(userCustomer);
  }
}