import { useAppStore } from "@/store/app";
import { readAuthCookie } from "@/service/auth";

const redirect: Record<string, string> = {
  ADMIN: "/curators",
  CURATOR: "/",
};

export default function (role: string) {
  return async function (route: any) {
    const appStore = useAppStore();
    const router = useRouter();
    if (!appStore.getRole) readAuthCookie();
    if (!appStore.getRole) {
      router.push("/auth");
    } else if (role !== appStore.getRole) {
      router.push(redirect[appStore.getRole]);
    } else {
      return true;
    }
  };
}
