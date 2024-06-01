// Define the User type with its structure
export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
    };
  };
  
  // Define the UserFetched type which holds either a User or an error message
  export type UserFetched = {
    user: User | null;
    error: string | null;
  };
  