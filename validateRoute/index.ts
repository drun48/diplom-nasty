import { useAppStore } from "@/store/app";

const redirect: Record<string, string> = {
  ADMIN: "/curators",
  CURATOR: "/",
};

export default function (role: string) {
  return async function (route: any) {
    const appStore = useAppStore();
    const router = useRouter();
    console.log(appStore.getRole)
    if (!appStore.getRole) {
      router.push("/auth");
    } else if (role !== appStore.getRole) {
      router.push(redirect[appStore.getRole]);
    } else {
      return true;
    }
  };
}
