export interface UserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  avatar?: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
}
