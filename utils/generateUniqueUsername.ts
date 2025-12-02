import { supabase } from "@/lib/supabase";
import { generateRandomUsername } from "./generateUsername";

export const generateUniqueUsername = async (): Promise<string> => {
  let username = generateRandomUsername();
  let isUnique = false;

  while (!isUnique) {
    const { data, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username)
      .single();

    if (error && error.code === "PGRST116") {
      isUnique = true;
    } else if (!data) {
      isUnique = true;
    } else {
      username = generateRandomUsername();
    }
  }

  return username;
};
