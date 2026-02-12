export interface UpdateUserData {
  name?: string;
  phone?: string | null;
  bio?: string | null;
  dateOfBirth?: string | null;
  country?: string | null;
  city?: string | null;
  address?: string | null;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  website?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  github?: string | null;
}
