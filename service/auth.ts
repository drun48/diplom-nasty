import { useAppStore } from "@/store/app";

export function login(
  access_token: string,
  role: string,
  email: string,
  id: string
) {
  const { role_user, access_token_cookie, email_user, id_user } =
    getCookieAuth();

  role_user.value = role;
  access_token_cookie.value = access_token;
  email_user.value = email;
  id_user.value = id;

  readAuthCookie();

  useRouter().push("/");
}

export function logout() {
  const { role_user, access_token_cookie, email_user, id_user } =
    getCookieAuth();
  role_user.value = "";
  access_token_cookie.value = "";
  email_user.value = "";
  id_user.value = "";

  const appStore = useAppStore();
  appStore.role = "";
  appStore.email = "";
  appStore.id = "";

  useRouter().push("/auth");
}

export function readAuthCookie() {
  const appStore = useAppStore();
  const { role_user, access_token_cookie, email_user, id_user } =
    getCookieAuth();
  appStore.role = role_user.value;
  appStore.email = email_user.value;
  appStore.id = id_user.value;
}

function getCookieAuth() {
  return {
    access_token_cookie: useCookie("access_token"),
    role_user: useCookie("role_user"),
    email_user: useCookie("email_user"),
    id_user: useCookie("id_user"),
  };
}
